import './App.css';
import MoviePreview from './MoviePreview';
import {movies} from './movies';
import {useState} from 'react';
import MovieDetails from './MovieDetails';


const App = () => {
    //this line is the same as the next two
    //you can do javascript here
    //example using console.log
    console.log("Hello");
    /*
      function useState(startingState)  {
          //some logic goes here

          return [variable, setVariable];
      } 
    */
   const [currentMovie, setCurrentMovie] = useState(null);


    //this is array desctructuring
    //const currentMovie = useState(null)[0];
    //const setCurrentMovie = useState(null)[1];

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
           {/*<MovieDetails/> is also fine to use here*/}
            <MovieDetails
                currentMovie={currentMovie}
            >
            </MovieDetails>
        </div>
    );
}

export default App;
