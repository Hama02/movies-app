import React from "react";
import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";

const MoviesList = () => {
  const { movies, currentNav, favouriteHandler } = useContext(MoviesContext);
  return (
    <div className="moviesList">
      <h1>{currentNav}</h1>
      <div className="container">
        {movies?.map((movie) => {
          return (
            <div className="movie" key={movie?.id}>
              <div className="movie-cover">
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt=""
                />
                <BsHeart
                  className="fav"
                  onClick={(e) => favouriteHandler(movie.id, e)}
                />
                <div class="overlay">
                  <AiOutlinePlayCircle className="icone" />
                </div>
              </div>
              <div className="info">
                <h3>{movie?.original_title}</h3>
                <p>{movie?.release_date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
