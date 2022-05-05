import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./H1Section.scss";
import waves from "./img/waves.svg";
import { DownOutlined } from "@ant-design/icons";

export default function H1Section() {
  const h1Ref = useRef();
  useEffect(() => {
    gsap.from(h1Ref.current, { opacity: 0 });
    gsap.to(h1Ref.current, { duration: 2, opacity: 1 });
  });
  return (
    <section className="h1section">
      <article>
        <h1 ref={h1Ref}>
          Hjerneskanner <br />
          <span className="smalltext">
            der opfanger tegn på ADHD med <br />{" "}
          </span>
          <span className="bignumber">
            92% <br />
          </span>
          <span className="smalltext">sikkerhed</span>
        </h1>
        <img src={waves} className="waves" alt="" />
      </article>
      <div className="loadmore">
        <p>Læs mere</p>
        <DownOutlined />
      </div>
    </section>
  );
}
