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
  return (
    <>
      <section id="featuresPageSection">
        <div id="featuresPageTitleHolder" className="featuresSectionSegment">
          <h1>Stvari na koje se nasi ljudi PONOSE i koje vama olaksaju poso</h1>
          <h3>programeri vole da rade svoj poso</h3>
          <Link to="/startNow" id="navBtn">
            start now
          </Link>
        </div>
        <div id="featuresPageImagesHolder" className="featuresSectionSegment">
          <h2>Uvek na prvo mesto kvalitet</h2>
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
        <div >
          <div className="featuresSectionSegment">
            <div className="featuresSectionSegmentGroup">
              <img src={bnnuy} alt="" className="featuresSectionSegmentCard" />
              <img src={ferrari} alt="" className="featuresSectionSegmentCard" />
              <img src={bunny} alt="" className="featuresSectionSegmentCard" />
              <img src={sportage} alt="" className="featuresSectionSegmentCard" />
              <img src={bunns} alt="" className="featuresSectionSegmentCard" />
              <img src={nsx} alt="" className="featuresSectionSegmentCard" />
            </div>
            <div className="featuresSectionSegmentGroup">
              <img src={bnnuy} alt="" className="featuresSectionSegmentCard" />
              <img src={ferrari} alt="" className="featuresSectionSegmentCard" />
              <img src={bunny} alt="" className="featuresSectionSegmentCard" />
              <img src={sportage} alt="" className="featuresSectionSegmentCard" />
              <img src={bunns} alt="" className="featuresSectionSegmentCard" />
              <img src={nsx} alt="" className="featuresSectionSegmentCard" />
            </div>
          </div>
        </div>
      </section>
      <MainHeader />
      <Features />
      <Footer />
    </>
  );
}
