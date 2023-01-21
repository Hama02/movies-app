import React, { useContext } from "react";
import { MdOutlineNetworkCell } from "react-icons/md";
import { MoviesContext } from "../context/MoviesContext";

const SideBar = () => {
  const { navigations, menuHandler } = useContext(MoviesContext);

  return (
    <div className="sidebar">
      <div className="logo">
        <MdOutlineNetworkCell />
        <span>MEDIA APP</span>
      </div>
      <div className="nav">
        {navigations?.map((nav) => {
          return (
            <div
              className={nav?.selected ? "item selected" : "item"}
              key={nav?.id}
              onClick={menuHandler}
            >
              <h3>{nav?.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
