import React, { CSSProperties } from 'react'

const buttonStyles: CSSProperties = {
  fontSize: 18,
  fontWeight: 'bold',
  background: 'green',
  color: 'white',
  borderRadius: 4,
  boxShadow: '2px 2px 4px',
}

const Button = (props: {
  name?: string
  value: string
  style?: CSSProperties
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
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
