import React from "react";
import styles from "./Skills.module.scss";

// Importa tus iconos (actualiza las rutas según tu proyecto)
import html5 from "../../assets/logos/html5.svg";
import css3 from "../../assets/logos/css.svg";
import sass from "../../assets/logos/sass.svg";
import javascript from "../../assets/logos/javascript.svg";
import ReactJS from "../../assets/logos/reactJs.png";
import afterEffects from "../../assets/logos/afterEffects.png";
import jquery from "../../assets/logos/jquery.svg";
import illustrator from "../../assets/logos/illustrator.svg";
import photoshop from "../../assets/logos/photoshop.svg";
import premierPro from "../../assets/logos/premierPro.png";
import xd from "../../assets/logos/xd.svg";
import figma from "../../assets/logos/figma.svg";
import github from "../../assets/logos/github.svg";

export default function Skills({ lang, texts }) {
  const skills = [
    { icon: illustrator, label: "Illustrator" },
    { icon: photoshop, label: "Photoshop" },
    { icon: afterEffects, label: "After Effects" },
    { icon: premierPro, label: "Premier Pro" },
    { icon: xd, label: "Adobe XD" },
    { icon: figma, label: "Figma" },
    { icon: html5, label: "HTML5" },
    { icon: css3, label: "CSS3" },
    { icon: sass, label: "Sass" },
    { icon: javascript, label: "JavaScript" },
    { icon: ReactJS, label: "React" },
    { icon: jquery, label: "jQuery" },
    { icon: github, label: "GitHub" },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>{texts[lang].skills.title}</h2>
        </div>

        <div className={styles.skillsContent}>
          <ul>
            {skills.map((skill, index) => (
              <li key={index} className={styles.iconFab}>
                <img src={skill.icon} alt={`skill ${skill.label}`} />
                <p>{skill.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
