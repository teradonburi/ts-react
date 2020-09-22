import React from 'react'
import { Link } from 'react-router-dom'

const IndexPage = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/logic">ロジック分離サンプル</Link>
      <Link to="/menu">メニューページサンプル</Link>
    </div>
  )
}

export default IndexPage
