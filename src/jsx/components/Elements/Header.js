import React, { Component, Fragment } from "react";
import logo from '../../../images/logo.png';
class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="container-fluid theam-bg-dark">
                    <header className="d-flex flex-wrap justify-content-center home-header">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <img src={logo} width="90" className="py-1"/>
                        </a>

                        <ul className="nav nav-pills pt-0 mt-0 pt-md-4 mt-md-2 justify-content-center justify-content-sm-end">
                            <li className="nav-item px-3"><a href="#" className="nav-link" >About</a></li>
                            <li className="nav-item px-3"><a href="#" className="nav-link">News</a></li>
                            <li className="nav-item px-3">
                                <a href="#" className="btn btn-md theam-bg-red">Launch app</a>
                            </li>
                        </ul>
                    </header>
                </div>
            </Fragment>
        );
    }
}
export default Header;
