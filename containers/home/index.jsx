import React from "react";

import Movies from '@/mocks/movies.json'
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

function HomeContainer({
  categories = [],
  topRatedMovies = [],
  popularMovies = [],
  selectedCategory = []
}) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 5)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
      <MoviesSection title='Top Rated Movies' movies={topRatedMovies.slice(1, 7)}/>
      <MoviesSection title='Popular Movies' movies={popularMovies.slice(1, 7)}/>
      <MoviesSection title='Your Favourites' movies={Movies.results.slice(1, 7)}/>
    </div>
  );
}

export default HomeContainer;