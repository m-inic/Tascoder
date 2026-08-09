import "./MainHeader.css";
import "./masterComponentsQueries.css";
import logo from "../assets/tascoderLogo.png";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MainHeader() {
  const [navBg, setNavBg] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

function toggleHambMenu() {
  setMenuOpen((prev) => !prev);
}

  function useWindowWidth() {
    const [widthScreen, setWidthScreen] = useState(() =>
      typeof window !== "undefined" ? window.innerWidth : 0,
    );

    useEffect(() => {
      if (typeof window === "undefined") return;

      const handleResize = () => setWidthScreen(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return widthScreen;
  }

  const widthOfScreen = useWindowWidth();

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("tscAuth") === "true",
  );

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [clicked, setClicked] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    let linkElement = document.getElementById("dynamic-theme-link");
    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.id = "dynamic-theme-link";
      linkElement.rel = "stylesheet";
      linkElement.type = "text/css";
      document.head.appendChild(linkElement);
    }
    linkElement.href = `/${theme}.css`;
  }, [theme]);

  function handleThemeToggle() {
    setClicked((prev) => !prev);
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  function handleLogout() {
    localStorage.removeItem("tscAuth");
    setIsLoggedIn(false);
    navigate("/startNow");
  }

  return widthOfScreen >= 1250 ? (
    <nav
      style={{
        background: navBg,
        transition: "background-color 0.3s ease",
        backdropFilter: "blur(20px)",
      }}
    >
      <div id="logoHolder">
        <Link to="/" onClick={scrollToTop}>
          tascoder <img src={logo} alt="" />
        </Link>
      </div>
      <div id="navListHolder">
        <ul>
          <li>
            <Link to="/features" onClick={scrollToTop}>
              features
            </Link>
          </li>
          <li>
            <Link to="/deals" onClick={scrollToTop}>
              deals
            </Link>
          </li>
          <li>
            <Link to="/support" onClick={scrollToTop}>
              support
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link id="tscLogoutBtn" onClick={handleLogout}>
                log out
              </Link>
            </li>
          ) : (
            <li id="lastNavEl">
              <Link to="/startNow" id="navBtn" onClick={scrollToTop}>
                start now
              </Link>
            </li>
          )}
          <button
            className="tscSettingsBtns"
            id="tscBallBtn"
            onClick={handleThemeToggle}
          >
            <div id="tscBallHolder">
              <div className={`tscBall ${clicked ? "tscBallLeft" : ""}`}></div>
            </div>
          </button>
        </ul>
      </div>
    </nav>
  ) : (
    <>
      <nav
        style={{
          background: navBg,
          transition: "background-color 0.3s ease",
          backdropFilter: "blur(20px)",
        }}
      >
        <div id="logoHolder">
          <Link to="/" onClick={scrollToTop}>
            tascoder <img src={logo} alt="" />
          </Link>
        </div>
        {/* <div id="navListHolder">
        <ul>
          <li>
            <Link to="/features" onClick={scrollToTop}>
              features
            </Link>
          </li>
          <li>
            <Link to="/deals" onClick={scrollToTop}>
              deals
            </Link>
          </li>
          <li>
            <Link to="/support" onClick={scrollToTop}>
              support
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link id="tscLogoutBtn" onClick={handleLogout}>
                log out
              </Link>
            </li>
          ) : (
            <li id="lastNavEl">
              <Link to="/startNow" id="navBtn" onClick={scrollToTop}>
                start now
              </Link>
            </li>
          )}
          <button
            className="tscSettingsBtns"
            id="tscBallBtn"
            onClick={handleThemeToggle}
          >
            <div id="tscBallHolder">
              <div className={`tscBall ${clicked ? "tscBallLeft" : ""}`}></div>
            </div>
          </button>
        </ul>
      </div> */}
        <div id="burgBtnIconHolder"
  className={menuOpen ? "burgBtnIconHolder burgBtnIconHolderHovered" : "burgBtnIconHolder"}
  onClick={toggleHambMenu}>
          <span className={menuOpen ? "span1BurgBtn span1BurgBtnHovered" : "span1BurgBtn"}></span>
          <span className={menuOpen ? "span2BurgBtn span2BurgBtnHovered" : "span2BurgBtn"}></span>
        </div>
        <div className={menuOpen  ? "halfCircleMenu" : "burgBtnIconHolderRemove"}>
          <ul id="halfCircleMenuList">
          <li>
            <Link to="/features" onClick={scrollToTop}>
              features
            </Link>
          </li>
          <li>
            <Link to="/deals" onClick={scrollToTop}>
              deals
            </Link>
          </li>
          <li>
            <Link to="/support" onClick={scrollToTop}>
              support
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link id="tscLogoutBtn" className="halfCircleLogOut" onClick={handleLogout}>
                log out
              </Link>
            </li>
          ) : (
            <li id="lastNavEl">
              <Link to="/startNow" id="navBtn" className="navBtnStart" onClick={scrollToTop}>
                start now
              </Link>
            </li>
          )}
          <button
            className="tscSettingsBtns"
            id="tscBallBtn"
            onClick={handleThemeToggle}
          >
            <div id="tscBallHolder">
              <div className={`tscBall ${clicked ? "tscBallLeft" : ""}`}></div>
            </div>
          </button>
        </ul>
        <div id={menuOpen  ? "halfCircleMenuBackdrop" : ""} onClick={toggleHambMenu}>
        </div>
        </div>
      </nav>
    </>
  );
}
