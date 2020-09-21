import React from 'react'
import LoggerChildrenProps from '../logics/LoggerChildrenProps'
import LoggerWithProps from '../logics/LoggerWithProps'
import TextButton from '../moleculars/TextButton'

const LogTextButton = ({ log }: { log?: string }) => (
  <TextButton
    onClick={(text) => {
      console.log(log)
      console.log(text)
    }}
  />
)

const LogicPage = (): JSX.Element => {
  return (
    <div>
      <h1>childrenのpropsの拡張</h1>
      <LoggerChildrenProps log="with children props">
        <LogTextButton />
        ほげ
      </LoggerChildrenProps>
      <h1>componentのprops渡し</h1>
      <LoggerWithProps log="with props" component={LogTextButton} />
    </div>
  )
}

export default LogicPage
