import React  from 'react'
import { useParams } from 'react-router-dom'

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
    return <h2 className='section-title'> no movie to display</h2>
  }
  return (
    <section>
      <h2 className="section-title">{movie.title}</h2>
    </section>
  );
}

export default SingleMovie
