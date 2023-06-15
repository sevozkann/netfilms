import React from 'react'
import { notFound } from 'next/navigation'

import MovieContainer from '@/containers/movie'

import {
  fetchSingleMovie,
  fetchMovieRecommendations,
  fetchMovieTranslations, fetchMovieVideos,
  fetchMovieReviews,
  fetchMovieCast
} from "@/services/movie";

async function MoviePage({ params }) {
  const detail = await fetchSingleMovie(params.id);
  const recommendation = await fetchMovieRecommendations(params.id);
  const translations = await fetchMovieTranslations(params.id);
  const videos = await fetchMovieVideos(params.id);
  const reviews = await fetchMovieReviews(params.id);
  const cast = await fetchMovieCast(params.id);

  if (!detail) {
    notFound();
  }

  return <MovieContainer
            movie={detail}
            recommendations={recommendation}
            translations={translations}
            videos={videos}
            reviews={reviews}
            cast={cast}
          />
}

export default MoviePage;