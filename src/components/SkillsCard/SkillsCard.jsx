import React from "react";
import styles from "./SkillsCard.module.scss";

export default function Skills({ skillsData, lang }) {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skillGroupDesiner}>
        <h3>{lang === "es" ? "Diseño" : "Design"}</h3>
        <ul className={styles.skillsList}>
          {skillsData.diseño.map((item, i) => (
            <li key={i}>
              <div>
                <img src={item.logo} alt={item.nombre[lang]} className={styles.logo} />
              </div>
              <p>
                {item.nombre[lang]}
              </p>  
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.skillGroupDevelop}>
        <h3>{lang === "es" ? "Desarrollo" : "Development"}</h3>
        <ul className={styles.skillsList}>
          {skillsData.desarrollo.map((item, i) => (
            <li key={i}>
              <div>
                <img src={item.logo} alt={item.nombre[lang]} className={styles.logo} />
              </div>
              <p>
                {item.nombre[lang]}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.skillGroupHability}>
        <h3>{lang === "es" ? "Habilidades" : "Skills"}</h3>
        <ul className={styles.skillsList}>
          {skillsData.habilidades.map((item, i) => (
            <li key={i}>{item[lang]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
