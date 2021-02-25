import React, { useCallback, useReducer, useRef } from 'react'

type AsyncState<T> = {
  status: 'idle' | 'pending' | 'resolved' | 'rejected'
  data?: T
  error?: any
}

const defaultInitialState: AsyncState<any> = {
  status: 'idle', data: undefined, error: undefined
}

function useAsync<T>(initialState?: AsyncState<T>) {
  const initialStateRef = useRef<AsyncState<T>>({
    ...defaultInitialState,
    ...initialState
  })

  const [{status, data, error}, setState] = useReducer(
    (s: AsyncState<T>, a: AsyncState<T>) => ({...s, ...a}),
    initialStateRef.current
  )

  const safeSetState = useSafeDispatch(setState)

  const setData = useCallback(
    (data: T) => safeSetState({ data, status: 'resolved'}),
    [safeSetState]
  )

  const setError = useCallback(
    error => safeSetState({ error, status: 'rejected' }),
    [safeSetState]
  )

  const reset = useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  )

  const run = useCallback(async (promise: Promise<T>) => {
    safeSetState({ status: 'pending' })
    try {
      const data = await promise
      setData(data)
      return data
    } catch (error) {
      setError(error)
      return Promise.reject(error)
    }
  }, [safeSetState, setData, setError])

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',
    setData,
    setError,
    error,
    status,
    data,
    run,
    reset
  }
}

function useSafeDispatch<T>(dispatch: React.Dispatch<AsyncState<T>>) {
  const mounted = useRef(false)
  React.useLayoutEffect(() => {
    mounted.current = true
    return () => { mounted.current = false }
  }, [])

  return useCallback(
    (state: AsyncState<T>) => (mounted.current ? dispatch(state) : void 0),
    [dispatch]
  )
}

export default useAsync