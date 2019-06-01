import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import {Heroes} from "./Heroes";
import {Scoreboard} from "./Scoreboard";

export class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <p>공통메뉴</p>
                {/*라우팅영역*/}
                <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/heroes" component={Heroes}></Route>
                <Route path="/scoreboard" component={Scoreboard}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}