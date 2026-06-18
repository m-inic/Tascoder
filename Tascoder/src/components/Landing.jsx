import "./Landing.css";
import "./masterComponentsQueries.css"
import bnnuy from "../assets/bnnuy.jpg";
import rocket from "../assets/rocketIcon.png";
import clock from "../assets/clockFast.png";
import codeIcon from "../assets/codeIcon.png";

export default function Landing() {
  return (
    <>
      <section id="landing">
        <div id="landingHeading">
          <h1>
            Radimo <span>jako</span>.
          </h1>
          <h3>
            Dok ne bude jos jace i jace i da bude najjace, neki jak broj +100k
          </h3>
          <ul>
            <li>
              <img
                src={rocket}
                alt="rocket"
                className="inverted-6"
                id="leftIcon"
              />
            </li>
            <li>
              <img
                src={clock}
                alt="clock"
                className="inverted-6"
                id="middleIcon"
              />
            </li>
            <li>
              <img
                src={codeIcon}
                alt="codeIcon"
                className="inverted-6"
                id="rightIcon"
              />
            </li>
          </ul>
        </div>
        <div id="landingImg">
          <img src={bnnuy} alt="bnnuy" />
        </div>
      </section>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 256"
          fill="none"
          className="wavesLanding"
          id="wavesLanding1"
        >
          <path
            d="M0 0L60 5.3C120 11 240 21 360 53.3C480 85 600 139 720 138.7C840 139 960 85 1080 74.7C1200 64 1320 96 1380 112L1440 128V256H1380C1320 256 1200 256 1080 256C960 256 840 256 720 256C600 256 480 256 360 256C240 256 120 256 60 256H0V0Z"
            fill="url(#paint0_linear_645_10)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_645_10"
              x1="720"
              y1="256"
              x2="720"
              y2="-7.39108e-06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0099FF" stopOpacity="0" />
              <stop offset="1" stopColor="#2168FF" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 256"
          fill="none"
          className="wavesLanding"
          id="wavesLanding2"
        >
          <path
            d="M0 0L60 5.3C120 11 240 21 360 53.3C480 85 600 139 720 138.7C840 139 960 85 1080 74.7C1200 64 1320 96 1380 112L1440 128V256H1380C1320 256 1200 256 1080 256C960 256 840 256 720 256C600 256 480 256 360 256C240 256 120 256 60 256H0V0Z"
            fill="url(#paint0_linear_645_10)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_645_10"
              x1="720"
              y1="256"
              x2="720"
              y2="-7.39108e-06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0099FF" stopOpacity="0" />
              <stop offset="1" stopColor="#2168FF" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 256"
          fill="none"
          className="wavesLanding"
          id="wavesLanding3"
        >
          <path
            d="M0 0L60 5.3C120 11 240 21 360 53.3C480 85 600 139 720 138.7C840 139 960 85 1080 74.7C1200 64 1320 96 1380 112L1440 128V256H1380C1320 256 1200 256 1080 256C960 256 840 256 720 256C600 256 480 256 360 256C240 256 120 256 60 256H0V0Z"
            fill="url(#paint0_linear_645_10)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_645_10"
              x1="720"
              y1="256"
              x2="720"
              y2="-7.39108e-06"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0099FF" stopOpacity="0" />
              <stop offset="1" stopColor="#2168FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
