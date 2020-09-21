import React, { CSSProperties } from 'react'

const textInputStyles: CSSProperties = {
  fontSize: 18,
  fontWeight: 'bold',
}

const TextInput = (props: {
  name?: string
  value?: string
  style?: CSSProperties
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}): JSX.Element => (
  <input
    type="text"
    name={props.name}
    value={props.value}
    style={{ ...textInputStyles, ...props.style }}
    onChange={props.onChange}
  />
)

export default TextInput
