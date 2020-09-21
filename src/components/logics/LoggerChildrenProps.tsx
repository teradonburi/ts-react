import React from 'react'

function LoggerChildrenProps({
  log,
  children,
}: {
  log: string
  children: React.ReactNode[]
}): (string | React.ReactElement)[] | null | undefined {
  // ロジックをねじ込む
  React.useEffect(() => {
    console.log(`${log} mount`)

    return () => console.log(`${log} unmount`)
  }, [])

  // childrenだと文字列や複数の子も許容してしまうので基本的にそういう想定ではあまり使わないが、一応対応しておく
  const childrenWithProps = React.Children.map(children, (child) => {
    switch (typeof child) {
      case 'string':
        return child
      case 'object':
        return React.cloneElement(child as React.ReactElement, { log })
      default:
        return null
    }
  })

  return childrenWithProps
}

export default LoggerChildrenProps
