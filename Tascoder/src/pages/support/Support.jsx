import "./Support.css";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import AvailableOptions from "../../components/AvailableOptions";
import typewriter from "../../assets/typewriter.png"

export default function Support() {
  return (
    <>
      <MainHeader />
      <div id="availableOptionsTitleHolder">
        <h2>SUPPORT</h2>
        <img src={typewriter} alt="" />
      </div>
      <AvailableOptions></AvailableOptions>
      <div></div>
      <Footer />
    </>
  );
}
