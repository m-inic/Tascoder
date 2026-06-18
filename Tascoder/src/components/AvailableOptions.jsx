import "./AvailableOptions.css";
import "./masterComponentsQueries.css"
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

const articles = [
  {
    id: "availableOptionsArticle1",
    heading: "Lorem ipsum dolor sit amet, consectetur.",
    subheading:
      "Your projects (yes, even those tricky ones) will be up and running in a matter of minutes.",
    subheadingTag: "h2",
    image: bunn,
    quote:
      "Praesent non ornare arcu. Aenean sollicitudin lacinia nisl, eu condimentum metus pharetra ac. Aenean auctor tellus libero, non interdum nisi pretium eu. Sed dapibus eu nisl a aliquet. Integer a lacinia justo.",
    profile: {
      img: pfpBun1,
      name: "Zus Toni",
      role: "CEO at ZMO (Zus Mafia Organisation)",
    },
    items: [
      {
        icon: icon1,
        title: "Nam blandit nisi",
        text: "Nam blandit nisi ut erat pretium, vitae placerat nisi hendrerit. Fusce ut tortor placerat purus malesuada dignissim ut id turpis. Suspendisse.",
      },
      {
        icon: icon2,
        title: "Cras odio ex, euismod",
        text: "Cras odio ex, euismod a arcu ac, condimentum porta velit. Proin quis condimentum nisl. Suspendisse orci massa, condimentum sit amet varius eget, interdum ut augue.",
      },
      {
        icon: icon3,
        title: "Praesent vulputate consectetur",
        text: "Praesent vulputate consectetur dictum. Proin lacinia ornare massa quis commodo. Praesent feugiat fermentum diam at laoreet. Morbi finibus dui lectus, aliquet molestie augue tristique.",
      },
    ],
  },
  {
    id: "availableOptionsArticle2",
    heading: "Lorem ipsum dolor sit amet, consectetur.",
    subheading:
      "Your projects (yes, even those tricky ones) will be up and running in a matter of minutes.",
    subheadingTag: "p",
    image: zus,
    quote:
      "Praesent non ornare arcu. Aenean sollicitudin lacinia nisl, eu condimentum metus pharetra ac. Aenean auctor tellus libero, non interdum nisi pretium eu. Sed dapibus eu nisl a aliquet. Integer a lacinia justo.",
    profile: {
      img: pfpBun2,
      name: "Zus Kit",
      role: "Secretary and administrative operations, ZMO",
    },
    items: [
      {
        icon: icon1,
        title: "Nam blandit nisi",
        text: "Nam blandit nisi ut erat pretium, vitae placerat nisi hendrerit. Fusce ut tortor placerat purus malesuada dignissim ut id turpis. Suspendisse.",
      },
      {
        icon: icon2,
        title: "Cras odio ex, euismod",
        text: "Cras odio ex, euismod a arcu ac, condimentum porta velit. Proin quis condimentum nisl. Suspendisse orci massa, condimentum sit amet varius eget, interdum ut augue.",
      },
      {
        icon: icon3,
        title: "Praesent vulputate consectetur",
        text: "Praesent vulputate consectetur dictum. Proin lacinia ornare massa quis commodo. Praesent feugiat fermentum diam at laoreet. Morbi finibus dui lectus, aliquet molestie augue tristique.",
      },
    ],
  },
  {
    id: "availableOptionsArticle3",
    heading: "Lorem ipsum dolor sit amet, consectetur.",
    subheading:
      "Your projects (yes, even those tricky ones) will be up and running in a matter of minutes.",
    subheadingTag: "p",
    image: zes,
    quote:
      "Praesent non ornare arcu. Aenean sollicitudin lacinia nisl, eu condimentum metus pharetra ac. Aenean auctor tellus libero, non interdum nisi pretium eu. Sed dapibus eu nisl a aliquet. Integer a lacinia justo.",
    profile: {
      img: pfpBun3,
      name: "Zus Maus",
      role: "Delivery and transportation, ZMO",
    },
    items: [
      {
        icon: icon1,
        title: "Nam blandit nisi",
        text: "Nam blandit nisi ut erat pretium, vitae placerat nisi hendrerit. Fusce ut tortor placerat purus malesuada dignissim ut id turpis. Suspendisse.",
      },
      {
        icon: icon2,
        title: "Cras odio ex, euismod",
        text: "Cras odio ex, euismod a arcu ac, condimentum porta velit. Proin quis condimentum nisl. Suspendisse orci massa, condimentum sit amet varius eget, interdum ut augue.",
      },
      {
        icon: icon3,
        title: "Praesent vulputate consectetur",
        text: "Praesent vulputate consectetur dictum. Proin lacinia ornare massa quis commodo. Praesent feugiat fermentum diam at laoreet. Morbi finibus dui lectus, aliquet molestie augue tristique.",
      },
    ],
  },
];

export default function AvailableOptions() {
  const [activeItems, setActiveItems] = useState({});

  function toggleItem(articleIndex, itemIndex) {
    setActiveItems((prev) => ({
      ...prev,
      [articleIndex]: prev[articleIndex] === itemIndex ? null : itemIndex,
    }));
  }

  return (
    <section id="availableOptionsSection">
      {articles.map((article, aIdx) => {
        return (
          <article key={article.id} id={article.id}>
            <div className="availableOptionsTextsHolder">
              <h1>{article.heading}</h1>
              <h2>{article.subheading}</h2>
              <ul>
                {article.items.map((item, iIdx) => {
                  const isActive = activeItems[aIdx] === iIdx;
                  return (
                    <li
                      key={iIdx}
                      className={isActive ? "listItemExpanded" : ""}
                      onClick={() => toggleItem(aIdx, iIdx)}
                    >
                      <img src={item.icon} alt="" />
                      <div className="liTextBlock">
                      <span>{item.title}</span>
                      <p>{item.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <q>{article.quote}</q>
              <div className="availableOptionsProfile">
                <img src={article.profile.img} alt="" />
                <div>
                  <p>{article.profile.name}</p>
                  <span>{article.profile.role}</span>
                </div>
              </div>
            </div>
            <div className="availableOptionsImg">
              <img src={article.image} alt="" />
            </div>
          </article>
        );
      })}
    </section>
  );
}
