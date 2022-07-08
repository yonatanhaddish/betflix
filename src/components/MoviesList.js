import React from "react";

const MovieList = (props) => {

    return(
        <>
        <div>
         {props.movies.map((movie, index) => <div>
            {/* <img src=  {movie.poster_path} alt="movie" /> */}
            <img src= {`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="movie" />
    
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