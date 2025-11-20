import React, { useState } from "react";
import styles from "./Modal.module.scss";

export default function Modal({ item, lang, onClose }) {
  if (!item) return null;

  // Imagen activa para el carrusel
  const [activeIndex, setActiveIndex] = useState(0);

  const isImageGallery = item.tipo === "imagen" && item.imagenes?.length > 0;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        {item.tipo === "video" && (
          <>
            {/* Video principal */}
            <video
              controls
              src={item.videos[activeIndex].src}
              poster={item.videos[activeIndex].thumb}
              className={styles.mainMedia}
            />

            {/* Miniaturas de video */}
            <div className={styles.thumbnails}>
              {item.videos.map((vid, i) => (
                <img
                  key={i}
                  src={vid.thumb}
                  alt={`thumb-${i}`}
                  className={`${styles.thumb} ${
                    i === activeIndex ? styles.active : ""
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </>
        )}

        {/* IMAGEN O GALERÍA */}
        {isImageGallery && (
          <>
            {/* Imagen principal */}
            <img
              src={item.imagenes[activeIndex]}
              alt={item.titulo[lang]}
              className={styles.mainImage}
            />

            {/* Carrusel de miniaturas */}
            <div className={styles.thumbnails}>
              {item.imagenes.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`mini-${i}`}
                  className={`${styles.thumb} ${
                    i === activeIndex ? styles.active : ""
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </>
        )}

        <div className={styles.meta}>
          <strong>{item.titulo[lang]}</strong>
          <p>{item.descripcion[lang]}</p>
        </div>
      </div>
    </div>
  );
}
