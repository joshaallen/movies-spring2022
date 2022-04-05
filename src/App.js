import './App.css';
import {movies} from './movies';

const App = () => {
    return (
        <div>
            {/*The following .map is equivalent to the 10 <p> elements below*/}
            {
                movies.map((movie) => <p>{movie.title}</p>)
            }
            {
                movies.map((movie) => <p>{movie.title}</p>)
            }

            <p>{movies[0].title}</p>
            <p>{movies[1].title}</p>
            <p>{movies[2].title}</p>
            <p>{movies[3].title}</p>
            <p>{movies[4].title}</p>
        </div>
    );
}

export default App;
