"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsPersonBoundingBox } from "react-icons/bs"
import Image from "next/image";

import styles from "./styles.module.css";

function MoviesCast({ title, cast = [] }) {
    return (
      <div className={styles.castSection}>
        <h3 className={styles.title}>{title}</h3>
        <Swiper
          spaceBetween={12}
          slidesPerView={2}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {cast.map((actor) =>
          <SwiperSlide className={styles.actor} key={actor.id}>
            {
              actor.profile_path ?
              <Image
                width={200}
                height={200}
                unoptimized
                alt={actor.name}
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                priority
              /> : <BsPersonBoundingBox/>
            }
            <strong>
              {actor.name}
            </strong>
          </SwiperSlide>
          )}
        </Swiper>
      </div>
    );
  }

export default MoviesCast;
