import React from 'react'
import YouTube from "react-youtube";
import styles from "./styles.module.css";

function MovieVideo({ title, videos = {} }) {
  const { key, id} = videos;
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.video}>
        <iframe
          id={id}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${key}`}
          frameBorder="0"
        >
        </iframe>
      </div>
    </>
  )
}

export default MovieVideo;