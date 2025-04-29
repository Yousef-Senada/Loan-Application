import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowWeWorks from "./components/HowWeWorks";
import ContactUs from "./components/ContactUs";

function App() {
    return (
        <main>
            <NavBar />
            <Hero />
            <Services />
            <HowWeWorks />
            <ContactUs />
        </main>
    );
}

export default App;
