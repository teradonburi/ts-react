import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IndexPage from './components/pages/IndexPage'
import LogicPage from './components/pages/LogicPage'
import MenuPage from './components/pages/MenuPage'
import NotFoundPage from './components/pages/NotFoundPage'

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/logic" component={LogicPage} />
      <Route exact path="/menu" component={MenuPage} />
      <Route exact path="/" component={IndexPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default App
