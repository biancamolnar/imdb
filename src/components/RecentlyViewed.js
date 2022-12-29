import React from "react";
import MovieBox from "../components/MovieBox"; 

function RecentlyViewed({ recentlyViewedMovies, addToRecentlyViewed }) { 
  return (
    <div className="recently-viewed">
      <h2>Recently Viewed</h2>
      <div className="grid">
        {recentlyViewedMovies.map((movie) => (
          <MovieBox key={movie.id} {...movie} addToRecentlyViewed={addToRecentlyViewed} /> 
        ))}
      </div>
    </div>
  );
}

export default RecentlyViewed;
