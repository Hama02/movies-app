import React from "react";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { AiOutlinePlayCircle } from "react-icons/ai";

const MoviesList = () => {
  const { movies, currentNav } = useContext(MoviesContext);

  return (
    <div className="moviesList">
      <h1>{currentNav}</h1>
      <div className="container">
        {movies?.map((movie) => {
          return (
            <div className="movie" key={movie?.film_id}>
              <div className="movie-cover">
                <img src={movie?.images.poster["1"].medium.film_image} alt="" />
                <div class="overlay">
                  <AiOutlinePlayCircle className="icone" />
                </div>
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
