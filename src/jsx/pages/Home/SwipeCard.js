import React, { Component } from 'react'
// import TinderCard from '../react-tinder-card/index'
import landing1 from "../../../images/landing-Bets-cards-games-1.png";
import landing2 from "../../../images/landing-Bets-cards-awards.png";
import landing3 from "../../../images/landing-Bets-cards-sports.png";
import landing4 from "../../../images/landing-Bets-cards-EVERY.png";
import layers from "../../../images/layers.png";
import { Swiper, SwiperSlide } from "swiper";

class SwipeCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directionTinder: "swipeTopRight",
            directionToggle: "sideSlide",
            directionStack: "topRight",
            isOpen: false
        }
        this.Tinder = null
    }
    componentDidMount() {
       
    }


    render() {
        return (
            <div>
                
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src={landing1} />
                        </div>
                        <div class="swiper-slide">
                            <img src={landing2} />
                        </div>
                        <div class="swiper-slide">
                            <img src={landing3} />
                        </div>
                        <div class="swiper-slide">
                            <img src={landing4} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default SwipeCard