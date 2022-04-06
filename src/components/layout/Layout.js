import { NavLink, Link, Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";





const Layout = () => {

    return (
        <>
            <Header />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;
