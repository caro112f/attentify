import "./App.scss";

import "./Header.scss";

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
        <H1Section />
        <InfoSection />
        {/*         
        <ToParentsSection />
        <ToSchoolSection /> */}
      </main>
    </div>
  );
}
