import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import home from "../../assets/homeVector.png"
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <MainHeader></MainHeader>
      <section id="notFoundSection">
        <div id="notFoundMessage">
          <code>Error code: 404</code>
          <p>this path is unavailable</p>
          <button><a href="/">back home <img src={home} alt="" /></a></button>
        </div>
      </section>
      <Footer pageClassName="wavesNotFound"></Footer>
    </>
  );
}
