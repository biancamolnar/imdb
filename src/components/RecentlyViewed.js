import React from "react";

const RecentlyViewed = ({ recentlyViewedMovies }) => {
  const addToRecentlyViewed = (id) => {
    addToRecentlyViewed(id);
  };

  return (
    <div className="recently-viewed">
      <h2>Recently Viewed</h2>
      <ul>
        {recentlyViewedMovies.map((movie) => (
          <li key={movie.id} onClick={() => addToRecentlyViewed(movie.id)}>
            {movie.original_title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyViewed;
