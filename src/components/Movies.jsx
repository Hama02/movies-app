import React from "react";
import Input from "./Input";
import MoviesList from "./MoviesList";

const Movies = () => {
  return (
    <div className="movies">
      <div className="container">
        <Input />
        <MoviesList />
      </div>
    </div>
  );
};

export default Movies;
