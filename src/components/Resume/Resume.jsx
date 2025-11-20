import React from "react";
import styles from "./Resume.module.scss";
import movilImg from "../../assets/movil-img.svg";

export default function Resume({ lang, texts }) {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        {/* Formación */}
        <div className={`${styles.sectionTitle} w-100 mt-4`}>
          <h2>{texts[lang].resume.education.title}</h2>
        </div>

        <div className={styles.row}>
          {/* Columna izquierda */}
          <div className={styles.col}>
            {texts[lang].resume.education.left.map((item, i) => (
              <div className={styles.resumeItem} key={i}>
                <h4>{item.title}</h4>
                <h5>{item.date}</h5>
                <p><em>{item.place}</em></p>
              </div>
            ))}
          </div>

          {/* Columna derecha */}
          <div className={styles.col}>
            {texts[lang].resume.education.right.map((item, i) => (
              <div className={styles.resumeItem} key={i}>
                <h4>{item.title}</h4>
                <h5>{item.date}</h5>
                <p><em>{item.place}</em></p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia Profesional */}
        <div className={`${styles.sectionTitle} w-100 mt-4`}>
          <h2>{texts[lang].resume.experience.title}</h2>
        </div>

        <div className={styles.row}>
          {/* Columna izquierda */}
          <div className={styles.col}>
            {texts[lang].resume.experience.left.map((item, i) => (
              <div className={styles.resumeItem} key={i}>
                <h4>{item.title}</h4>
                <h5>{item.date}</h5>
                <p><em>{item.place}</em></p>

                {item.tasks && (
                  <ul>
                    {item.tasks.map((t, index) => (
                      <li key={index}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Columna derecha */}
          <div className={styles.col}>
            {texts[lang].resume.experience.right.map((item, i) => (
              <div className={styles.resumeItem} key={i}>
                <h4>{item.title}</h4>
                <h5>{item.date}</h5>
                <p><em>{item.place}</em></p>

                {item.tasks && (
                  <ul>
                    {item.tasks.map((t, index) => (
                      <li key={index}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Imagen móvil decorativa */}
        <div className={styles.movilImg}>
          <img src={movilImg} alt="Imagen decorativa móvil" />
        </div>

      </div>
    </section>
  );
}
