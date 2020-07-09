import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import NavReactReducer from '../reducers/NavReactReducer';
import LoginReactReducer from '../reducers/LoginReactReducer';
import HomeReactReducer from '../reducers/HomeReactReducer';
import AboutReactReducer from '../reducers/AboutReactReducer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavReactReducer/><br/><br/>
          <Switch>
            <Route exact path="/" component={LoginReactReducer}/>
            <Route exact path="/Home" component={HomeReactReducer}/>
            <Route exact path="/About" component={AboutReactReducer}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
