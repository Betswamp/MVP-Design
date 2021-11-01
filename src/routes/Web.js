import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Element
import SideBar from '../jsx/components/Elements/SideBar';
//Pages
import Home from '../jsx/pages/Home/Index';
import App from '../jsx/pages/App/Index';
import Admin from '../jsx/pages/Admin/Index';
import About from '../jsx/pages/About/Index';
class Web extends Component {
    render() {
        return (
            <>
                <SideBar />
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route
                            exact
                            path="/app"
                            component={App}
                        />
                        <Route
                            exact
                            path="/admin"
                            component={Admin}
                        />
                        <Route
                            exact
                            path="/about"
                            component={About}
                        />
                    </Switch>
                </BrowserRouter>
            </>
        );
    }

}
export default Web;