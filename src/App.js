import './App.css';
import MoviePreview from './MoviePreview';
import {movies} from './movies';
import {useContext, useReducer, useState} from "react";

const App = () => {

    return (
        <div>
            {/*Using JSX fragments to handle adjacent JSX elements for the return array of the map function*/}
            {
                movies.map((movie) => 
                <>
                    <p>{movie.title}</p>
                    <img src={movie.posterUrl}/>
                    <p>{movie.rating}</p>
                    <p>{movie.director}</p>
                </>
                   
                )
            }
             {/*Other than using JSX elements we can use an HTML container (In this case div) to wrap the JSX elements to avoid error*/}
            {
                movies.map((movie) =>
                <div>
                     <p>{movie.title}</p>
                    <img src={movie.posterUrl}/>
                    <p>{movie.rating}</p>
                    <p>{movie.director}</p>
                </div>
                   
                )
            }
             {/*Looping through movie array and returning posters in an image tag*/}
             {
               movies.map((movie) => <img src={movie.posterUrl}/>)
             }
          
        </div>
    );
}

export default App;
