import './App.css';
import MoviePreview from './MoviePreview';
import {movies} from './movies';
import {useContext, useReducer, useState} from "react";

const App = () => {

    return (
        <div>
            {/*The following is looping over movie array and returning movie titles then looping over movie array and returning movie posters in the img tag*/}
            {
                movies.map((movie) => <p>{movie.title}</p>)
            }
            
             {
               movies.map((movie) => <img src={movie.posterUrl}/>)
             }
          
        </div>
    );
}

export default App;
