import React from "react";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

const MoviesList = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div className="moviesList">
      <h1>New Releases</h1>
      <div className="container">
        {movies?.map((movie) => {
          return (
            <div className="movie" key={movie?.film_id}>
              <div className="img">
                <img src={movie?.images.poster["1"].medium.film_image} alt="" />
              </div>
              <div className="info">
                <h3>{movie?.film_name}</h3>
                <p>{movie?.release_dates["0"].release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
