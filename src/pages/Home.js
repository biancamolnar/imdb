import React, { useState, useEffect } from "react";

import "./Home.css";
import logo from "../../src/logo.svg";
import { Navbar, Button, Form, FormControl } from "react-bootstrap";
import MovieBox from "../components/MovieBox";
import { Link } from "react-router-dom";
import RecentlyViewed from "../components/RecentlyViewed";

const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=059bbea7bdbdf6c61c395be560b8abfd";
const upcomingUrl =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=059bbea7bdbdf6c61c395be560b8abfd";
const topRatedUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=059bbea7bdbdf6c61c395be560b8abfd"


function Home({ recentlyViewedMovies, addToRecentlyViewed }) {
  const [searchResult, setSearchResult] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(popularUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPopularMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(upcomingUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpcomingMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(topRatedUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTopRatedMovies(data.results);
      });
  }, []);
  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=059bbea7bdbdf6c61c395be560b8abfd&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setSearchResult(data.results);
    } catch {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar>
        <div className="nav">
        <Link to="/">
  <img
    src={logo}
    alt="movie db logo"
    className="logo"
    style={{ width: "10%" }}
    onClick={() => setSearchResult([])}
  ></img>
</Link>
          <Form className="search-form" onSubmit={searchMovie}>
            <FormControl
              type="search"
              placeholder="Movie search"
              className="form"
              aria-label="search"
              name="query"
              value={query}
              onChange={changeHandler}
            ></FormControl>
            <Button className="search-btn" variant="secondary" type="submit">
              Search
            </Button>
          </Form>
        </div>
      </Navbar>

      <div className="container">
        {searchResult.length === 0 ? (
          <>
            <h1>Popular</h1>
            <div className="grid">
              {popularMovies.map((movieReq) => (
                <MovieBox
                  key={movieReq.id}
                  {...movieReq}
                  addToRecentlyViewed={addToRecentlyViewed}
                />
              ))}
            </div>
            <h1>Upcoming</h1>
            <div className="grid">
              {upcomingMovies.map((movieReq) => (
                <MovieBox
                  key={movieReq.id}
                  {...movieReq}
                  addToRecentlyViewed={addToRecentlyViewed}
                />
              ))}
            </div>
            <h1>Top Rated</h1>
            <div className="grid">
              {topRatedMovies.map((movieReq) => (
                <MovieBox
                  key={movieReq.id}
                  {...movieReq}
                  addToRecentlyViewed={addToRecentlyViewed}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1>Search Results</h1>
            <div className="grid">
              {searchResult.map((movieReq) => (
                <MovieBox
                  key={movieReq.id}
                  {...movieReq}
                  addToRecentlyViewed={addToRecentlyViewed}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <RecentlyViewed recentlyViewedMovies={recentlyViewedMovies} />
    </>
  );
}
export default Home;
