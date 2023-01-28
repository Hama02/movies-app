import React from "react";
import SideBar from "../components/SideBar";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <div className="app">
      <div className="container">
        <SideBar />
        <Movies />
      </div>
    </div>
  );
};

export default Home;
