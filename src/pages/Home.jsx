import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Resume from "../components/Resume/Resume";
///import EducationCard from "../components/EducationCard/EducationCard";
import Skills from "../components/Skills/Skills";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import Modal from "../components/Modal/Modal";
import Footer from "../components/Footer/Footer";
///import { experiencia } from "../data/experience";
import { portfolioItems } from "../data/portfolioitems";
import { texts } from "../data/texts";
///import { skills } from "../data/skills";

export default function Home() {
  const [lang, setLang] = useState("es");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const systemLang = navigator.language.startsWith("en") ? "en" : "es";
    setLang(systemLang);
  }, []);

  return (
    <div>
      <Header lang={lang} setLang={setLang} texts={texts} />

      <Nav lang={lang} texts={texts} />

      <Resume lang={lang} texts={texts} />

      <Skills lang={lang} texts={texts} />

      <section id="portfolio">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} lang={lang} onClick={setSelected} />
        ))}
      </section>

      <Footer lang={lang} texts={texts} />

      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
