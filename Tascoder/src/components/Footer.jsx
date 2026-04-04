import "./Footer.css";
import logo from "../assets/tascoderLogo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedIn.png";
import twitter from "../assets/twitter.png";

export default function Footer({pageClassName}) {
  return (
    <section id="footerSection">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 256"
        fill="none"
        id="wavesFooter"
        className={pageClassName}
      >
        <path
          d="M0 0L60 5.3C120 11 240 21 360 53.3C480 85 600 139 720 138.7C840 139 960 85 1080 74.7C1200 64 1320 96 1380 112L1440 128V256H1380C1320 256 1200 256 1080 256C960 256 840 256 720 256C600 256 480 256 360 256C240 256 120 256 60 256H0V0Z"
          fill="url(#paint0_linear_645_10)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_645_10"
            x1="720"
            y1="256"
            x2="720"
            y2="-7.39108e-06"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0099FF" stop-opacity="0"></stop>
            <stop offset="1" stop-color="#2168FF"></stop>
          </linearGradient>
        </defs>
      </svg>
      <div id="footerTitleHolder">
        <h2>tascoder</h2>
        <img src={logo} alt="" id="footerLogo" />
        <p>Join millions of people who organize work and life with Todoist.</p>
      </div>
      <div id="footerListsHolder">
        <div className="footerLists">
          <h3>Features</h3>
          <ul>
            <li>
              <a href="">How it works</a>
            </li>
            <li>
              <a href="">For teams</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Compare</a>
            </li>
            <li>
              <a href="">Templates</a>
            </li>
          </ul>
        </div>
        <div className="footerLists">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="">Download apps</a>
            </li>
            <li>
              <a href="">Help center</a>
            </li>
            <li>
              <a href="">Customer stories</a>
            </li>
            <li>
              <a href="">Productivity methods</a>
            </li>
            <li>
              <a href="">Integrations</a>
            </li>
            <li>
              <a href="">Channel partners</a>
            </li>
            <li>
              <a href="">Developer API</a>
            </li>
            <li>
              <a href="">Status</a>
            </li>
          </ul>
        </div>
        <div className="footerLists">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Inspitarion</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Twist</a>
            </li>
          </ul>
        </div>
        <ul id="footerSocial">
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={linkedin} alt="" />
          </li>
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}
