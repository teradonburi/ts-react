import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ViewPage from './components/pages/ViewPage'

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/view" component={ViewPage} />
    </Switch>
  </Router>
)

export default App
