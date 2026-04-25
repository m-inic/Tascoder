import "./Start.css";
import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import logo from "../../assets/tascoderLogo.png";

export default function Start() {
  return (
    <>
      <MainHeader />
      <section id="startNowSection">
        <div id="startNowTitleHolder" >
          <h2>tascoder</h2>
          <img src={logo} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}
