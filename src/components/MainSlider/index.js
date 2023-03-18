import {useEffect} from 'react'

import Swiper from 'swiper/bundle'

import collection from '../../assets/resources/images/slider/collection.jpg'
import every from '../../assets/resources/images/slider/every.jpg'
import galaxy from '../../assets/resources/images/slider/galaxy.jpg'
import lg from '../../assets/resources/images/slider/lg.jpg'
import mastercard from '../../assets/resources/images/slider/mastercard.jpg'
import philips from '../../assets/resources/images/slider/philips.jpg'
import privatbank from '../../assets/resources/images/slider/privatbank.jpg'
import slmsung from '../../assets/resources/images/slider/slmsung.jpg'
import prev from '../../assets/resources/images/slider/prev.png'
import next from '../../assets/resources/images/slider/next.png'

import 'swiper/css/bundle'

import './style.scss'

function MainSlider() {
    useEffect(() => {
        new Swiper('.swiper', {
            loop: false,
            preloadImages: false,
            lazy: {
                loadPrevNext: true
            },
            autoplay: {
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            },
            speed: 900,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        })
    }, [])

    return (
        <div className="swiper slider">
            <div className="swiper-wrapper slider-wrapper">
                <div className="swiper-slide slider-slide">
                    <img className="swiper-lazy" data-src={collection} alt="collection"/>
                    <div className="swiper-lazy-preloader"></div>
                </div>
                <div className="swiper-slide slider-slide">
                    <img className="swiper-lazy" data-src={every} alt="every"/>
                    <div className="swiper-lazy-preloader"></div>
                </div>
                <div className="swiper-slide slider-slide">
                    <img className="swiper-lazy" data-src={galaxy} alt="galaxy"/>
                    <div className="swiper-lazy-preloader"></div>
                </div>
                <div className="swiper-slide slider-slide">
                    <img className="swiper-lazy" data-src={lg} alt="lg"/>
                    <div className="swiper-lazy-preloader"></div>
                </div>
                <div className="swiper-slide slider-slide">
                    <img className="swiper-lazy" data-src={mastercard} alt="mastercard"/>
                    <div className="swiper-lazy-preloader"></div>
                </div>
                <div className="swiper-slide slider-slide">
                    <img className="swiper-lazy" data-src={philips} alt="philips"/>
                    <div className="swiper-lazy-preloader"></div>
                </div>
                <div className="swiper-slide slider-slide">
                    <img className="swiper-lazy" data-src={privatbank} alt="privatbank"/>
                    <div className="swiper-lazy-preloader"></div>
                </div>
                <div className="swiper-slide slider-slide">
                    <img className="swiper-lazy" data-src={slmsung} alt="slmsung"/>
                    <div className="swiper-lazy-preloader"></div>
                </div>
            </div>
            <div className="swiper-button-prev slider-button-prev">
                <img src={prev} alt="prev"/>
            </div>
            <div className="swiper-button-next slider-button-next">
                <img src={next} alt="next"/>
            </div>
        </div>
    )
}

export default MainSlider