import Footer from "../../components/Footer";
import MainHeader from "../../components/MainHeader";
import "./NotFound.css"

export default function NotFound() {
  return (
    <>
      <MainHeader></MainHeader>
      <div id="notFoundMessage">
        <code>Error code: 404</code>
        <p>this path is unavailable</p>
      </div>
      <Footer pageClassName="wavesNotFound"></Footer>
    </>
  )
}
