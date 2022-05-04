import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import styles from "./H1Section.module.scss";

export default function H1Section() {
  const h1Ref = useRef();
  useEffect(() => {
    gsap.from(h1Ref.current, { opacity: 0 });
    gsap.to(h1Ref.current, { duration: 2, opacity: 1 });
  });
  return (
    <section className={styles.h1section}>
      <article>
        <div id="waves">
          <img src="" alt="" />
        </div>
        <h1 ref={h1Ref}>
          Hjerneskanner <span>der opfanger tegn på ADHD med </span>{" "}
          <span>92%</span> <span>sikkerhed</span>
        </h1>
      </article>
      <div id="loadmore">
        <p>Læs mere</p>
        <img src="" alt="" />
      </div>
    </section>
  );
}
