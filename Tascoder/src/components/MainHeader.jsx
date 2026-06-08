import "./MainHeader.css";
import logo from "../assets/tascoderLogo.png";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';

export default function MainHeader() {
  const [navBg, setNavBg] = useState("");

  const listenScrollEvent = () => {
    if (scrollY > 100) {
      setNavBg("unset");
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

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [theme, setTheme] = useState("light");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    let linkElement = document.getElementById("dynamic-theme-link");
    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.id = "dynamic-theme-link";
      linkElement.rel = "stylesheet";
      linkElement.type = "text/css";
      document.head.appendChild(linkElement);
    }
    linkElement.href = `/themes/${theme}.css`;
  }, [theme]);

  function handleThemeToggle() {
    setClicked((prev) => !prev);
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <nav
      style={{
        background: navBg,
        transition: "background-color 0.3s ease",
        backdropFilter: "blur(20px)",
      }}
    >
      <div id="logoHolder">
        <Link to="/" href="" onClick={scrollToTop}>
          tascoder <img src={logo} alt="" />
        </Link>
      </div>
      <div id="navListHolder">
        <ul>
          <li>
            <Link to="/features" onClick={scrollToTop}>features</Link>
          </li>
          <li>
            <Link to="/deals" onClick={scrollToTop}>deals</Link>
          </li>
          <li>
            <Link to="/support" onClick={scrollToTop}>support</Link>
          </li>
          <li id="lastNavEl">
            <Link to="/startNow" id="navBtn" onClick={scrollToTop}>
              start now
            </Link>
          </li>
          <button
                className="tscSettingsBtns"
                id="tscBallBtn"
                onClick={handleThemeToggle}
              >
                <div id="tscBallHolder">
                  <div
                    className={`tscBall ${clicked ? "tscBallLeft" : ""}`}
                  ></div>
                </div>
              </button>
        </ul>
      </div>
    </nav>
  )
}
