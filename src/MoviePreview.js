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
            {/*String templating is done by the backtick(`) */}
            {/*You can mix any sort of text and javascript varables with string templating */}
            {/*When you want to reference a variable, use the variable name inside ${variableNameHere} */}
            <p>{`clicked ${clickCount} number of times`}</p>
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