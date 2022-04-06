import { useEffect, useState } from "react";

const FilterArr = {
    cats: [
        {
            name: 'Всі',
            active: true
        },
        {
            name: 'Фестивалі',
            active: false
        },
        {
            name: 'Концерти',
            active: false
        },
        {
            name: 'Виставки',
            active: false
        },

    ],
    card: [
        {
            cat: 'Фестивалі',
            image: 'https://tic.sladko.digital/wp-content/uploads/2021/12/26172621_1956733717676582_3484499359655914309_o5a4ca91e5f234-1536x590.jpg',
            title: 'Празднование Нового 2022 года на Соборной площади',
            date: '31.12.2021 – 31.12.2021',
            icon: 'https://tic.sladko.digital/wp-content/uploads/2021/11/songkran.png',
            descr: 'Впервые в городе запустят два салюта – один традиционно на Соборной, а второй в Корабельном районе.'
        },
        {
            cat: 'Концерти',
            image: 'https://tic.sladko.digital/wp-content/uploads/2021/09/markus-spiske-WUehAgqO5hE-unsplash-1-768x512.jpg',
            title: 'Фестиваль Велохвиля Николаев',
            date: '31.12.2021 – 31.12.2021',
            icon: 'https://tic.sladko.digital/wp-content/uploads/2021/11/sports.png',
            descr: 'LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem '
        },
        {
            cat: 'Фестивалі',
            image: 'https://tic.sladko.digital/wp-content/uploads/2021/11/IMG_9881-e1638952541537-1024x540.jpg',
            title: 'Николаев River FEST',
            date: '31.12.2021 – 31.12.2021',
            icon: 'https://tic.sladko.digital/wp-content/uploads/2021/11/songkran.png',
            descr: '21 и 22 мая 2022 на нижней Набережной (акватория г. Ингул) состоится фестиваль на воде «Николаев River FEST».'
        },
        {
            image: 'https://tic.sladko.digital/wp-content/uploads/2021/12/26172621_1956733717676582_3484499359655914309_o5a4ca91e5f234-1536x590.jpg',
            title: '2222Празднование Нового 2022 года на Соборной площади22222',
            date: '31.12.2021 – 31.12.2021',
            icon: 'https://tic.sladko.digital/wp-content/uploads/2021/11/songkran.png',
            descr: 'Впервые в городе запустят два салюта – один традиционно на Соборной, а второй в Корабельном районе.'
        },
        {
            cat: 'Концерти',
            image: 'https://tic.sladko.digital/wp-content/uploads/2021/09/markus-spiske-WUehAgqO5hE-unsplash-1-768x512.jpg',
            title: '33333Фестиваль Велохвиля Николаев3333',
            date: '31.12.2021 – 31.12.2021',
            icon: 'https://tic.sladko.digital/wp-content/uploads/2021/11/sports.png',
            descr: 'LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem '
        },
        {
            cat: 'Виставки',
            image: 'https://tic.sladko.digital/wp-content/uploads/2021/11/IMG_9881-e1638952541537-1024x540.jpg',
            title: '4444Николаев River FEST4444',
            date: '31.12.2021 – 31.12.2021',
            icon: 'https://tic.sladko.digital/wp-content/uploads/2021/11/songkran.png',
            descr: '21 и 22 мая 2022 на нижней Набережной (акватория г. Ингул) состоится фестиваль на воде «Николаев River FEST».'
        },
    ]
}

const catsTitleDescktop = () => {
    return FilterArr.cats.map(item => {
        let tabClass = '';
        if (item.active) {
            tabClass = 'active';
        }
        return (
            <li className="tabs-nav__name tabs-nav "><a className={tabClass} href="#tab-1">{item.name}</a></li>
        )
    })
}

const CardFilter = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        return setItems(FilterArr.card)
    })
    console.log(items);
    const cardsView = items.map((item, i) => {
        if (i < 4) {
            return (
                <article className="col-lg-3 col-md-6 col-sm-6 p-2 col-12 tabs-item__card event-card">
                    <div className="event-card__inner">
                        <picture className="event-card__picture">

                            <img className="event-card__img" src={item.image} alt="#" />
                        </picture>
                        <div className="event-card__content">
                            <div className="event-card__header">
                                <span className="event-card__date">
                                    {item.date}
                                </span>
                                <img src={item.icon} alt="" />
                            </div>
                            <a href="#" className="event-card__title">
                                {item.title}
                            </a>
                            <p className="event-card__text">
                                {item.descr}
                            </p>
                            <span className="event-card__location">
                                с.
                                Трихати
                            </span>
                        </div>
                    </div>
                </article>
            )
        }
    })
    return (
        <>
            <div className="event-blog__slider-btn">
                <div className="swiper-button-prev--event swiper-button-prev" />
                <div className="swiper-button-next--event swiper-button-next" />
            </div>
            <div className="event-blog__wrapper">
                <div id="tabs">
                    {/* Кнопки */}
                    <ul className="tabs-nav  tabs-nav--descktop">
                        {catsTitleDescktop()}
                    </ul>
                    <div className="swiper tabs-nav--mobile">
                        <ul className="swiper-wrapper">
                            {catsTitleDescktop()}
                        </ul>
                    </div>
                    {/* Контент */}
                    <div className="tabs-items">
                        <div className="tabs-item " id="tab-1">
                            <div className="row d-flex event-card__wrapper">
                                {cardsView}

                            </div>
                            <div className="tabs-items__btn"><a className="tabs-items__btn-link" href="#">Дивитись всі</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CardFilter;