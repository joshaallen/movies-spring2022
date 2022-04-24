const MoviePreview = (props) => {
//props is an object
//const props = {
//    moviesToPrieview: movie
//  setCurrentMovie: a function
//}

//this is using destructing to access the moviesToPreview props
const {movieToPreview, setCurrentMovie} = props;
//below this is the long way to destructure the above line
//const moviesToPreview = props.moviesToPreview;
//w.o. the arrow function () => bc we are passing a parameter 
// the app would reload for each movie arrow functions behaves
// like a anonymous function that wraps our named function so //it doesn't get called on run time
//reactEvents are written in camelCase
    return (
        <>
            <p>{movieToPreview.title}</p>
            <img src={movieToPreview.posterUrl} alt={movieToPreview.title} 
            onClick={() => setCurrentMovie(movieToPreview)}
            />
        </>
        
    )
}

export default MoviePreview;