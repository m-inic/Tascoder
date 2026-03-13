import "./MainHeader.css";
import logo from "../assets/tascoderLogo.png"

export default function MainHeader() {
  return (
    <nav>
      <div id="logoHolder">
        <a href="">tascoder <img src={logo} alt="" /></a>
        
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
            <a href="" >support</a>
          </li>
          <li id="lastNavEl">
            <a href="" id="navBtn">start now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
