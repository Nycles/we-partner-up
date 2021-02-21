import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Confirm } from "./Confirm/Confirm"
import { Home } from "./Home/Home"
import { SignUp } from "./SignUp/SignUp"

export const Navigation: React.FC = () => {
  return (
    <Router basename="/" forceRefresh={false}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/confirm" component={Confirm} />
      </Switch>
    </Router>
  )
}
