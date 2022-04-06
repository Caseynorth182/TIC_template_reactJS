

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-12 col-sm-12 footer__logo">
                            <img className="footer__logo-img" src="/img/logo-white.svg" alt="#"></img>
                        </div>
                        <nav className="col-lg-7 col-md-12  col-sm-12 footer__nav footer-nav">
                            <ul className="footer-nav__list">
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Події</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Житло</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Заклади</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Екскурсії</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">ТІЦ</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Житло</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Про місто</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Новини</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Сувенірна продукція</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Туристичні продукти</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Туристичні оператори</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a className="footer-nav__link" href="#">Івенти </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-6 text-left footer-bottom__name">Миколаївска Міська Рада</div>
                        <div className="col-lg-4 col-md-6 d-flex justify-content-between footer-bottom__text">
                            <span className="footer-bottom__copy">© Copyright 2021
                            </span>
                            <span className="footer-bottom__sladko">Створено в <a href="#">
                                <img className="footer-bottom__brand"
                                    src="/img/sladko_logo 1.svg" alt="sladko"></img>

                            </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;