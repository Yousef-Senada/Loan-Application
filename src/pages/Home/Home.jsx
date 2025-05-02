import React from "react";
import NavBar from "../../components/NavBar";
import Services from "../../components/Services";
import Hero from "../../components/Hero";
import HowWeWorks from "../../components/HowWeWorks";
import ContactUs from "../../components/ContactUs";

const Home = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Services />
            <HowWeWorks />
            <ContactUs />
        </main>
    );
};

export default Home;
