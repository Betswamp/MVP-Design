import React, { Component } from 'react'
// import TinderCard from '../react-tinder-card/index'
import landing1 from "../../../images/landing-Bets-cards-games-1.png";
import landing2 from "../../../images/landing-Bets-cards-awards.png";
import landing3 from "../../../images/landing-Bets-cards-sports.png";
import landing4 from "../../../images/landing-Bets-cards-EVERY.png";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import SwiperCore, {
    Autoplay, Pagination, Navigation, EffectCards
} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectCards]);
class SwipeCard extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }


    render() {

        return (
            <div>
                <Swiper effect={'cards'} grabCursor={true} className="swiper mySwiper" autoplay={{
                    "delay": 2000,
                    "disableOnInteraction": false
                }}
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide class="swiper-slide">
                            <img src={landing1} />
                        </SwiperSlide>
                        <SwiperSlide class="swiper-slide">
                            <img src={landing2} />
                        </SwiperSlide>
                        <SwiperSlide class="swiper-slide">
                            <img src={landing3} />
                        </SwiperSlide>
                        <SwiperSlide class="swiper-slide">
                            <img src={landing4} />
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        );
    }
}


export default SwipeCard