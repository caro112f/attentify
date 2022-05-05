import "./App.scss";

import Header from "./components/Header";
import H1Section from "./components/H1Section";
import InfoSection from "./components/InfoSection";
/*
import ToParentsSection from "./components/ToParentsSection";
import ToSchoolSection from "./components/ToSchoolSection"; */

export default function App() {
  const hamburger = document.querySelector("#burgermenu");
  const menuList = document.querySelector("#menu");
  hamburger.addEventListener("click", mobileMenu);
  function mobileMenu() {
    hamburger.removeEventListener("click", mobileMenu);
    menuList.classList.remove("inactive");
    hamburger.classList.add("active");

    hamburger.addEventListener("click", closeMenu);

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((n) => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.removeEventListener("click", closeMenu);
      navLinks.forEach((n) => n.removeEventListener("click", closeMenu));
      menuList.classList.add("inactive");
      hamburger.classList.remove("active");
      hamburger.addEventListener("click", mobileMenu);
    }
  }
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
