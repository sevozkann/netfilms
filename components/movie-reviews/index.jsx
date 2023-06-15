import React from 'react'
import { BiCalendar } from "react-icons/bi";
import { FcRating } from "react-icons/fc";
import styles from "./styles.module.css";

function MovieReviews({ title, reviews = {} }) {
  if(reviews.length === 0) {
    return;
  }

  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      {reviews.map((review) => (
        <div key={review.id} className={styles.review}>
          <div className={styles.reviewHeader}>
            <strong>{review.author_details.username}</strong>
            <div className={styles.reviewHeader}>
              <div className={styles.releaseDate}>
                <BiCalendar />
                <span>{new Date(review.updated_at).toJSON().slice(0,10).split('-').reverse().join()}</span>
              </div>
              <div className={styles.rating}>
                <FcRating />
                <span>{review.author_details.rating}</span>
              </div>
            </div>
          </div>
          <p>{review.content}</p>
        </div>
      ))}
    </>
  )
}

export default MovieReviews;