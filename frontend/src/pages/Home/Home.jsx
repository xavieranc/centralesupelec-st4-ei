import './Home.css' ;
import Movie from '../../components/Movie/Movie.jsx' ;
import { useState } from 'react' ;
import { useEffect } from 'react' ;
import axios from 'axios' ;

function Home() {
  const [movie_name, set_movie_name] = useState('');
  const [movies, set_movies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {headers : {accept : 'application/json', authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo'}}).then(update_movies).catch((error) => {console.log(error)});
  }, []);

  return (
    <div className="App">
      <div>
        <div>Liste des 100 films les plus populaires.</div>
        <input
          id="search"
          value={movie_name}
          onChange={(event) => {
            set_movie_name(event.target.value);
          }}
          type="text"
        />
        <p>{movie_name}</p>
      </div>
      <div id = 'movie_container'>
        {movies.map((movie) => <Movie movie={{title : movie.original_title, date : movie.release_date, image_path : movie.poster_path}}/>)}
      </div>
    </div>
  );

  function update_movies(response) {
    const array = response.data.results ;
    console.log(array)
    set_movies(array)
  }
}

export default Home;
