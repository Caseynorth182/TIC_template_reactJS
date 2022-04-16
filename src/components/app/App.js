import Header from "../header/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Layout from "../layout/Layout";
import Categories from "../../pages/Categories";
import TicService from "../../services/TicServices";

const ticService = new TicService();

/* .then(res => console.log(res)) */
/* const send = async () => {
    let cards = await ticService.getContent()
        .then((data) => {
            return data;

        });

    return await cards
}
console.log(send()); */

var cards = [];

ticService.getContent().then(res => {
    return res.map(item => {
        return cards.push(item)
    })
})

/* console.log(cards); */


const App = () => {

    return (
        <body>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index path='/' element={<Home cards={cards} />} />
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