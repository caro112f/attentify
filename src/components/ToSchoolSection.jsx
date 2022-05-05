import "./ToSchoolSection.scss";

import sharingheart from "./img/sharing-heart.webp";
import girlnature from "./img/girl-nature.webp";
import analyze from "./img/analyze-papers.webp";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ToSchoolSection() {
  gsap.registerPlugin(ScrollTrigger);
  const schoolRef = useRef();

  useEffect(() => {
    const el = schoolRef.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  return (
    <section id="toschools" ref={schoolRef}>
      <div className="content_wrapper">
        <h2>Skal dine elever blive klogere på ADHD?</h2>
        <h3>Få adgang til vores research og hjerneskanner </h3>
        <article>
          <div className="facts">
            <h4>Teknisk info</h4>
            <ul>
              <li>Lorem</li>
              <li>Ipsum</li>
            </ul>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            exercitationem id vero ea a optio officiis sapiente provident
            repellendus laborum amet cupiditate eaque nostrum consequatur,
            veritatis iure autem iste voluptate. <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget mi et felis fringilla malesuada quis ut est. Vestibulum iaculis
            sagittis leo, vitae maximus orci pretium ut. Phasellus imperdiet ut
            mauris id tristique. Fusce finibus sapien vel diam sagittis
            fringilla. Ut hendrerit magna eu nisl suscipit fringilla. Etiam id
            tempus odio, eu dapibus leo. <br /> Integer arcu mi, scelerisque a
            lobortis sit amet, malesuada vitae mauris. Nulla condimentum congue
            orci, id commodo massa interdum vel. Quisque aliquet tempus feugiat.
            Proin vitae neque sed elit cursus porttitor. Aenean malesuada
            sagittis urna. Nam maximus at neque ut posuere.
          </p>
          <div className="button_wrapper">
            <button>
              <h5>Køb nu</h5>
            </button>
          </div>
        </article>
        <section className="pictures">
          <div>
            <img src={girlnature} alt="" />
          </div>
          <div>
            <img src={sharingheart} alt="" />
          </div>
          <div>
            <img src={analyze} alt="" />
          </div>
        </section>
      </div>
    </section>
  );
}
