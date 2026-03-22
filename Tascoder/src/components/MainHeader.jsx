import "./MainHeader.css";
import logo from "../assets/tascoderLogo.png";
import { useState, useEffect } from "react";

export default function MainHeader() {
  const [navBg, setNavBg] = useState("");

  const listenScrollEvent = () => {
    if (scrollY > 100) {
      setNavBg("rgb(255 255 255 / 80%)");
    } else {
      setNavBg("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <nav style={{background: navBg, transition: 'background-color 0.3s ease', backdropFilter: "blur(6px)"}}>
      <div id="logoHolder">
        <a href="">
          tascoder <img src={logo} alt="" />
        </a>
      </div>
      <div id="navListHolder">
        <ul>
          <li>
            <a href="">features</a>
          </li>
          <li>
            <a href="">deals</a>
          </li>
          <li>
            <a href="">support</a>
          </li>
          <li id="lastNavEl">
            <a href="" id="navBtn">
              start now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
