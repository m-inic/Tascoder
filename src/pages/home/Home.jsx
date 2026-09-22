import "./Home.css";
import AvailableOptions from "../../components/AvailableOptions";
import Deals from "../../components/Deals";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Intro from "../../components/Intro";
import Landing from "../../components/Landing";
import MainHeader from "../../components/MainHeader";
import Showcase from "../../components/Showcase";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <MainHeader></MainHeader>
      <Landing></Landing>
      <Intro></Intro>
      <Features></Features>
      <Deals></Deals>
      <Showcase></Showcase>
      <AvailableOptions></AvailableOptions>
      <Footer></Footer>
    </>
  );
}

export default Home;
