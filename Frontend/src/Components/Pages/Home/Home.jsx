import useScrollReveal from '../../useScrollReveal';
import React from "react";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import CallToAction from "./CallToAction";

const Home = () => {
    return (
        <div>
            <Hero />
            <Section2 />
            <Section3 />
            <CallToAction />
        </div>
    );
}

export default Home;