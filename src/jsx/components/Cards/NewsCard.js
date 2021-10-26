import React, { Component, Fragment } from "react";
import darkImage from "../../../images/dark-img.png";
import carbon_timer from "../../../images/carbon_timer.png";
import arrowRight from "../../../images/arrow-right.svg";
class NewsCard extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount = () => { };

    render() {
        return (
            <Fragment>
                <div className="card game-card overflow-hidden game-news-card">
                    <div className="row image-card">
                        <div className="col-12 text-white">
                            <img src={darkImage} width="100%" />
                        </div>
                        <div className="col-12 bg-black">
                            <h6 className="px-2 m-0 py-1">
                                News Publicaion Title
                            </h6>
                        </div>
                    </div>
                    <div className="row px-2 mt-5 py-1">
                        <div className="col-6">
                            <p className="text-start theam-text-color mb-1">
                                Yahoo finance
                            </p>
                            <p className="text-start">
                                <img src={carbon_timer} className="me-2 time-img" width="20" /> 3 Days left
                            </p>
                        </div>
                        <div className="col-6">
                        <p className="text-start theam-text-color">
                             
                            </p>
                            <p className="text-end">
                                Read  <img src={arrowRight} className="ms-3" width="20" />
                            </p>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default NewsCard;
