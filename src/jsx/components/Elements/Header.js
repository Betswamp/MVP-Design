import React, { Component, Fragment } from "react";
import logo from '../../../images/logo.png';
import { NavLink } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <Fragment>
                <nav
                    className="navbar navbar-expand-lg navbar-dark bg-dark bg-transparent"
                    aria-label="Fifth navbar example"
                >
                    <div className="container-fluid home-header">
                        <NavLink class="navbar-brand px-2 px-md-4" to="/">
                            <img src={logo} width="95" className="py-1" />
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample05"
                            aria-controls="navbarsExample05"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample05">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                            <form>
                                <ul className="navbar-nav">
                                    <li className="nav-item px-2 px-md-4">
                                        <NavLink className="nav-link text-white mt-1" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item px-2 px-md-4">
                                        <NavLink className="nav-link text-white mt-1" to="/#news">News</NavLink>
                                    </li>
                                    <li className="nav-item px-2 px-md-4">
                                        <NavLink className="btn btn-md theam-bg-red mt-1" to="/app">Launch app </NavLink>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    }
}
export default Header;
