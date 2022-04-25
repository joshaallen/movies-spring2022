import { useState } from "react";


const MoviePreview = (props) => {

const {movieToPreview, setCurrentMovie} = props;

const [clickCount, setClickCount] = useState(0);

const updateMovieSelection = () => {
    setCurrentMovie(movieToPreview);
    setClickCount(clickCount + 1);
}

    return (
        <div>
            <p>{movieToPreview.title}</p>
            <p>{clickCount}</p>
            <img src={movieToPreview.posterUrl} alt={movieToPreview.title} 
            onClick={updateMovieSelection}
            />
             {/* 
                inline version of updateMovieSelection
                onClick={() => {
                    setCurrentMovie(movieToPreview);
                    setClickCount(clickCount + 1);
                }}
            */}
        </div>
        
    )
}

export default MoviePreview;