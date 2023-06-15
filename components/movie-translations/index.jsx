import React from 'react'
import { BsTranslate } from "react-icons/bs";
import styles from "./styles.module.css";

function MovieTranslations({ title, translations = {} }) {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.translations}>
        {translations.map((translation, index) => (
          <div key={index} className={styles.translation}>
            <BsTranslate />
            <span>{translation.english_name}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default MovieTranslations;