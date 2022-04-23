import {movies} from './movies';
import MoviePreview from "./MoviePreview";

const App = () => {

    return (
        <div>
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
