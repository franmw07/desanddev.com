import React from "react";
import styles from "./Header.module.scss";

export default function Header({ lang, setLang, texts }) {
  return (
<header className={styles.header}>
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.bgVideo}
      >
        <source src="/assets/header-video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Contenido por encima del video */}
      <div className={styles.overlay}>
        <h1>{texts[lang].title}</h1>
        <p>{texts[lang].subtitle}</p>
        <h2>{texts[lang].name}</h2>
        <div className={styles.langSwitch}>
          <button className={lang === "es" ? styles.active : ""} onClick={() => setLang("es")}>ES</button>
          <button className={lang === "en" ? styles.active : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </header>
  );
}