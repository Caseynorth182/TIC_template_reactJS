import HeroSlider from "../components/hero-slider/HeroSlider";
import SmallTitle from "../components/small-title/SmallTitle";
import Interest from "../components/interest/Interest";
import SectionTitle from "../components/section-title/SectionTitle";
import SectionContent from "../components/section-content/SectionContent";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import ScrollLine from "../components/scrollLine/ScrollLine";
import CardFilter from "../components/card-filter/CardFilter";

const Home = (props) => {
    const cards = props;
    return (
        <>
            {/* //LINK HERO */}
            <section className="hero">
                <div className="container-fluid justify-content-center p-0">
                    <HeroSlider />
                </div>
            </section>
            {/* //LINK INTEREST */}
            <section className="interest">
                <div className="container">
                    <SmallTitle text={'Что интересного'} />
                    <Interest />
                </div>
            </section>
            {/* //LINK ABOUT */}
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 offset-lg-2 about__title">
                            <SectionTitle />
                        </div>
                        <div className="col-lg-5 about__content">
                            <SectionContent />
                        </div>
                    </div>
                </div>
                <ScrollLine />
            </section>
            {/* //LINK EVENT BLOG */}
            <section className="event-blog">
                <div className="container">
                    <SmallTitle text={'Ближайшие мероприятия'} />
                    <CardFilter cards={cards} />
                </div>
            </section>


        </>
    )
}

export default Home;