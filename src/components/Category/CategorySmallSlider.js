import { useEffect } from 'react';

import prev from '../../resources/images/slider/prev.png';
import next from '../../resources/images/slider/next.png';

import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

function CategorySmallSlider({pictures = []}) {
    useEffect(() => {
        new Swiper('.category-small-slider', {
            loop: false,
            slidesPerView: 8,
            preloadImages: false,
            lazy: {
                loadPrevNext: true
            },
            autoplay: {
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            },
            speed: 900,
            navigation: {
                nextEl: '.category-small-slider-next',
                prevEl: '.category-small-slider-prev'
            },
            breakpoints: {
                200: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 5
                },
                1000: {
                    slidesPerView: 6
                }
            }
        });
    }, []);

    const elements = pictures.map((item, i) => {
        return (
            <div key={i} className="swiper-slide category-small-slider-slide">
                <img data-src={item} className="swiper-lazy" alt={item} />
                <div className="swiper-lazy-preloader"></div>
            </div>
        )
    });

    return (
        <div className="swiper category-small-slider">
            <div className="swiper-wrapper category-small-slider-wrapper">
                {elements}
            </div>
            <div className="swiper-button-prev category-small-slider-prev">
                <img src={prev} alt="prev" />
            </div>
            <div className="swiper-button-next category-small-slider-next">
                <img src={next} alt="next" />
            </div>
        </div>
    )
}

export default CategorySmallSlider;