import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { VscDebugBreakpointData } from "react-icons/vsc";
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
                <div className="item" key={item?.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                    alt=""
                  />
                  <div className="info">
                    <h4>{item?.original_title}</h4>
                    <div className="details">
                      <h3>{item?.release_date}</h3>
                      <VscDebugBreakpointData />
                      <p>{item?.vote_average}</p>
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
