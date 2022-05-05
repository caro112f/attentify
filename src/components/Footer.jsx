import "./Footer.scss";

export default function Footer() {
  return (
    <section id="footer">
      <article>
        <h4>Curvex teknologi</h4>
        <h4 className="indryk">- skabt af MeeW</h4>
      </article>
      <article>
        <h5>Find os her:</h5>
        <ul>
          <li>
            <p> Overgaden Neden Vandet 9A</p>
          </li>
          <li>
            {" "}
            <p> 1414 København</p>
          </li>
          <li>
            {" "}
            <p> +45 27 76 76 00</p>
          </li>
        </ul>
      </article>
    </section>
  );
}
