import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Dashboard from "./Dashboard";
import RealMap from "./RealMap";
import Admin from "./Admin";

export default class App extends Component {
    render() {
        return(
            <Router>
                <Route path="/" exact component={Dashboard} />
                <Route path="/map/:ID" exact component={RealMap} />
                <Route path="/admin" exact component={Admin} />
            </Router>
        );
    }
}
