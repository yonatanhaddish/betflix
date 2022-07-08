import React from "react";

const MovieList = (props) => {

    return(
        <>
        <div>
        <p>Test</p>
         {props.movies.map((movie, index) => <div>
            {/* <img src=  {movie.poster_path} alt="movie" /> */}
            <img src= {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" />
    
            <p>{movie.title}</p>
         </div>)}
         <div>
            <img src={props.img}/>
         </div>
        </div>
         
        </>
    )
};

export default MovieList;