import React  from 'react'
import { Link, useParams } from 'react-router-dom'
import './SingleMovie.css';
import Navbar from '../components/Navbar';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const SingleMovie = () => {
  const {id} = useParams();
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    async function getMovie(){
      try{
        const response =  await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=059bbea7bdbdf6c61c395be560b8abfd`);
        const data = await response.json()
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error)
      }
    }
    getMovie()
  },[id])
  if (!movie){
    return <h2> no movie to display</h2>
  }
  return (
    <>
      <Navbar />
      <Link to="/" className='home-btn'>Home</Link>
      <section>
        <img src={API_IMG+movie.poster_path} alt="movie poster" className='info-img'></img>
        <div className='movie-info'>
          <h2 className="section-title">{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release date: {movie.release_date}</p>
        </div>
      </section>
    </>
  );
}

export default SingleMovie
