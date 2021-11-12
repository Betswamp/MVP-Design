import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Elements/Header";
import Footer from "../../components/Elements/Footer";
import GameCard from "../../components/Cards/GameCard";
import NewsCard from "../../components/Cards/NewsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import AOS from "aos";
import "aos/dist/aos.css";
////Images
import TopImage from "../../../images/landing-Bets-cards-games.png";
import arrowRight from "../../../images/arrow-right.svg";
import playImage from "../../../images/play.png";
import statiImage from "../../../images/stati.png";
import validateImage from "../../../images/validate.png";
import mobileImage from "../../../images/mobile.png";
import lineImage from "../../../images/line.png";
import ueImage from "../../../images/ue.png";
import bscImage from "../../../images/bsc.png";
import segaImage from "../../../images/sega.png";
import xboxImage from "../../../images/xbox.png";
import psImage from "../../../images/ps.png";
import chartImage from "../../../images/chart.png";

const SalesChart = loadable(() =>
    pMinDelay(import("../../components/Chart/SalesChart"), 1000)
);
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: {
                superLargeDesktop: {
                    // the naming can be any, depends on you.
                    breakpoint: { max: 4000, min: 3000 },
                    items: 5,
                },
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 5,
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 2,
                },
            },
            responsive_center: {
                superLargeDesktop: {
                    // the naming can be any, depends on you.
                    breakpoint: { max: 4000, min: 3000 },
                    items: 4,
                },
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 4,
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 2,
                },
            },
            responsive_game_card: {
                superLargeDesktop: {
                    // the naming can be any, depends on you.
                    breakpoint: { max: 4000, min: 3000 },
                    items: 3,
                },
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 3,
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 1,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                },
            },
        };
    }

    componentDidMount = () => {
        AOS.init();
    };

    //GameCard
    getGameCard = () => {
        let items = [];
        for (var i = 1; i <= 10; i++) {
            items.push(<GameCard key={i} />);
        }
        return items;
    };

    getNewsCard = () => {
        let items = [];
        for (var i = 1; i <= 10; i++) {
            items.push(<NewsCard key={i} />);
        }
        return items;
    };

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container mb-5 mb-md-0" id="section-home">
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="row">
                        <div
                            className="col-lg-8 col-md-7 col-sm-12"
                            data-aos="zoom-in-up"

                            data-aos-easing="linear"
                        >
                            <h2 className="text-white text-center text-md-start">
                                Decentralized <br />
                                <span>Peer-to-Peer Betting</span>
                            </h2>
                            <p className="mt-5 mt-md-4 text-white text-center text-md-start">
                                Create events on litrally anything verifiable and place
                                unlimited bets.{" "}
                            </p>
                            <div className="text-center text-md-start my-4 my-md-0">
                                <NavLink
                                    to="/app"
                                    className="btn btn-md theam-bg-red mt-2 mt-md-5 homeTopBtn"
                                >Launch app</NavLink>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-5 col-sm-12 text-center homeTopImage"
                            data-aos="zoom-in-up"
                            data-aos-easing="linear"
                        >
                            <img src={TopImage} className="img-fluid my-5 my-md-0" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-md-5" id="section-analytics">
                    <p className="mt-2 mt-md-4 text-white px-2 px-md-4 pb-4 div-p">
                        Market Analytics{" "}
                        <img src={arrowRight} className="ms-3" width="21px" />
                    </p>
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="linear"
                    >
                        <div className="col-lg-12">
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                arrows={false}
                                showDots={false}
                                responsive={this.state.responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={this.props.deviceType}
                                itemClass="px-2"
                            >
                                <div className="card chart-card py-4 px-2  overflow-hidden align-items-stretch col-12">
                                    <img src={chartImage} className="mt-3" />
                                </div>

                                <div className="card chart-card  overflow-hidden text-center py-3  align-items-stretch col-12">
                                    <h5 className="theam-text-color m-0">Price</h5>
                                    <h4 className="text-white mt-3">$ 0.8</h4>
                                </div>

                                <div className="card chart-card  overflow-hidden text-center py-3 align-items-stretch col-12">
                                    <h5 className="theam-text-color m-0">24 Hr change</h5>
                                    <h4 className="theam-text-green mt-3">5.89 %</h4>
                                </div>

                                <div className="card chart-card  overflow-hidden text-center py-3 align-items-stretch col-12">
                                    <h5 className="theam-text-color m-0">Market cap</h5>
                                    <h4 className="text-white mt-3">$10m</h4>
                                </div>

                                <div className="card chart-card  overflow-hidden text-center py-3 align-items-stretch col-12">
                                    <h5 className="theam-text-color m-0">Total Supply</h5>
                                    <h4 className="text-white mt-3">250,000,000</h4>
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-md-5" id="section-analytics">
                    <div className="row py-5">
                        <div className="col-lg-12 position-relative" id="video-frame">
                            <video poster="placeholder.png" controls={false}>
                                <source src="movie.mp4" type="video/mp4" />
                                <source src="movie.ogg" type="video/ogg" />
                            </video>
                            <a id="play-video" className="video-play-button " href="#">
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-md-5" id="section-statistics">
                    <p className="mt-2 mt-md-4 text-white px-2 px-md-4 pb-4 div-p">
                        <img src={statiImage} className="me-2" width="20.02" /> Platform
                        Statistics
                    </p>
                    <div
                        className="row py-5"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="linear"
                    >
                        <div className="col-lg-12">
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                arrows={false}
                                showDots={false}
                                responsive={this.state.responsive_center}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={this.props.deviceType}
                                itemClass="px-2"
                            >

                                <div className="card chart-card  overflow-hidden text-center py-3 align-items-stretch col-12">
                                    <h5 className="theam-text-color m-0">Total Payout</h5>
                                    <h4 className="text-white mt-4">$100,000,00</h4>
                                </div>

                                <div className="card chart-card overflow-hidden text-center py-3 align-items-stretch col-12">
                                    <h5 className="theam-text-color m-0">Total 24hr Payout</h5>
                                    <h4 className="text-white mt-4">$25,000,00</h4>
                                </div>

                                <div className="card chart-card  overflow-hidden text-center py-3 align-items-stretch col-12">
                                    <h5 className="theam-text-color m-0">Active users</h5>
                                    <h4 className="text-white mt-4">4,000,00</h4>
                                </div>

                                <div className="card chart-card  overflow-hidden text-center py-3 align-items-stretch col-12">
                                    <h5 className="theam-text-color m-0">Total bet Created</h5>
                                    <h4 className="text-white mt-4">250,00</h4>
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="space-100"></div>
                <div className="container-fluid px-md-5 my-5" id="section-bet-cards">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        arrows={true}
                        showDots={false}
                        responsive={this.state.responsive_game_card}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        itemClass="carousel-item-padding-40-px px-4"
                    >
                        {this.getGameCard()}
                    </Carousel>
                    <div className="mt-4 px-4">
                        <p className="mt-2 mt-md-4 text-white text-end">
                            View Events
                            <img src={arrowRight} className="ms-3" width="20" />
                        </p>
                    </div>
                </div>
                <div className="container-fluid px-md-5 mt-5" id="section-validate">
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="row">
                        <div
                            className="col-lg-7 mt-5"
                            data-aos="zoom-in-down"

                            data-aos-easing="linear"
                        >
                            <h1 className="font-raleway">
                                GET PAID TO
                                <br />
                                <span className="theam-text-color font-raleway">
                                    VALIDATE
                                </span>{" "}
                                EVENTS
                            </h1>
                            <p>
                                BUILD YOUR REPUTATION AS A VALIDATOR AND Earn passive income
                                WHILE YOU AT IT.
                            </p>
                        </div>
                        <div
                            className="col-lg-4 text-center"
                            data-aos="zoom-in-down"
                            data-aos-easing="linear"
                        >
                            <img src={validateImage} className="img-fluid" />
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
                <div className="container-fluid my-2" id="section-bet-on">
                    <div className="space-20"></div>
                    <div className="row">
                        <div
                            className="col-lg-6 p-0 order-1 order-md-0"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-easing="linear"
                        >
                            <img src={mobileImage} width="70%" />
                        </div>
                        <div
                            className="col-lg-6 d-flex justify-content-center align-items-center flex-column order-0 order-md-1"
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            data-aos-easing="linear"
                        >
                            <h1 className="mt-5">
                                Bet on <br />
                                the <span className="theam-text-color">go</span>
                            </h1>
                            <p className="mt-3">Coming soon to your app store</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-md-5 my-5" id="section-news">
                    <div className="space-100"></div>
                    <p className="mt-2 mt-md-4 text-white px-2 px-md-3 pb-4 div-p-1">
                        NEWS <img src={lineImage} className="ms-3" />
                    </p>
                    <div className="space-50"></div>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        arrows={false}
                        showDots={false}
                        responsive={this.state.responsive_game_card}
                        ssr={true} // means to render carousel on server-side.
                        autoPlay={true}
                        autoPlaySpeed={1500}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        itemClass="carousel-item-padding-40-px px-4"
                    >
                        {this.getNewsCard()}
                    </Carousel>
                </div>

                <div
                    className="container-fluid px-md-5 my-5"
                    id="section-partners"
                >
                    <div className="space-100"></div>
                    <p className="mt-2 mt-md-4 text-white px-2 px-md-3 pb-4 div-p-1 text-uppercase">
                        partners <img src={lineImage} className="ms-3" />
                    </p>
                    <div className="space-50"></div>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        arrows={true}
                        showDots={false}
                        responsive={this.state.responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1500}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        itemClass="d-flex justify-content-center align-items-center flex-column"
                    >
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="100"
                            data-aos-easing="linear"
                        >
                            <img src={ueImage} width="100" />
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-easing="linear"
                        >
                            <img src={bscImage} width="100%" />
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="800"
                            data-aos-easing="linear"
                        >
                            <img src={segaImage} width="100%" />
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            data-aos-easing="linear"
                        >
                            <img src={xboxImage} width="100%" />
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="1200"
                            data-aos-easing="linear"
                        >
                            <img src={psImage} width="100%" />
                        </div>
                    </Carousel>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
export default Index;
