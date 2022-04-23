const MoviePreview = (props) => {
//props is an object
//const props = {
//    moviesToPrieview: movie
//}

//this is using destructing to access the moviesToPreview props
const {movieToPreview} = props;
//below this is the long way to destructure the above line
//const moviesToPreview = props.moviesToPreview;
    return (
        <>
            <p>{movieToPreview.title}</p>
            <img src={movieToPreview.posterUrl} alt={movieToPreview.title} />
        </>
        
    )
}

export default MoviePreview;