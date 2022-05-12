import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Registor from "../components/registor/Registor";

function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registor" component={Registor} />
            </Switch>
        </Router>
    );
}

export default Routing;
