import "./Features.css";
import "./masterComponentsQueries.css"
import bnnuComp from "../assets/bnnuyComp.jpg";
import bunnComp from "../assets/bunnyComp.jpg";
import bunn from "../assets/bunn.jpg";
import { useEffect, useState } from "react";

export default function Features() {
  const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    function scrollHandler() {
      setScrollPosition(window.scrollY);
    }
    useEffect(() => {
      window.addEventListener("scroll", scrollHandler);

      scrollHandler();

      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }, []);
    return scrollPosition;
  };

  const scrollYAxis = useScrollPosition();

  const bunnImgSrc = () => {if(scrollYAxis > 10 && scrollYAxis < 2250) {
    return bnnuComp;
  } else if(scrollYAxis >= 2251 && scrollYAxis < 2700) {
    return bunnComp;
  } else if(scrollYAxis >= 2700) {
    return bunn;
  }}
  

  return (
    <section id="featuresSection">
      <div id="featuresInfoHolder">
        <div className="featuresInfo">
          <h2>Moze da se radi ovo</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <h3>To smo svi znali</h3>
        </div>
        <div className="featuresInfo">
          <h2>A moze da se radi i ono</h2>
          <p>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages
          </p>
          <h3>To je impresivno</h3>
        </div>
        <div className="featuresInfo">
          <h2>I ovo je sve vreme moguce</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" by Cicero,
            written in 45 BC.
          </p>
          <h3>Wow ko bi reko</h3>
        </div>
      </div>
      <div id="featuresImagesHolder">
        <img key={bunnImgSrc()} src={bunnImgSrc()} alt="" className="img1 animate__animated animate__fadeIn" />
      </div>
    </section>
  );
}
