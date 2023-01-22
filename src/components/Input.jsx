import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { MoviesContext } from "../context/MoviesContext";
import UserImg from "../img/user.jpg";

const Input = () => {
  const { setSearch, searchList } = useContext(MoviesContext);
  return (
    <div className="search">
      <form>
        <BsSearch />
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Movies"
        />
        {searchList.length > 0 && (
          <div className="results">
            {searchList.map((item) => {
              return (
                <div className="item" key={item.film_id}>
                  <img src={item.images.poster["1"].medium.film_image} alt="" />
                  <div className="info">
                    <h4>{item.film_name}</h4>
                    <div className="details">
                      <h3>{item.release_dates["0"].release_date}</h3>
                      <p>Test Category</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <h3>Show More</h3>
          </div>
        )}
      </form>
      <div className="user">
        <h3>Tom Cruise</h3>
        <img src={UserImg} alt="" />
      </div>
    </div>
  );
};

export default Input;
