import './App.css';
import MoviePreview from './MoviePreview';
import {movies} from './movies';
import {useState} from 'react';


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
            {/*Ternary operators are fancy bu simplifies if/else statements*/}
            {/*check if currentMovie exists*/}
            {/*if it does, show the <div> block */}
            {/*if it does not, show the <p>  */}
            {
                currentMovie ?
                <div>
                    <p>{JSON.stringify(currentMovie)}</p>
                    <p>{currentMovie.title}</p>
                    <p>{currentMovie.description}</p>
                    <p>{currentMovie.rating}</p>
                    <p>{currentMovie.director}</p>
                    <p>{currentMovie.releaseYear}</p>
               
                </div>
                :
                <p>No movie selected</p>

            }
         
        </div>
    );
}

export default App;
