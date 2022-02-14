import { useEffect } from 'react';

import Swiper from 'swiper/bundle';

import collection from '../../resources/images/slider/collection.jpg';
import every from '../../resources/images/slider/every.jpg';
import galaxy from '../../resources/images/slider/galaxy.jpg';
import lg from '../../resources/images/slider/lg.jpg';
import mastercard from '../../resources/images/slider/mastercard.jpg';
import philips from '../../resources/images/slider/philips.jpg';
import privatbank from '../../resources/images/slider/privatbank.jpg';
import slmsung from '../../resources/images/slider/slmsung.jpg';
import prev from '../../resources/images/slider/prev.png';
import next from '../../resources/images/slider/next.png';

import 'swiper/css/bundle';

import './Slider.scss';

function Slider() {
    useEffect(() => {
        new Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            },
            speed: 900,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    }, [])

    return (
        <div className="swiper slider">
            <div className="swiper-wrapper slider-wrapper">
                <div className="swiper-slide slider-slide">
                    <img src={collection} alt="collection" />
                </div>
                <div className="swiper-slide slider-slide">
                    <img src={every} alt="every" />
                </div>
                <div className="swiper-slide slider-slide">
                    <img src={galaxy} alt="galaxy" />
                </div>
                <div className="swiper-slide slider-slide">
                    <img src={lg} alt="lg" />
                </div>
                <div className="swiper-slide slider-slide">
                    <img src={mastercard} alt="mastercard" />
                </div>
                <div className="swiper-slide slider-slide">
                    <img src={philips} alt="philips" />
                </div>
                <div className="swiper-slide slider-slide">
                    <img src={privatbank} alt="privatbank" />
                </div>
                <div className="swiper-slide slider-slide">
                    <img src={slmsung} alt="slmsung" />
                </div>
            </div>
            <div className="swiper-button-prev slider-button-prev">
                <img src={prev} alt="prev" />
            </div>
            <div className="swiper-button-next slider-button-next">
                <img src={next} alt="next" />
            </div>
        </div>
    )
}

export default Slider;