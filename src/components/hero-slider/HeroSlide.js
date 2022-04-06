
const HeroSlide = (props) => {
    return (

        <div className="swiper-slide hero-slider__slide">
            <picture class="hero-slider__picture">

                <img class="hero-slider__img " src={props.img} alt="#" />
            </picture>
            <div class="hero-slider__content">
                <div class="hero-slider__inner">
                    <h2 class="hero-slider__title">{props.title}</h2>
                    <h3 class="hero-slider__subtitle">{props.subtitle}</h3>
                    <a href="#" class="hero-slider__link arrowed">дізнатися
                        більше
                    </a>
                </div>
            </div>
        </div>

    )
}

export default HeroSlide;