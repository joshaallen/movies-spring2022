import './App.css';
import MoviePreview from './MoviePreview';
import {movies} from './movies';
import {useContext, useReducer, useState} from "react";

const App = () => {

    return (
        <div>
            {/*Comparing arrow function with old function*/}
           {
            movies.map((movie) =>
            <>
                <p>{movie.title}</p>
                <img src={movie.posterUrl}/>
            </>
            )
           }
            {/*Implementing 'old way of writng function' in the map function*/}
            {
            movies.map(function(movie) {
                return (
                    <>
                        <p>{movie.title}</p>
                        <img src={movie.posterUrl}/>
                    </>
                )
            })
           }
        </div>
    );
}

export default App;
