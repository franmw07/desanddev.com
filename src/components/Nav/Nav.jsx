import React from "react";
import styles from "./Nav.module.scss";

export default function Nav({ lang, texts }) {
  return (
    <nav className={styles.nav}>
        <a href="#resume">{texts[lang].nav.cv}</a>
        <a href="#skills">{texts[lang].nav.skills}</a>
        <a href="#portfolio">{texts[lang].nav.portafolio}</a>
        <a href="#contacto">{texts[lang].nav.contacto}</a>
    </nav>
  );
}

