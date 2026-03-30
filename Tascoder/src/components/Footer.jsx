import "./Footer.css";
import logo from "../assets/tascoderLogo.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import linkedin from "../assets/linkedIn.png"
import twitter from "../assets/twitter.png"

export default function Footer() {
  return (
    <section id="footerSection">
      <div id="footerTitleHolder">
        <h2>tascoder</h2>
        <img src={logo} alt="" id="footerLogo"/>
        <p>Join millions of people who organize work and life with Todoist.</p>
      </div>
      <div id="footerListsHolder">
        <div className="footerLists">
          <h3>Features</h3>
          <ul>
            <li><a href="">How it works</a></li>
            <li><a href="">For teams</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Compare</a></li>
            <li><a href="">Templates</a></li>
          </ul>
        </div>
        <div className="footerLists">
          <h3>Resources</h3>
          <ul>
            <li><a href="">Download apps</a></li>
            <li><a href="">Help center</a></li>
            <li><a href="">Customre stories</a></li>
            <li><a href="">Productivity methods</a></li>
            <li><a href="">Integrations</a></li>
            <li><a href="">Channel partners</a></li>
            <li><a href="">Developer API</a></li>
            <li><a href="">Status</a></li>
          </ul>
        </div>
        <div className="footerLists">
          <h3>Company</h3>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Inspitarion</a></li>
            <li><a href="">Press</a></li>
            <li><a href="">Twist</a></li>
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
