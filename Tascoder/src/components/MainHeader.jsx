import "./MainHeader.css";
import logo from "../assets/tascoderLogo.png";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';

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
    <nav
      style={{
        background: navBg,
        transition: "background-color 0.3s ease",
        backdropFilter: "blur(6px)",
      }}
    >
      <div id="logoHolder">
        <Link to="/" href="">
          tascoder <img src={logo} alt="" />
        </Link>
      </div>
      <div id="navListHolder">
        <ul>
          <li>
            <Link to="/features">features</Link>
          </li>
          <li>
            <Link to="/deals">deals</Link>
          </li>
          <li>
            <Link to="/support">support</Link>
          </li>
          <li id="lastNavEl">
            <Link to="/startNow" id="navBtn">
              start now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
