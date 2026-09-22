import "./Intro.css";
import "./masterComponentsQueries.css"
import "animate.css";
import { useState } from "react";

export default function Intro() {
  const [isHovered, setIsHovered] = useState(null);

  const getClass = (id) =>
    isHovered === id
      ? ""
      : "animate__animated animate__shakeY animate__infinite infinite";

  const cards = [
    {
      id: 1,
      title: "Bunny reader🤔",
      text: "Always when he reads, he puts his glasses on.",
    },
    {
      id: 2,
      title: "Strong bunny🦁",
      text: "A bunny full of pride, fearless and feisty.",
    },
    {
      id: 3,
      title: "Small bunny🐁",
      text: "He is commonly mistaken for being a field mouse.",
    },
    {
      id: 4,
      title: "Bunny dev💻",
      text: "This one is responsible for making the website.",
    },
  ];

  return (
    <>
      <section id="introSection">
        <div id="wavesIntroHolder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 256"
            fill="none"
            className="wavesIntro"
            id="wavesIntro1"
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
            className="wavesIntro"
            id="wavesIntro2"
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
            className="wavesIntro"
            id="wavesIntro3"
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
        <ul id="bunnsHolder">
          {cards.map(({ id, title, text }) => (
            <li
              key={id}
              id={`bunnsHolderItem${id}`}
              className={getClass(id)}
              onMouseEnter={() => setIsHovered(id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className="bunnsHolderImg" id={`bunnsHolderImg${id}`}></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
