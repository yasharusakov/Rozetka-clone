import { useEffect } from 'react';

import prev from '../../resources/images/slider/prev.png';
import next from '../../resources/images/slider/next.png';

import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

function CategoryBigSlider({pictures = []}) {
    useEffect(() => {
        new Swiper('.category-big-slider', {
            loop: false,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
            },
            autoplay: {
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            },
            speed: 900,
            navigation: {
                nextEl: '.category-big-slider-next',
                prevEl: '.category-big-slider-prev',
            }
        });
    }, []);

    const elements = pictures.map((item, i) => {
        return (
            <div key={i} className="swiper-slide category-big-slider-slide">
                <img data-src={item} className="swiper-lazy" alt={item} />
                <div className="swiper-lazy-preloader"></div>
            </div>
        )
    });

    return (
        <div className="swiper category-big-slider">
            <div className="swiper-wrapper category-big-slider-wrapper">
                {elements}
            </div>
            <div className="swiper-button-prev category-big-slider-prev">
                <img src={prev} alt="prev" />
            </div>
            <div className="swiper-button-next category-big-slider-next">
                <img src={next} alt="next" />
            </div>
        </div>
    )
}

export default CategoryBigSlider;