import './App.css';
import MoviePreview from './MoviePreview';
import {movies} from './movies';


const App = () => {

    return (
        <div className="movie-container">
           {
            movies.map((movie) =>
            <>
               <MoviePreview
                movieToPreview={movie}
               />
            </>
            )
           }
        </div>
    );
}

export default App;
