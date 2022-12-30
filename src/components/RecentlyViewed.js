import React from "react";
import MovieBox from "../components/MovieBox";

function RecentlyViewed({ recentlyViewedMovies, addToRecentlyViewed }) {
  const recentMovies = recentlyViewedMovies.slice(0, 5);

  return (
    <div className="recently-viewed">
      <h2>Recently Viewed</h2>
      <div className="grid">
        {recentMovies.map((movie) => (
          <MovieBox
            key={movie.id}
            {...movie}
            addToRecentlyViewed={addToRecentlyViewed}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewed;
