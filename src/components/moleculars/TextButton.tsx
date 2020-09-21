import React from 'react'
import TextInput from '../atoms/TextInput'
import Button from '../atoms/Button'

const TextButton = ({
  label = '送信',
  onClick,
}: {
  label: string
  onClick: (text: string) => void
}): JSX.Element => {
  const [text, setText] = React.useState('')

  return (
    <div style={{ display: 'flex' }}>
      <TextInput
        style={{ marginRight: 10 }}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <Button value={label} onClick={() => onClick(text)} />
    </div>
  )
}

export default TextButton
