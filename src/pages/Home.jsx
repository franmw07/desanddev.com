import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import CVCard from "../components/CVcard/CVcard";
import EducationCard from "../components/EducationCard/EducationCard";
import Skills from "../components/SkillsCard/SkillsCard";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import Modal from "../components/Modal/Modal";
import Footer from "../components/Footer/Footer";
import { experiencia } from "../data/experience";
import { education } from "../data/education";
import { portfolioItems } from "../data/portfolioitems";
import { texts } from "../data/texts";
import { skills } from "../data/skills";

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

      <section id="cv">
        <h2>{lang === "es" ? "Experiencia" : "Experience"}</h2>
        {experiencia.map((item, i) => (
          <CVCard key={i} item={item} lang={lang} />
        ))}
      </section>

      <section id="education">
        <h2>{lang === "es" ? "Formación" : "Education"}</h2>
        <div className="content-education">
          {education.map((item, i) => (
            <EducationCard key={i} item={item} lang={lang} />
          ))}
        </div>
      </section>

      <section id="skills">
        <h2>{lang === "es" ? "Programas y Habilidades" : "Programs & Skills"}</h2>
        <Skills skillsData={skills} lang={lang} />
      </section>

      <section id="portfolio">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} onClick={setSelected} />
        ))}
      </section>

      <Footer lang={lang} texts={texts} />

      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
