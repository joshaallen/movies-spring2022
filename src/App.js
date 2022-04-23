import './App.css';
import MoviePreview from './MoviePreview';
import {movies} from './movies';
import {useContext, useReducer, useState} from "react";

const App = () => {

//you can do js here
console.log('hello');

/*
function useState(startingState) {
    //some login goes here
    return value [variable, setVariableFunction];
}
*/

const [currentMovie, setCurrentMovie] = useState(null);
//this line is the same as the next two
//const currentMovie = useState(null)[0]
//const setCurrentMovie = useState(null)[1]

console.log(currentMovie);
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
