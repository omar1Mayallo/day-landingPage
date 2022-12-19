import React from "react";
//Layout
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
//Sections
import Home from "../../sections/Home";
import About from "../../sections/About";
import Services from "../../sections/Services";
import Portfolio from "../../sections/Portfolio";
import Pricing from "../../sections/Pricing";
import Team from "../../sections/Team";
import Contact from "../../sections/Contact";
import ToggleThemeButton from "../../components/ToggleThemeButton";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Team />
        <Contact />
      </main>
      <ToggleThemeButton />
      <Footer />
    </>
  );
};

export default Landing;
