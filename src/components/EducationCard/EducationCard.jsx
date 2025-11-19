import React from "react";
import styles from "./EducationCard.module.scss";

export default function EducationCard({ item, lang }) {
  return (
    <div className={styles.EducationCard}>
      <h3>{item.fecha[lang]}</h3>
      <p className={styles.institute}>{item.instituto[lang]}</p>
      <p>{item.titulo[lang]}</p>
    </div>
  );
}