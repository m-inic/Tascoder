import "./Intro.css";
import 'animate.css';

export default function Intro() {
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
          <li id="bunnsHolderItem1" className="animate__animated animate__shakeY animate__infinite	infinite">
            <div className="bunnsHolderImg" id="bunnsHolderImg1"></div>
            <h3>Bnnuy za compom🤔</h3>
            <p>Svakim potevima kada zus uci, on stavi naocaru i razmislja o meslima.</p>
          </li>
          <li id="bunnsHolderItem2" className="animate__animated animate__shakeY animate__infinite	infinite">
            <div className="bunnsHolderImg" id="bunnsHolderImg2"></div>
            <h3>Bnnuy dasu🦁</h3>
            <p>Ovo odvazno zoso se ne boji od NIKHIM, e ponim voli tocu</p>
          </li>
          <li id="bunnsHolderItem3" className="animate__animated animate__shakeY animate__infinite	infinite">
            <div className="bunnsHolderImg" id="bunnsHolderImg3"></div>
            <h3>Bnnuy mali🐁</h3>
            <p>Mali zos na sliki lici na poljskem mesevema, e nekad eh pomesaju</p>
          </li>
          <li id="bunnsHolderItem4" className="animate__animated animate__shakeY animate__infinite	infinite">
            <div className="bunnsHolderImg" id="bunnsHolderImg4"></div>
            <h3>Bnnuy designer💻</h3>
            <p>Ovi zos je onaj kem je napravio ovaj sajt, on pise ovaj TEXT</p>
          </li>
        </ul>
      </section>
    </>
  );
}
