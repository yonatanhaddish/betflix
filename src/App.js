import React, { useEffect, useState } from "react";

import MovieList from "./components/MoviesList";


function App() {

  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17"
  
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.results)
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

export default App;
