import React from "react";
import styles from "./CVCard.module.scss";

export default function CVCard({ item, lang }) {
  return (
    <div className={styles.cvcard}>
      <h3>{item.fecha[lang]}</h3>
      <p className={styles.company}>{item.empresa[lang]}</p>
      <p>{item.descripcion[lang]}</p>
    </div>
  );
}