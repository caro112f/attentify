import "./InfoSection.scss";
import circlegreen from "./img/circle-green.svg";
import circleblue from "./img/circle-blue.svg";
import img from "./img/client-reception.webp";

export default function InfoSection(props) {
  return (
    <section id="infosection" className="infosection">
      <div className="content_wrapper">
        <h2>Hvordan fungerer det?</h2>
        <article>
          <div className="text_wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget mi et felis fringilla malesuada quis ut est. Vestibulum
              iaculis sagittis leo, vitae maximus orci pretium ut. Phasellus
              imperdiet ut mauris id tristique. <br /> Fusce finibus sapien vel
              diam sagittis fringilla. Ut hendrerit magna eu nisl suscipit
              fringilla. Etiam id tempus odio, eu dapibus leo. Integer arcu mi,
              scelerisque a lobortis sit amet, malesuada vitae mauris. Nulla
              condimentum congue orci, id commodo massa interdum vel. Quisque
              aliquet tempus feugiat. Proin vitae neque sed elit cursus
              porttitor. Aenean malesuada sagittis urna. Nam maximus at neque ut
              posuere.
              <br />
              <br />
              Vivamus eget mi et felis fringilla malesuada quis ut est.
              Vestibulum iaculis sagittis leo, vitae maximus orci pretium ut.
              Phasellus imperdiet ut mauris id tristique. Fusce finibus sapien
              vel diam sagittis fringilla. Ut hendrerit magna eu nisl suscipit
              fringilla. Etiam id tempus odio, eu dapibus leo. Integer arcu mi,
              scelerisque a lobortis sit amet, malesuada vitae mauris.
            </p>
          </div>
          <img src={img} alt="" />
          <section className="graphics_facts">
            <div className="smallgraphic">
              <img className="smallcircle" src={circlegreen} alt="" />
            </div>
            <div className="biggraphic">
              <img className="bigcircle" src={circleblue} alt="" />
            </div>
            <div className="biggraphic">
              <img className="smallcircle" src={circlegreen} alt="" />
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
