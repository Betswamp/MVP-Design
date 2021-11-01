import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Elements/Header";
import Footer from "../../components/Elements/Footer";
import GameCard from "../../components/Cards/GameCard";
import NewsCard from "../../components/Cards/NewsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { trade, lineData } from "./demo.js";
import AOS from "aos";
import "aos/dist/aos.css";
////Images
import farmeFirst from "../../../images/farme-1.png";
import farmeSec from "../../../images/frame-2.png";
import farmeTh from "../../../images/frame-3.png";
import { createChart } from "lightweight-charts";
var chart = null;
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive: {
                superLargeDesktop: {
                    // the naming can be any, depends on you.
                    breakpoint: { max: 4000, min: 1480 },
                    items: 4,
                },
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 4,
                },
                tablet: {
                    breakpoint: { max: 1480, min: 464 },
                    items: 2,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                },
            },
            chartWidth:
                document.getElementById("chart") != undefined
                    ? document.getElementById("chart").clientWidth
                    : 500,
            chart: null,
            currentToken: farmeFirst
        };
    }
    updateSize = () => {
        chart.resize(document.getElementById("chart").clientWidth, 430);
    };

    componentDidMount = () => {
        window.addEventListener("resize", this.updateSize);
        AOS.init();
        chart = createChart(document.querySelector("#chart"), {
            width: this.state.chartWidth,
            height: 430,
            layout: {
                backgroundColor: "transparent",
                textColor: "rgba(255, 255, 255, 0.8)",
            },
            timeScale: {
                timeVisible: false,
                secondsVisible: false,
            },
            rightPriceScale: {
                scaleMargins: {
                    top: 0.1,
                    bottom: 0.1,
                },
            },
            grid: {
                vertLines: {
                    color: "transparent",
                },
                horzLines: {
                    color: "transparent",
                },
            },
            entireTextOnly: false,
        });
        var candleSeries = chart.addCandlestickSeries();
        candleSeries.setData(trade);
        chart
            .addLineSeries({
                color: "rgba(4, 111, 232, 1)",
                lineWidth: 1,
            })
            .setData(lineData);
        setTimeout(async () => {
            this.setState({
                chartWidth: document.getElementById("chart").clientWidth,
            });
            await this.updateSize();
        }, 500);
    };

    updateSize = () => {
        chart.resize(document.getElementById("chart").clientWidth, 438);
    };

    handleClick = (img) => {
        this.setState({
            currentToken: img
        })
    }


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
                <div className="container-fluid">
                    <div
                        className="pb-md-5 pb-2"
                        id="chart"
                        style={{ width: "100%" }}
                    ></div>
                </div>
                <div
                    className="container-fluid px-2 px-md-5 py-md-5 py-2"
                    id="section-analytics"
                >
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
                                itemClass="carousel-item-padding-40-px px-3"
                            >
                                <div>
                                    <div className="card chart-card  overflow-hidden text-center py-3">
                                        <h5 className="theam-text-color m-0">Price</h5>
                                        <h4 className="text-white mt-3">$ 0.8</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="card chart-card  overflow-hidden text-center py-3">
                                        <h5 className="theam-text-color m-0">24 Hr change</h5>
                                        <h4 className="theam-text-green mt-3">5.89 %</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="card chart-card  overflow-hidden text-center py-3">
                                        <h5 className="theam-text-color m-0">Market cap</h5>
                                        <h4 className="text-white mt-3">$10m</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="card chart-card  overflow-hidden text-center py-3">
                                        <h5 className="theam-text-color m-0">Total Supply</h5>
                                        <h4 className="text-white mt-3">250,000,000</h4>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div
                    className="container-fluid px-2 px-md-5 py-md-5 py-2"
                    id="about-section-1"
                >
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="linear"
                    >
                        <div className="col-lg-12">
                            <h4>About</h4>
                            <p className="mt-4">
                                Betswamp is a decentralized peer-to-peer iGaming platform built
                                on Binance smart chain. The platform completely takes out the
                                traditional odds and booking system found in conventional
                                centralized platforms and provide gamers the flexibility to
                                create betting events on any category and terms of choice that
                                other players can wager on, hence offering no limitation on the
                                types of event created nor the size of the reward pool attached
                                to the event.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="container-fluid px-2 px-md-5 py-md-5 py-2"
                    id="about-section-2"
                >
                    <div
                        className=""
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="linear"
                    >
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            arrows={false}
                            showDots={false}
                            responsive={this.state.responsive}
                            ssr={false} // means to render carousel on server-side.
                            infinite={false}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            itemClass="px-4 row"
                        >
                            <div className="card about-card  overflow-hidden p-2 p-md-4 align-items-stretch ">
                                <h4 className="theam-text-color mb-3">Anonymous</h4>
                                <p>Betswamp does not collect any form of data from users neither is registration required to use the platform. gaming on Betswamp has been designed with flexibility and security in mind, gamers can get started just as easily as connecting their wallets to the platform and get instant access to a global decentralized peer-to-peer network of iGaming.</p>
                            </div>
                            <div className="card about-card  overflow-hidden p-2 p-md-4 align-items-stretch ">
                                <h4 className="theam-text-color mb-3">Decentralized</h4>
                                <p>Betswamp is 100% decentralized with no central authority or influence on events, all events are user-created, and outcomes are also validated by users using a unique verification algorithm based on the "wisdom of crowds" concept this concept builds upon the idea that that large groups of people are collectively smarter than individual experts when it comes to problem-solving, decisionmaking, innovating, and predicting.</p>
                            </div>
                            <div className="card about-card  overflow-hidden p-2 p-md-4 align-items-stretch">
                                <h4 className="theam-text-color mb-3">Fair</h4>
                                <p>On Betswamp, Players earn their exact winnings based upon their stake percentage on the event pool after validation. Unlike other platforms, Betswamp offers Participants on an event bonus from a portion of the pool regardless of the outcome chosen on that event. Betswamp smart contract utilizes a unique distribution algorithm that ensures Players do not only get guaranteed payouts on events won but also earn regardless of the outcome on each event participated.</p>
                            </div>
                            <div className="card about-card  overflow-hidden p-2 p-md-4 align-items-stretch">
                                <h4 className="theam-text-color mb-3">Peer-To-Peer</h4>
                                <p>on Betswamp, users wager on events created by other users on the platform, unlike conventional iGaming platforms where Players wager on events provided by bookies. No event is created or controlled by the system. Events on Betswamp are validated by validators within the platform with no central control or influence from any external or internal party.</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div
                    className="container-fluid px-2 px-md-5 py-md-5 py-2"
                    id="about-section-3"
                >
                    <div className="col-lg-12 mb-2 mb-md-5 text-center text-md-start">
                        <h4>Tokenomics</h4>
                    </div>
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-easing="linear"
                    >
                        <div className="col-lg-6 align-items-stretch mb-4">
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <div class="form-check my-2 my-md-5">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={(this.state.currentToken == farmeFirst) ? true : false} onChange={() => this.handleClick(farmeFirst)} />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        8% Sell Tax
                                    </label>
                                </div>
                                <div class="form-check my-2 my-md-5">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={(this.state.currentToken == farmeSec) ? true : false} onChange={() => this.handleClick(farmeSec)} />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        4%  Buy Tax
                                    </label>
                                </div>
                                <div class="form-check my-2 my-md-5">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked={(this.state.currentToken == farmeTh) ? true : false} onChange={() => this.handleClick(farmeTh)} />
                                    <label className="form-check-label" for="flexRadioDefault3">
                                        Distribution
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 align-items-stretch">
                            <img src={this.state.currentToken} className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div
                    className="container-fluid px-2 px-md-5 py-md-5 py-2"
                    id="about-section-4"
                >
                    <div className="col-lg-12 mb-2 mb-md-5 text-center text-md-start">
                        <h4>Road Map</h4>
                    </div>
                </div>

                <div
                    className="container-fluid px-2 px-md-5 py-md-5 py-2 text-center"
                    id="about-section-5"
                >
                    <div className="space-100"></div>
                    <h3 className="">
                        GET THE BIG <br />
                        <span>PICTURE</span>
                       
                    </h3>
                    <button className="btn mt-4">Read Whitepaper</button>
                    <div className="space-100"></div>
                </div>
                <div
                    className="container-fluid px-2 px-md-5 py-md-5 py-2"
                    id="about-section-6"
                >
                    <div className="col-lg-12 mb-2 mb-md-5 text-center text-md-start">
                        <h4>FAQS</h4>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
export default Index;
