import './App.css';
import MoviePreview from './MoviePreview';
import {movies} from './movies';
import {useState} from 'react';
import MovieDetails from './MovieDetails';


const App = () => {
   
    console.log("Hello");
   
   const [currentMovie, setCurrentMovie] = useState(null);

   const clearCurrentMovie = () => {
    setCurrentMovie(null);
   }
   /*
   Transated to the old function way
   function clearCurrentMovie() {
    setCurrentMovie(null);
   }
   
   
   */

    console.log(currentMovie);

    return (
        <div className="movie-container">
           {
            movies.map((movie) =>
               <MoviePreview
               key={movie.title}
               setCurrentMovie={setCurrentMovie}
                movieToPreview={movie}
               />
            )
           }
           {
               <button onClick={clearCurrentMovie}>Clear</button>
           }
           {/*<MovieDetails/> is also fine to use here*/}
            <MovieDetails
                currentMovie={currentMovie}
            >
            </MovieDetails>
        </div>
    );
}

export default App;
