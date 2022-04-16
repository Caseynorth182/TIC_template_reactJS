import locatStar from '../../img/interest/icons/location-star.svg'
import bed from '../../img/interest/icons/bed.svg'
import build from '../../img/interest/icons/build.svg'
import cafe from '../../img/interest/icons/cafe.svg'
import pop from '../../img/interest/icons/pop.svg'
import buildlarge from '../../img/interest/icons/build-large.svg'

const Interest = () => {
    return (
        <div className="interest__block">
            <div className="interest__wrapper">



                <a href="#" className="interest__card card card--color" style={{ backgroundColor: '#0F94F7' }}><span
                    className="card__title">Події</span>
                    <div className="card__text">Фестивалі,
                        концерти,
                        виставки,
                        ярмарки,
                        змагання та інше </div>
                    <div className="card__footer">
                        <div className="card__counter">12 подій</div>
                        <img className="card__icon"
                            src={locatStar} alt="qwe" />
                    </div>
                </a>



                <a href="#" className="interest__card card card--color" style={{ backgroundColor: '#FF7BAC' }}><span
                    className="card__title">Житло</span>
                    <div className="card__text">Готелі та хостели </div>
                    <div className="card__footer">
                        <div className="card__counter">22 житла</div><img className="card__icon"
                            src={bed} alt="qwe" />
                    </div>
                </a>


                <a href="#" className="interest__card card card--photo" style={{ background: 'url(https://tic.sladko.digital/wp-content/uploads/2021/09/photo1.jpg)' }}><span
                    className="card__title">Події</span>
                    <div className="card__text">Фестивалі,
                        концерти,
                        виставки,
                        ярмарки,
                        змагання та інше </div>
                    <div className="card__footer">
                        <div className="card__counter">12 подій</div><img className="card__icon"
                            src={build} alt="qwe" />
                    </div>
                </a>


                <a href="#" className="interest__card card card--photo" style={{ background: 'url(https://tic.sladko.digital/wp-content/uploads/2021/09/photo1.jpg)' }}><span
                    className="card__title">Екскурсії</span>
                    <div className="card__text">Обери гіда та дізнайся про Миколаїв більше
                    </div>
                    <div className="card__footer">
                        <div className="card__counter">3 екскурсії</div><img className="card__icon"
                            src={buildlarge} alt="qwe" />
                    </div>
                </a><a href="#" className="interest__card card card--color" style={{ backgroundColor: '#FF7BAC' }}><span
                    className="card__title">Заклади</span>
                    <div className="card__text">Ресторани,
                        кафе,
                        бари,
                        піцерії </div>
                    <div className="card__footer">
                        <div className="card__counter">34 заклада</div><img className="card__icon"
                            src={cafe} alt="qwe" />
                    </div>
                </a>

                <a href="#" className="interest__card card card--color" style={{ backgroundColor: '#0F94F7' }}><span
                    className="card__title">Дозвілля</span>
                    <div className="card__text">розважальні та торгові центри,
                        заклади культури,
                        кінотеатри,
                        активний та екстремальний відпочинок,
                        парки та пляжі </div>
                    <div className="card__footer">
                        <div className="card__counter">13 місць</div><img className="card__icon"
                            src={pop} alt="qwe" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Interest;