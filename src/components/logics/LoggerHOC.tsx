import React from 'react'

export type LogProps = string

const withLogger = (log: LogProps) => {
  return function wrap(
    WrappedComponent: React.ComponentType
  ): React.ReactElement {
    // ロジックをねじ込む
    React.useEffect(() => {
      console.log(`${log} mount`)

      return () => console.log(`${log} unmount`)
    }, [])
    return <WrappedComponent />
  }
}

export default withLogger
