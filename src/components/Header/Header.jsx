import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./Header.module.scss";
import bgImageHeader from "../../assets/img-hero.svg";

export default function Header({ lang, setLang, texts }) {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    // Destruir la instancia anterior para evitar duplicados
    if (typedInstance.current) {
      typedInstance.current.destroy();
    }

    // Asegurar que subtitle sea array para varias frases
    const subtitles = Array.isArray(texts[lang].subtitle)
      ? texts[lang].subtitle
      : [texts[lang].subtitle];

    typedInstance.current = new Typed(typedElement.current, {
      strings: subtitles,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, [lang, texts]);

  return (
    <header className={styles.header}>
      {/* Imagen de fondo */}
      <div className={styles.bgImage}>
        <img src={bgImageHeader} alt="imagen principal" />
      </div>

      {/* Contenido */}
      <div className={styles.overlay}>
        <h1>{texts[lang].title}</h1>

        {/* Elemento animado */}
        <p>
          <span ref={typedElement} />
        </p>

        <h2>{texts[lang].name}</h2>

        <div className={styles.langSwitch}>
          <button
            className={lang === "es" ? styles.active : ""}
            onClick={() => setLang("es")}
          >
            ES
          </button>
          <button
            className={lang === "en" ? styles.active : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
