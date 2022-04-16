
const HeroSlide = (props) => {
    return (

        <div className="swiper-slide hero-slider__slide">
            <picture className="hero-slider__picture">

                <img className="hero-slider__img " src={props.img} alt="#" />
            </picture>
            <div className="hero-slider__content">
                <div className="hero-slider__inner">
                    <h2 className="hero-slider__title">{props.title}</h2>
                    <h3 className="hero-slider__subtitle">{props.subtitle}</h3>
                    <a href="#" className="hero-slider__link arrowed">дізнатися
                        більше
                    </a>
                </div>
            </div>
        </div>

    )
}

export default HeroSlide;