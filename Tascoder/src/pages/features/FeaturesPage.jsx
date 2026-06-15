import "./FeaturesPage.css";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import Features from "../../components/Features";
import "../../components/Features.css";
import { Link } from "react-router";
import best from "../../assets/best.png";
import clock from "../../assets/clockFast.png";
import codeIcon from "../../assets/codeIcon.png";
import bnnuy from "../../assets/bnnuy.jpg";
import bunny from "../../assets/bunnyComp.jpg";
import bunns from "../../assets/bunns.jpg";
import ferrari from "../../assets/ferrari.jpg";
import sportage from "../../assets/sportage.jpg";
import nsx from "../../assets/nsx.jpg";

export default function FeaturesPage() {
  const to = localStorage.getItem("tscAuth") === "true" ? "/tascoderApp" : "/startNow";
  
  return (
    <>
      <section id="featuresPageSection">
        <div id="featuresPageTitleHolder">
          <h1>Stvari na koje se nasi ljudi PONOSE i koje vama olaksaju poso</h1>
          <h3>programeri vole da rade svoj poso</h3>
          <Link to={to} id="navBtn">
            start now
          </Link>
        </div>
        <div id="featuresPageImagesHolder">
          <ul>
            <li>
              <img src={best} alt="" id="invertFeaturesIcon1" />
              <p>najbolje je da radite sa nama lol</p>
            </li>
            <li>
              <img src={clock} alt="" className="invertFeaturesIcon" />
              <p>niko ne radi brze nego mi</p>
            </li>
            <li>
              <img src={codeIcon} alt="" className="invertFeaturesIcon" />
              <p>cist kod za duge staze</p>
            </li>
          </ul>
        </div>
        <div id="carouselHolder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 256"
            fill="none"
            id="wavesFooter"
            className="wavesFeaturesPage1"
          >
            <path
              d="M0 0L60 5.3C120 11 240 21 360 53.3C480 85 600 139 720 138.7C840 139 960 85 1080 74.7C1200 64 1320 96 1380 112L1440 128V256H1380C1320 256 1200 256 1080 256C960 256 840 256 720 256C600 256 480 256 360 256C240 256 120 256 60 256H0V0Z"
              fill="url(#paint0_linear_645_10)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_645_10"
                x1="720"
                y1="256"
                x2="720"
                y2="-7.39108e-06"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0099FF" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#2168FF"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="featuresSectionSegment">
            <div className="featuresSectionSegmentGroup">
              <img src={bnnuy} alt="" className="featuresSectionSegmentCard" />
              <img
                src={ferrari}
                alt=""
                className="featuresSectionSegmentCard"
              />
              <img src={bunny} alt="" className="featuresSectionSegmentCard" />
              <img
                src={sportage}
                alt=""
                className="featuresSectionSegmentCard"
              />
              <img src={bunns} alt="" className="featuresSectionSegmentCard" />
              <img src={nsx} alt="" className="featuresSectionSegmentCard" />
            </div>
            <div className="featuresSectionSegmentGroup">
              <img src={bnnuy} alt="" className="featuresSectionSegmentCard" />
              <img
                src={ferrari}
                alt=""
                className="featuresSectionSegmentCard"
              />
              <img src={bunny} alt="" className="featuresSectionSegmentCard" />
              <img
                src={sportage}
                alt=""
                className="featuresSectionSegmentCard"
              />
              <img src={bunns} alt="" className="featuresSectionSegmentCard" />
              <img src={nsx} alt="" className="featuresSectionSegmentCard" />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 256"
            fill="none"
            id="wavesFooter"
            className="wavesFeaturesPage2"
          >
            <path
              d="M0 0L60 5.3C120 11 240 21 360 53.3C480 85 600 139 720 138.7C840 139 960 85 1080 74.7C1200 64 1320 96 1380 112L1440 128V256H1380C1320 256 1200 256 1080 256C960 256 840 256 720 256C600 256 480 256 360 256C240 256 120 256 60 256H0V0Z"
              fill="url(#paint0_linear_645_10)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_645_10"
                x1="720"
                y1="256"
                x2="720"
                y2="-7.39108e-06"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0099FF" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#2168FF"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
      <MainHeader />
      <Features />
      <Footer />
    </>
  );
}
