import React, { CSSProperties } from 'react'

const buttonStyles: CSSProperties = {
  fontWeight: 'bold',
}

const Button = (props: {
  name?: string
  value: string
  onClick: () => void
  style?: CSSProperties
}): JSX.Element => (
  <input
    type="button"
    name={props.name}
    value={props.value}
    style={{ ...buttonStyles, ...props.style }}
    onClick={props.onClick}
  />
)

export default Button
