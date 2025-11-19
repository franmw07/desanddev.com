import React from "react";
import styles from "./Footer.module.scss";

export default function Footer({ lang, texts }) {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} {texts[lang].title} — {lang === "es" ? "Todos los derechos reservados" : "All rights reserved"}
    </footer>
  );
}