import locatStar from '../../img/interest/icons/location-star.svg'
import bed from '../../img/interest/icons/bed.svg'
import build from '../../img/interest/icons/build.svg'
import cafe from '../../img/interest/icons/cafe.svg'
import pop from '../../img/interest/icons/pop.svg'
import buildlarge from '../../img/interest/icons/build-large.svg'

const Interest = () => {
    return (
        <div class="interest__block">
            <div class="interest__wrapper">



                <a href="#" class="interest__card card card--color" style={{ backgroundColor: '#0F94F7' }}><span
                    class="card__title">Події</span>
                    <div class="card__text">Фестивалі,
                        концерти,
                        виставки,
                        ярмарки,
                        змагання та інше </div>
                    <div class="card__footer">
                        <div class="card__counter">12 подій</div>
                        <img class="card__icon"
                            src={locatStar} alt="qwe" />
                    </div>
                </a>



                <a href="#" class="interest__card card card--color" style={{ backgroundColor: '#FF7BAC' }}><span
                    class="card__title">Житло</span>
                    <div class="card__text">Готелі та хостели </div>
                    <div class="card__footer">
                        <div class="card__counter">22 житла</div><img class="card__icon"
                            src={bed} alt="qwe" />
                    </div>
                </a>


                <a href="#" class="interest__card card card--photo" style={{ background: 'url(https://tic.sladko.digital/wp-content/uploads/2021/09/photo1.jpg)' }}><span
                    class="card__title">Події</span>
                    <div class="card__text">Фестивалі,
                        концерти,
                        виставки,
                        ярмарки,
                        змагання та інше </div>
                    <div class="card__footer">
                        <div class="card__counter">12 подій</div><img class="card__icon"
                            src={build} alt="qwe" />
                    </div>
                </a>


                <a href="#" class="interest__card card card--photo" style={{ background: 'url(https://tic.sladko.digital/wp-content/uploads/2021/09/photo1.jpg)' }}><span
                    class="card__title">Екскурсії</span>
                    <div class="card__text">Обери гіда та дізнайся про Миколаїв більше
                    </div>
                    <div class="card__footer">
                        <div class="card__counter">3 екскурсії</div><img class="card__icon"
                            src={buildlarge} alt="qwe" />
                    </div>
                </a><a href="#" class="interest__card card card--color" style={{ backgroundColor: '#FF7BAC' }}><span
                    class="card__title">Заклади</span>
                    <div class="card__text">Ресторани,
                        кафе,
                        бари,
                        піцерії </div>
                    <div class="card__footer">
                        <div class="card__counter">34 заклада</div><img class="card__icon"
                            src={cafe} alt="qwe" />
                    </div>
                </a>

                <a href="#" class="interest__card card card--color" style={{ backgroundColor: '#0F94F7' }}><span
                    class="card__title">Дозвілля</span>
                    <div class="card__text">розважальні та торгові центри,
                        заклади культури,
                        кінотеатри,
                        активний та екстремальний відпочинок,
                        парки та пляжі </div>
                    <div class="card__footer">
                        <div class="card__counter">13 місць</div><img class="card__icon"
                            src={pop} alt="qwe" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Interest;