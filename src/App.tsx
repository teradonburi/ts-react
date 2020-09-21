import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IndexPage from './components/pages/IndexPage'
import LogicPage from './components/pages/LogicPage'

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/logic" component={LogicPage} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </Router>
)

export default App
