import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Scoreboard from "./scoreboard/Scoreboard";
import Menu from "./Menu";
import {Index} from "./heroes/Index";

export class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu/>
          <div className="container py-3" style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/heroes" component={Index}></Route>
              <Route path="/scoreboard" component={Scoreboard}></Route>
            </Switch>
          </div>
        </>
      </BrowserRouter>
    )
  }
}
