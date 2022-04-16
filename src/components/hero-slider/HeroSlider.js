import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from "swiper";
import { v4 as uuidv4 } from 'uuid';
import 'swiper/css';
import HeroSlide from './HeroSlide';

const slides = [
    {
        title: 'South of Ukraine Fashion Days ',
        subtitle: 'Яскраві образи від українських дизайнерів ',
        img: 'https://tic.sladko.digital/wp-content/uploads/2021/09/elena-de-soto-w423NnHFjFg-unsplash-1-1536x926.jpg'
    },
    {
        title: 'Какойто текст',
        subtitle: 'Lorem Lorem Lorem Lorem',
        img: 'https://tic.sladko.digital/wp-content/uploads/2021/12/26172621_1956733717676582_3484499359655914309_o5a4ca91e5f234-1536x590.jpg'
    }
]

const elements = slides.map(item => {
    return (
        <SwiperSlide key={uuidv4() + 1}><HeroSlide key={uuidv4() + 1} title={item.title} subtitle={item.subtitle} img={item.img} /></SwiperSlide>
    )
})

const HeroSlider = () => {
    return (
        <Swiper
            className='swiper-hero hero-slider'
            direction={"vertical"}
            effect={"fade"}
            loop={true}
            modules={[EffectFade, Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

        >

            {elements}

        </Swiper>
    );
};

export default HeroSlider;