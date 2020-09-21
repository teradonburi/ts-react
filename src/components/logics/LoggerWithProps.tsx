import React from 'react'

function LoggerWithProps<T>({
  log,
  component,
  props,
}: {
  log: string
  component: React.ComponentType<T>
  props: T
}): React.ReactElement<T> {
  // ロジックをねじ込む
  React.useEffect(() => {
    console.log(`${log} mount`)

    return () => console.log(`${log} unmount`)
  }, [])

  const Component = component
  return <Component log={log} {...props} />
}

export default LoggerWithProps
