import "./ToParentsSection.scss";

import girlreading from "./img/girl-reading.webp";
import boycomputer from "./img/boy-computer.webp";
import girlheadphones from "./img/girl-headphones.webp";

export default function ToParentsSection() {
  return (
    <section id="toparents">
      <div className="content_wrapper">
        <h2>Er du i tvivl om dit barn har ADHD?</h2>
        <h3>Køb vores skanner til privat brug</h3>
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
            veritatis iure autem iste voluptate. <br />
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
            <img src={girlreading} alt="" />
          </div>
          <div>
            <img src={boycomputer} alt="" />
          </div>
          <div>
            <img src={girlheadphones} alt="" />
          </div>
        </section>
      </div>
    </section>
  );
}
