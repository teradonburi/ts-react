import React from 'react'

type InjectProps = { log: string }

function withLogger<T>(Component: React.ComponentType<T & InjectProps>) {
  return function wrap(props: T & InjectProps): JSX.Element {
    const { log } = props
    // ロジックをねじ込む
    React.useEffect(() => {
      console.log(`${log} mount`)

      return () => console.log(`${log} unmount`)
    }, [])

    return <Component {...props} />
  }
}

export default withLogger
