import { Component } from "react";
import Loader from "../loader/Loader";
import TicService from "../../services/TicServices";
import { v4 as uuidv4 } from 'uuid';






class CardFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            term: '',
            loading: true,
            api: [],
            cat_name: [
                {
                    name: 'Все'
                }
            ]
        }
    }



    ticService = new TicService();

    getContent = () => {
        this.ticService.getContent().then(res => {
            this.setState({
                api: res
            })
        })
    }

    componentDidMount() {
        const { cards } = this.props.cards
        this.getContent()
        console.log(this.state.api);

        this.setState(({ data }) => {
            return {
                data: cards,
                loading: false,
            }

        })
    }
    onCatChange = (e) => {
        const { cards } = this.props.cards
        e.preventDefault();
        let catItem = e.target.getAttribute('data-filter');
        let newSet;
        newSet = cards.filter(item => {
            if (catItem == item.category.title) {
                return item;
            } else if (catItem == 'Все') {
                return item;
            }
        })

        this.setState({
            data: newSet
        })
    }

    addUniqCatNames = () => {
        const { cards } = this.props.cards
        let result = [];
        let cat_name_arr = [];

        cards.forEach(element => {
            cat_name_arr.push({

                name: element.category.title

            })
        });

        result = cat_name_arr.reduce((acc, city) => {
            if (acc.map[city.name]) // если данный город уже был
                return acc; // ничего не делаем, возвращаем уже собранное

            acc.map[city.name] = true; // помечаем город, как обработанный
            acc.result.push(city); // добавляем объект в массив городов
            return acc; // возвращаем собранное
        }, {
            map: {}, // здесь будут отмечаться обработанные города
            result: [] // здесь конечный массив уникальных городов
        })
            .result; // получаем конечный массив
        return result;

    }


    catsTitle = () => {
        const { cards } = this.props.cards
        const catNamesAll = [].concat(this.state.cat_name, this.addUniqCatNames());

        const componentsCat = catNamesAll.map(item => {
            return (
                <li key={uuidv4()} className="tabs-nav__name tabs-nav ">
                    <p
                        onClick={this.onCatChange}
                        data-filter={item.name}
                    >
                        {item.name}
                    </p>
                </li>
            )
        })
        return componentsCat;
    }
    cardsView = () => {

        return this.state.data.map((item, i) => {
            if (i < 4) {
                return (

                    <article key={uuidv4()} className="col-lg-3 col-md-6 col-sm-6 p-2 col-12 tabs-item__card event-card">
                        <div className="event-card__inner">
                            <picture className="event-card__picture">

                                <img className="event-card__img" src={item.cover.url} alt="#" />
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
                                    {item.description}
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
    }


    render() {
        const { loading } = this.state;
        const viewCards = loading ? <Loader /> : this.cardsView();
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
                            {this.catsTitle()}

                        </ul>
                        <div className="swiper tabs-nav--mobile">
                            <ul className="swiper-wrapper">

                            </ul>
                        </div>
                        {/* Контент */}
                        <div className="tabs-items">
                            <div className="tabs-item " id="tab-1">
                                <div className="row d-flex event-card__wrapper">
                                    {viewCards}

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

}

export default CardFilter;