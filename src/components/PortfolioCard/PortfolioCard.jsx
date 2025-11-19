import React from "react";
import styles from "./PortfolioCard.module.scss";

export default function PortfolioCard({ item, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(item)}>
      <div className={styles.thumb}>
        <img src={item.thumb} alt={item.titulo} />
      </div>
      <h4>{item.titulo}</h4>
      <p>{item.descripcion}</p>
    </div>
  );
}

