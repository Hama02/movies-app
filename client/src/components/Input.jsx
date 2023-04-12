/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { MoviesContext } from "../context/MoviesContext";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Input = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { setSearch, searchList } = useContext(MoviesContext);
  const { logout } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
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
      {currentUser ? (
        <div className="user">
          <h3>{currentUser.username}</h3>
          <img src={currentUser.img} alt="" />
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login" className="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Input;
