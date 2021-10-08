import React, { useState } from "react";
import SideText from "./components/GlobalComponents/SideText";
import AboutModal from "./components/About/AboutModal";
import Hero from "./components/Hero/Hero";
import Trending from "./components/Trending/Trending";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import SummerSale from "./components/SummerSale/SummerSale";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";
import Stats from "./components/Stats/Stats";
import Service from "./components/Service/Service";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <React.Fragment>
      <AboutModal showModal={showModal} setShowModal={setShowModal} />
      <SideText />
      <Hero />
      <Trending />
      <About showModal={showModal} setShowModal={setShowModal} />
      <Products />
      <SummerSale />
      <Testimonials />
      <Blog />
      <Stats />
      <Service />
      <Subscribe />
      <Footer />
    </React.Fragment>
  );
};

export default App;
