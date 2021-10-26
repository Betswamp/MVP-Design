import React, { Component, Fragment } from "react";
import greenDot from "../../../images/green-dot.png";
import cardBackground from "../../../images/ground.png";
import carbon_timer from "../../../images/carbon_timer.png";
import redDot from "../../../images/red-dot.png";
class SideBar extends Component {
    componentDidMount = () => {

    };
    handelSideMenu = () => {
        document.getElementById('sidebar').style.display = 'none'
      };

    render() {
        return (
            <Fragment>
                <div className="sidebar" id="sidebar">
                    <div className="data-list">
                        <div
                            className="row p-3 image-card"
                            style={{ backgroundImage: `url(${cardBackground})` }}
                        >
                            <div className="layer"></div>
                            <div className="col-10 text-white top-text mb-3">
                                <img src={greenDot} className="me-4 mb-1" width="14px" />
                                <span>Soccer</span>
                            </div>
                            <div className="col-2 text-white text-end mb-3 close-btn" onClick={() => this.handelSideMenu()}>
                                <i className="fas fa-times"></i>
                            </div>
                            <div className="col-12 mt-4 mb-3">
                                <h4 className="team-name">
                                    Chealsea <span className="theam-text-color">vs</span>{" "}
                                    Machester City
                                </h4>
                            </div>
                            <div className="col-12 mt-4 mb-3">
                                <p className="theam-text-color m-0">Pool size</p>
                            </div>
                            <div className="col-6">
                                <h3 className="mb-0">$3,600</h3>
                            </div>
                            <div className="col-6">
                                <h5 className="text-end mb-0">
                                    <img
                                        src={carbon_timer}
                                        className="me-3"
                                        width="23px"
                                        style={{ verticalAlign: "sub" }}
                                    />
                                    3 Days left
                                </h5>
                            </div>
                        </div>
                        <div className="odds-list p-3">
                            <div className="odds-card active p-3 mb-3">
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <h4>Chealsea</h4>
                                    </div>
                                    <div className="col-6 text-end">
                                        <img src={redDot} className="red-dot" />
                                    </div>
                                </div>
                                <div className="row info">
                                    <div className="col-12 mb-2">
                                        <p>
                                            Participants:&nbsp;&nbsp; <span>5</span>
                                        </p>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <p>
                                            Total amount staked::&nbsp;&nbsp; <span>$2000</span>
                                        </p>
                                    </div>
                                    <div className="col-9 col-md-10 mb-4">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-2 mb-4">
                                        <p className="percent m-0">55.5%</p>
                                    </div>
                                </div>
                                <div className="row form mt-3">
                                    <div className="col-md-5">
                                        <p>Stake</p>
                                        <div className="position-relative">
                                            <input className="form-control" />
                                            <span className="position-absolute max-btn">MAX</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-4">
                                        <p style={{ marginTop: "2.3rem" }}>Potential Return</p>
                                        <p style={{ fontSize: "24px" }} className="mb-0 mt-3">
                                            $0.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="odds-card p-3 mb-3">
                                <div className="row ">
                                    <div className="col-6">
                                        <h4>Chealsea</h4>
                                    </div>
                                    <div className="col-6 text-end">
                                        <img src={redDot} className="red-dot" />
                                    </div>
                                </div>
                                <div className="row info">
                                    <div className="col-12 mb-2">
                                        <p>
                                            Participants:&nbsp;&nbsp; <span>5</span>
                                        </p>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <p>
                                            Total amount staked::&nbsp;&nbsp; <span>$2000</span>
                                        </p>
                                    </div>
                                    <div className="col-10 mb-4">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "25%" }}
                                                aria-valuenow="25"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="col-2 mb-4">
                                        <p className="percent m-0">55.5%</p>
                                    </div>
                                </div>
                                <div className="row form mt-3">
                                    <div className="col-md-5">
                                        <p>Stake</p>
                                        <div className="position-relative">
                                            <input className="form-control" />
                                            <span className="position-absolute max-btn">MAX</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-4">
                                        <p style={{ marginTop: "2.3rem" }}>Potential Return</p>
                                        <p style={{ fontSize: "24px" }} className="mb-0 mt-3">
                                            $0.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bid-button p-3 mb-3">
                            <button className="btn">PLACE BET</button>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}
export default SideBar;
