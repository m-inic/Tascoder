import "./AvailableOptions.css";
import bunn from "../assets/bunn.jpg";
import zus from "../assets/bnnuyComp.jpg";
import zes from "../assets/bunns.jpg";
import pfpBun1 from "../assets/pfpBunn1.jpg"
import pfpBun2 from "../assets/pfpBunn2.png"
import pfpBun3 from "../assets/pfpBunn3.jpg"

export default function AvailableOptions() {
  return (
    <section id="availableOptionsSection">
      <article id="availableOptionsArticle1">
        <div className="availableOptionsTextsHolder">
          <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
          <p>
            Your projects (yes, even those tricky ones) will be up and running
            in a matter of minutes.
          </p>
          <ul>
            <li>
              <img alt="" />
              <span>Nam blandit nisi</span> ut erat pretium, vitae placerat nisi
              hendrerit. Fusce ut tortor placerat purus malesuada dignissim ut
              id turpis. Suspendisse.
            </li>
            <li>
              <img alt="" />
              <span>Cras odio ex, euismod</span> a arcu ac, condimentum porta
              velit. Proin quis condimentum nisl. Suspendisse orci massa,
              condimentum sit amet varius eget, interdum ut augue.
            </li>
            <li>
              <img alt="" />
              <span>Praesent vulputate consectetur</span> dictum. Proin lacinia
              ornare massa quis commodo. Praesent feugiat fermentum diam at
              laoreet. Morbi finibus dui lectus, aliquet molestie augue
              tristique.
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
            <li>
              <img alt="" />
              <span>Nam blandit nisi</span> ut erat pretium, vitae placerat nisi
              hendrerit. Fusce ut tortor placerat purus malesuada dignissim ut
              id turpis. Suspendisse.
            </li>
            <li>
              <img alt="" />
              <span>Cras odio ex, euismod</span> a arcu ac, condimentum porta
              velit. Proin quis condimentum nisl. Suspendisse orci massa,
              condimentum sit amet varius eget, interdum ut augue.
            </li>
            <li>
              <img alt="" />
              <span>Praesent vulputate consectetur</span> dictum. Proin lacinia
              ornare massa quis commodo. Praesent feugiat fermentum diam at
              laoreet. Morbi finibus dui lectus, aliquet molestie augue
              tristique.
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
            <li>
              <img alt="" />
              <span>Nam blandit nisi</span> ut erat pretium, vitae placerat nisi
              hendrerit. Fusce ut tortor placerat purus malesuada dignissim ut
              id turpis. Suspendisse.
            </li>
            <li>
              <img alt="" />
              <span>Cras odio ex, euismod</span> a arcu ac, condimentum porta
              velit. Proin quis condimentum nisl. Suspendisse orci massa,
              condimentum sit amet varius eget, interdum ut augue.
            </li>
            <li>
              <img alt="" />
              <span>Praesent vulputate consectetur</span> dictum. Proin lacinia
              ornare massa quis commodo. Praesent feugiat fermentum diam at
              laoreet. Morbi finibus dui lectus, aliquet molestie augue
              tristique.
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
