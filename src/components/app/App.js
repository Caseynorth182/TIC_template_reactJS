import Header from "../header/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Layout from "../layout/Layout";
import Categories from "../../pages/Categories";




const App = () => {

    return (
        <body>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index path='/' element={<Home />} />
                    <Route path="/events" element={<Categories />} />
                    <Route path="/houses" element={<Categories />} />
                    <Route path="/rest" element={<Categories />} />
                    <Route path="/laisure" element={<Categories />} />
                    <Route path="/about" element={<About />} />

                </Route>
            </Routes>

        </body>
    )
}

export default App;