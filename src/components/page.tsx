import React, { useEffect, useRef, useState } from 'react'

function Page() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <div className='page'>
      <TopAppBar showShadow={isScrolled}/>
      <Main setIsScrolled={setIsScrolled}/>
    </div>
  )
}


type TopAppBarProps = {
  showShadow: boolean
}
function TopAppBar({ showShadow }: TopAppBarProps) {
  return (
    <div className='app-bar-wrapper'>
      <div className={"app-bar " + (showShadow ? 'shadow' : '')}>ble</div>
    </div>
  )
}


type MainProps = {
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>
}
function Main({setIsScrolled}: MainProps) {
  const mainRef = useRef<HTMLDivElement | null>(null)

  function handleMainScroll(e: React.UIEvent) {
    const scrollTop = (e.target as HTMLDivElement).scrollTop

    setIsScrolled(isScrolled => {
      if (scrollTop === 0) {
        return false
      } else if (!isScrolled) {
        return true
      } else {
        return isScrolled
      }
    })
  }

  // On-startup scrollTop check
  useEffect(() => {
    if (mainRef && mainRef.current) {
      setIsScrolled(mainRef.current.scrollTop !== 0)
    }
  }, [setIsScrolled])

  return (
    <div ref={mainRef} className="main" onScroll={handleMainScroll}>
      <div className="content">
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
        <p>
          If you don’t experience the problems described above or don’t feel
          comfortable using JavaScript tools yet, consider adding React as a
          plain tag on an HTML page, optionally with JSX. This is also the
          easiest way to integrate React into an existing website. You can
          always add a larger toolchain if you find it helpful!
        </p>
      </div>
      <div>
        <button className="btn">Admin</button>
        <button className="btn">Admin</button>
        <button className="btn">Reader</button>
      </div>
    </div>
  )
}

export default Page