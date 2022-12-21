import React from "react";
import { Link } from 'react-router-dom'


const API_IMG = "https://image.tmdb.org/t/p/w500/";
const MovieBox =({original_title, poster_path, vote_average, release_date, overview, id}) => {
    return (
        <div className="card"> 
        <div className="card-body">
            <img src={API_IMG+poster_path} alt="movie poster"></img>
            <p>{original_title}</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg> {vote_average}</p>
            </div>
            <Link to={`/movie/${id}`}>
        <button className="viewmore">View more</button>
      </Link>
        </div>
    )
}

export default MovieBox;