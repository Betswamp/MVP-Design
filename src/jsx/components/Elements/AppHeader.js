import React, { Component, Fragment } from "react";
import arrowDown from "../../../images/arrow-down.png";
import myBet from "../../../images/my-bet.png";
import { NavLink } from "react-router-dom";
class AppHeader extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {};
  render() {
    return (
      <Fragment>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark bg-transparent"
          aria-label="Fifth navbar example"
        >
          <div className="container-fluid">
            <a class="navbar-brand" href="#"></a>
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
                <ul className="navbar-nav" id="admin-navbar-nav">
                  <li className="nav-item px-2">
                    <NavLink className="nav-link text-white mt-1" to="/admin">
                      Admin
                    </NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link text-white" to="#">
                      My Bet
                      <img
                        src={myBet}
                        width="40px"
                        height="40px"
                        className="ms-2 me-3"
                      />
                      <img src={arrowDown} width="24px" />
                    </NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink className="nav-link text-white mt-1" to="#">
                      Wallet{" "}
                      <img src={arrowDown} width="24px" className="ms-2" />
                    </NavLink>
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
export default AppHeader;
