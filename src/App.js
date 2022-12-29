import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleMovie from "./pages/SingleMovie";

function App() {
  const [recentlyViewedMovies, setRecentlyViewedMovies] = useState([]);

  const addToRecentlyViewed = (movie) => {
    const updatedRecentlyViewedMovies = recentlyViewedMovies.filter(
      (viewedMovie) => viewedMovie.id !== movie.id
    );
  
    setRecentlyViewedMovies([movie, ...updatedRecentlyViewedMovies]);
  };
  
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/" element={
          <Home
              recentlyViewedMovies={recentlyViewedMovies}
              addToRecentlyViewed={addToRecentlyViewed}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
