import FeaturedMovie from "@/components/featured-movie";
import MovieRecommendation from "@/components/movie-reviews";
import MoviesSection from "@/components/movies-section";
import MovieTranslations from "@/components/movie-translations";
import MovieVideo from "@/components/movie-video";
import MoviesCast from "@/components/movie-casts";
import React from "react";

function MovieContainer({ movie, recommendations, translations, videos, reviews, cast }) {
  return <>
    <FeaturedMovie movie={movie} />
    <MovieTranslations title={'Translations'} translations={translations.translations.slice(1, 7)}/>
    <MoviesCast title={'Cast'} cast={cast.cast}/>
    <MovieVideo title={'Trailer Official'} videos={videos.results[0]}/>
    <MoviesSection title={'Recommendations For You'} movies={recommendations.results.slice(1, 7)}/>
    <MovieRecommendation title={'Viewers Reviews'} reviews={reviews.results} />
  </>
}

export default MovieContainer;