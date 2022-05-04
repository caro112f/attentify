import "./App.scss";

import Header from "./components/Header";
import H1Section from "./components/H1Section";
import InfoSection from "./components/InfoSection";
/*
import ToParentsSection from "./components/ToParentsSection";
import ToSchoolSection from "./components/ToSchoolSection"; */

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="main_content">
          <H1Section />
          <InfoSection />
          {/*         
        <ToParentsSection />
        <ToSchoolSection /> */}
        </section>
      </main>
    </div>
  );
}
