import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Carousel from "../components/Route/Hero/Carousel";
import VideoBanners from "../components/Route/VideoBanners/VideoBanners";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import Events from "../components/Events/Events";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import FloatingAIChatbot from "../components/FloatingAIChatbot/FloatingAIChatbot";
// import AdHeader from "../components/Layout/AdHeader";
// import { SidebarAd } from "../components/SidebarAd";
// import { CategoryBrowser } from "../components/organisms/CategoryBrowser";
// import MarketplaceHub from "./MarketplaceHub";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      {/* <AdHeader /> */}
      {/* <Hero /> */}
      <Carousel />
      {/* <MarketplaceHub/> */}
      {/* <VideoBanners /> */}
      <Categories />
      {/* <BestDeals /> */}
      {/* <Events /> */}
      <FeaturedProduct />
      {/* <Sponsored /> */}
      <Footer />
      {/* <FloatingAIChatbot /> */}
    </div>
  );
};

export default HomePage;
