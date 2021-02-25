function setConfig(key: string, value: string) {
  localStorage.setItem(key, value)
}

function getConfig(key: string, dflt: string): string {
  return localStorage.getItem(key) ?? dflt
}

export { setConfig, getConfig }