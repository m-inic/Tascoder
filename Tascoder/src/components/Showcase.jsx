import "./Showcase.css";
import desktop from "../assets/desktop.png";
import android from "../assets/android.png"
import appleIOS from "../assets/appleIOS.png"
import huaweiMoj from "../assets/huaweiMoj.png"
import browser from "../assets/browser.png"
import mail from "../assets/mail.png"

export default function Showcase() {
  return (
    <section id="showcaseSection">
      <div id="showcaseSectionTitleHolder">
        <h1>Capture tasks wherever you are</h1>
        <p>
          Review tasks on your phone, add them from your laptop, complete them
          from your watch. Then see it all sync in real-time.
        </p>
      </div>
      <div id="showcaseSectionNav">
        <ul id="showcaseSectionList">
          <li key="1">
            <img src={desktop} alt="" />
            <p>Desktop</p>
          </li>
          <li key="2">
            <img src={android} alt="" />
            <p>Android</p>
          </li>
          <li key="3">
            <img src={appleIOS} alt="" />
            <p>iOS</p>
          </li>
          <li key="4">
            <img src={huaweiMoj} alt="" />
            <p>Wearables</p>
          </li>
          <li key="5">
            <img src={browser} alt="" />
            <p>Browser extensions</p>
          </li>
          <li key="6">
            <img src={mail} alt="" />
            <p>Email add-ons</p>
          </li>
        </ul>
      </div>
      <div id="showcaseSectionGallery">
        <div></div>
      </div>
    </section>
  );
}
