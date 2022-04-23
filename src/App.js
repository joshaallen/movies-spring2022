import './App.css';
import MoviePreview from './MoviePreview';
import {movies} from './movies';
import {useContext, useReducer, useState} from "react";

const App = () => {

    return (
        <div>
            {/*Added alt atribute to satisfy React warnings*/}
           {
            movies.map((movie) =>
            <>
                <p>{movie.title}</p>
                <img src={movie.posterUrl} alt={movie.title}/>
            </>
            )
           }
        </div>
    );
}

export default App;
