import "./Showcase.css";
import "./masterComponentsQueries.css"
import { useState } from "react";
import desktop from "../assets/desktop.png";
import android from "../assets/android.png";
import appleIOS from "../assets/appleIOS.png";
import huaweiMoj from "../assets/huaweiMoj.png";
import browser from "../assets/browser.png";
import mail from "../assets/mail.png";
import deffender from "../assets/deffender.jpg";
import ferrari from "../assets/ferrari.jpg";
import landCruiser from "../assets/landCruiser.jpg";
import nsx from "../assets/nsx.jpg";
import r8Audi from "../assets/r8Audi.jpg";
import sportage from "../assets/sportage.jpg";

export default function Showcase() {
  const [listItemActive, setListItemActive] = useState(1);

  const showcaseSlides = [
    {
      id: 1,
      src: desktop,
      text: "Desktop",
      slideSrc: ferrari,
    },
    {
      id: 2,
      src: android,
      text: "Android",
      slideSrc: deffender,
    },
    {
      id: 3,
      src: appleIOS,
      text: "iOS",
      slideSrc: landCruiser,
    },
    {
      id: 4,
      src: huaweiMoj,
      text: "Wearables",
      slideSrc: nsx,
    },
    {
      id: 5,
      src: browser,
      text: "Browser extensions",
      slideSrc: r8Audi,
    },
    {
      id: 6,
      src: mail,
      text: "Email add-ons",
      slideSrc: sportage,
    },
  ];

  const showCaseSectionSlides = showcaseSlides.map((el) => (
    <li
      key={el.id}
      className={
        "showcaseSectionListItem" +
        `${listItemActive === el.id ? "Active" : ""}`
      }
      onClick={() => setListItemActive(el.id)}
    >
      <img src={el.src} alt="" />
      <p>{el.text}</p>
    </li>
  ));

  const activeSlide = showcaseSlides.find((el) => el.id === listItemActive);

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
        <ul id="showcaseSectionList">{showCaseSectionSlides}</ul>
      </div>
      <div id="showcaseSectionGallery">
        <img
        key={listItemActive}
          src={activeSlide.slideSrc}
          alt=""
          className="animate__animated animate__fadeIn"
        />
      </div>
    </section>
  );
}
