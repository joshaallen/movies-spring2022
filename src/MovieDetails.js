const MovieDetails = (props) => {
    //Js logic here

    const {currentMovie} = props;
    //equivalent to const currentMovie = props.currentMovie;
    return (
        <>
            {/*Ternary operators are fancy bu simplifies if/else statements*/}
            {/*check if currentMovie exists*/}
            {/*if it does, show the <div> block */}
            {/*if it does not, show the <p>  */}
            {
                 currentMovie ?
                 <div>
                     <p>{JSON.stringify(currentMovie)}</p>
                     <p>{currentMovie.title}</p>
                     <p>{currentMovie.description}</p>
                     <p>{currentMovie.rating}</p>
                     <p>{currentMovie.director}</p>
                     <p>{currentMovie.releaseYear}</p>
                
                 </div>
                 :
                 <p>No movie selected</p>
            }
        
        </>


    )

}

export default MovieDetails;