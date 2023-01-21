import React from "react";
import { MdOutlineNetworkCell } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <MdOutlineNetworkCell />
        <span>MEDIA APP</span>
      </div>
      <div className="nav">
        <div className="item">
          <h3>New Releases</h3>
        </div>
        <div className="item">
          <h3>Trending</h3>
        </div>
        <div className="item">
          <h3>Coming Soon</h3>
        </div>
        <div className="item">
          <h3>Favourites</h3>
        </div>
        <div className="item">
          <h3>Watch Later</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
