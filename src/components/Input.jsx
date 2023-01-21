import React from "react";
import { BsSearch } from "react-icons/bs";
import UserImg from "../img/user.jpg";

const Input = () => {
  return (
    <div className="search">
      <form>
        <BsSearch />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Movies"
        />
      </form>
      <div className="user">
        <h3>Tom Cruise</h3>
        <img src={UserImg} alt="" />
      </div>
    </div>
  );
};

export default Input;
