import { NavLink } from "react-router-dom";
import logo from '../../img/logo.svg'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper  w-100">
                    <div className="row w-100 header--desktop">
                        <div className="col-md-2 header__logo">
                            <NavLink to="/" className="header__logo-link">
                                <img src={logo} alt="logo" className="header__logo-img"></img>

                            </NavLink>
                        </div>
                        <nav className="col-md-9 header__nav nav-bar ">
                            <ul className="nav-bar__list">
                                <li className="nav-bar__item"><NavLink to="/" className="nav-bar__link">Головна</NavLink></li>
                                <li className="nav-bar__item"><NavLink to="/events" className="nav-bar__link">Події</NavLink></li>
                                <li className="nav-bar__item"><NavLink to="/houses" className="nav-bar__link">Житло</NavLink></li>
                                <li className="nav-bar__item"><NavLink to="/rest" className="nav-bar__link">Заклади</NavLink></li>
                                <li className="nav-bar__item dropdown"><NavLink to='/laisure' className="nav-bar__link">Дозвілля</NavLink>
                                    <ul className="dropdown__list">
                                        <li className="dropdown__item"><a href="#" className="dropdown__link">Сувенірна
                                            продукція</a></li>
                                        <li className="dropdown__item"><a href="#" className="dropdown__link">Туристичні
                                            продукти</a></li>
                                        <li className="dropdown__item"><a href="#" className="dropdown__link">Тур.
                                            оператори</a></li>
                                    </ul>
                                </li>
                                <li className="nav-bar__item"><NavLink to="/about" className="nav-bar__link">Про місто</NavLink></li>

                            </ul>
                        </nav>

                    </div>

                    <div className="header__mobile mobile">
                        <div className=" header__logo">
                            <NavLink to="/" className="header__logo-link">
                                <img src="/img/logo.svg" alt="logo" className="header__logo-img"></img>

                            </NavLink>
                        </div>

                        <div className="mobile__button burger navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="burger__line"></span>
                            <span className="burger__line"></span>
                            <span className="burger__line"></span>
                        </div>


                        <nav className=" header__nav nav-bar mobile__nav ">

                            <ul className="nav-bar__list mobile__list mobile-list">
                                <li className="mobile-list__item"><NavLink className="mobile-list__link" to="/">Головна</NavLink></li>
                                <li className="mobile-list__item"><NavLink className="mobile-list__link" to="/events">Події</NavLink></li>
                                <li className="mobile-list__item"><NavLink className="mobile-list__link" to="/houses">Житло</NavLink> </li>
                                <li className="mobile-list__item"><NavLink className="mobile-list__link" to="/rest">Заклади</NavLink></li>
                                <li className="mobile-list__item drop">
                                    <NavLink to='/laisure' className="mobile-list__link">Заклади</NavLink>
                                    {/* <ul className="mobile-list__dropdown mobile-dropdown">
                                        <li className="mobile-dropdown__item">
                                            <a className="mobile-dropdown__link" href="#">Сувенірна продукція</a></li>
                                        <li className="mobile-dropdown__item"><a className="mobile-dropdown__link" href="#">Туристичні продукти</a></li>
                                        <li className="mobile-dropdown__item"><a className="mobile-dropdown__link" href="#">Тур.
                                            оператори</a></li>
                                    </ul> */}
                                </li>
                                <li className="mobile-list__item"><NavLink className="mobile-list__link" to="/about">Про місто</NavLink> </li>

                            </ul>
                        </nav>



                    </div>
                </div>



            </div>
        </header>
    )
}

export default Header;