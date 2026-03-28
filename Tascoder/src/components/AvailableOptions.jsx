import "./AvailableOptions.css";
import bunn from "../assets/bunn.jpg";
import zus from "../assets/bnnuyComp.jpg";
import zes from "../assets/bunns.jpg";
import pfpBun1 from "../assets/pfpBunn1.jpg";
import pfpBun2 from "../assets/pfpBunn2.png";
import pfpBun3 from "../assets/pfpBunn3.jpg";
import icon1 from "../assets/mail.png";
import icon2 from "../assets/desktop.png";
import icon3 from "../assets/listTick.png";
import { useState } from "react";

export default function AvailableOptions() {
  const [activeOptionItem, setActiveOptionItem] = useState(null);

  function showMoreText() {
    setActiveOptionItem(true);
  }

  // function toggleMoreText() {
  //   if(activeOptionItem) {
  //     setActiveOptionItem(false);
  //   }
  // }

  return (
    <section id="availableOptionsSection">
      <article id="availableOptionsArticle1">
        <div className="availableOptionsTextsHolder">
          <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
          <h2>
            Your projects (yes, even those tricky ones) will be up and running
            in a matter of minutes.
          </h2>
          <ul>
            <li key={1} id={activeOptionItem ? "availableOptionsItem1" : undefined} onClick={showMoreText}>
              <img src={icon1} alt="" />
              <span>Nam blandit nisi</span>
              <p>
                Nam blandit nisi ut erat pretium, vitae placerat nisi hendrerit.
                Fusce ut tortor placerat purus malesuada dignissim ut id turpis.
                Suspendisse.
              </p>
            </li>
            <li key={2} id={activeOptionItem ? "availableOptionsItem2" : undefined} onClick={showMoreText}>
              <img src={icon2} alt="" />
              <span>Cras odio ex, euismod</span>
              <p>
                Cras odio ex, euismod a arcu ac, condimentum porta velit. Proin
                quis condimentum nisl. Suspendisse orci massa, condimentum sit
                amet varius eget, interdum ut augue.
              </p>
            </li>
            <li key={3} id={activeOptionItem ? "availableOptionsItem3" : undefined} onClick={showMoreText}>
              <img src={icon3} alt="" />
              <span>Praesent vulputate consectetur</span>
              <p>
                Praesent vulputate consectetur dictum. Proin lacinia ornare
                massa quis commodo. Praesent feugiat fermentum diam at laoreet.
                Morbi finibus dui lectus, aliquet molestie augue tristique.
              </p>
            </li>
          </ul>
          <q>
            Praesent non ornare arcu. Aenean sollicitudin lacinia nisl, eu
            condimentum metus pharetra ac. Aenean auctor tellus libero, non
            interdum nisi pretium eu. Sed dapibus eu nisl a aliquet. Integer a
            lacinia justo.
          </q>
          <div className="availableOptionsProfile">
            <img src={pfpBun1} alt="" />
            <div>
              <p>Zus Toni</p>
              <span>CEO at ZMO (Zus Mafia Organisation)</span>
            </div>
          </div>
        </div>
        <div className="availableOptionsImg">
          <img src={bunn} alt="" />
        </div>
      </article>
      <article id="availableOptionsArticle2">
        <div className="availableOptionsTextsHolder">
          <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
          <p>
            Your projects (yes, even those tricky ones) will be up and running
            in a matter of minutes.
          </p>
          <ul>
            <li key={4} id={activeOptionItem ? "availableOptionsItem4" : undefined} onClick={showMoreText}>
              <img src={icon1} alt="" />

              <span>Nam blandit nisi</span>
              <p>
                ut erat pretium, vitae placerat nisi hendrerit. Fusce ut tortor
                placerat purus malesuada dignissim ut id turpis. Suspendisse.
              </p>
            </li>
            <li key={5} id={activeOptionItem ? "availableOptionsItem5" : undefined} onClick={showMoreText}>
              <img src={icon2} alt="" />

              <span>Cras odio ex, euismod</span>
              <p>
                a arcu ac, condimentum porta velit. Proin quis condimentum nisl.
                Suspendisse orci massa, condimentum sit amet varius eget,
                interdum ut augue.
              </p>
            </li>
            <li key={6} id={activeOptionItem ? "availableOptionsItem6" : undefined} onClick={showMoreText}>
              <img src={icon3} alt="" />

              <span>Praesent vulputate consectetur</span>
              <p>
                dictum. Proin lacinia ornare massa quis commodo. Praesent
                feugiat fermentum diam at laoreet. Morbi finibus dui lectus,
                aliquet molestie augue tristique.
              </p>
            </li>
          </ul>
          <q>
            Praesent non ornare arcu. Aenean sollicitudin lacinia nisl, eu
            condimentum metus pharetra ac. Aenean auctor tellus libero, non
            interdum nisi pretium eu. Sed dapibus eu nisl a aliquet. Integer a
            lacinia justo.
          </q>
          <div className="availableOptionsProfile">
            <img src={pfpBun2} alt="" />
            <div>
              <p>Zus Kit</p>
              <span>Secretary and administrative operations, ZMO</span>
            </div>
          </div>
        </div>
        <div className="availableOptionsImg">
          <img src={zus} alt="" />
        </div>
      </article>
      <article id="availableOptionsArticle3">
        <div className="availableOptionsTextsHolder">
          <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
          <p>
            Your projects (yes, even those tricky ones) will be up and running
            in a matter of minutes.
          </p>
          <ul>
            <li key={7} id={activeOptionItem ? "availableOptionsItem7" : undefined} onClick={showMoreText}>
              <img src={icon1} alt="" />
              <span>Nam blandit nisi</span>
              <p>
                ut erat pretium, vitae placerat nisi hendrerit. Fusce ut tortor
                placerat purus malesuada dignissim ut id turpis. Suspendisse.
              </p>
            </li>
            <li key={8} id={activeOptionItem ? "availableOptionsItem8" : undefined} onClick={showMoreText}>
              <img src={icon2} alt="" />
              <span>Cras odio ex, euismod</span>
              <p>
                a arcu ac, condimentum porta velit. Proin quis condimentum nisl.
                Suspendisse orci massa, condimentum sit amet varius eget,
                interdum ut augue.
              </p>
            </li>
            <li key={9} id={activeOptionItem ? "availableOptionsItem9" : undefined} onClick={showMoreText}>
              <img src={icon3} alt="" />
              <span>Praesent vulputate consectetur</span>
              <p>
                dictum. Proin lacinia ornare massa quis commodo. Praesent
                feugiat fermentum diam at laoreet. Morbi finibus dui lectus,
                aliquet molestie augue tristique.
              </p>
            </li>
          </ul>
          <q>
            Praesent non ornare arcu. Aenean sollicitudin lacinia nisl, eu
            condimentum metus pharetra ac. Aenean auctor tellus libero, non
            interdum nisi pretium eu. Sed dapibus eu nisl a aliquet. Integer a
            lacinia justo.
          </q>
          <div className="availableOptionsProfile">
            <img src={pfpBun3} alt="" />
            <div>
              <p>Zus Maus</p>
              <span>Delivery and transportation, ZMO</span>
            </div>
          </div>
        </div>
        <div className="availableOptionsImg">
          <img src={zes} alt="" />
        </div>
      </article>
    </section>
  );
}
