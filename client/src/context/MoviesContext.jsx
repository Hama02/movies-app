/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [currentNav, setCurrentNav] = useState("New Releases");
  const [movies, setMovies] = useState([]);
  const [navigations, setNavigations] = useState([
    {
      id: 1,
      name: "New Releases",
      selected: true,
    },
    {
      id: 2,
      name: "Trending",
      selected: false,
    },
    {
      id: 3,
      name: "Coming Soon",
      selected: false,
    },
    {
      id: 4,
      name: "Favourites",
      selected: false,
    },
  ]);
  const api_key = "a094d080c8ff75f93f7676656c5c6031";

  const favouriteHandler = (id, e) => {
    e.target.style.color = e.target.style.color === "" ? "#ff4350" : "";
    const item = movies.filter((mov) => mov.id === id)[0];
    if (favourites.includes(item)) {
      setFavourites(favourites.filter((i) => i !== item));
    } else {
      setFavourites([...favourites, item]);
    }
  };

  const menuHandler = (e) => {
    setCurrentNav(e.target.textContent);
    setNavigations(
      navigations.map((nav) => {
        if (nav.name === e.target.textContent) nav.selected = true;
        else nav.selected = false;
        return nav;
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search}&page=1&include_adult=false`
        );
        const data = res.data.results.slice(0, 5);
        setSearchList(data);
      } catch (err) {
        console.log(err);
      }
    };
    if (search === "") setSearchList([]);
    else fetchData();
  }, [search]);

  useEffect(() => {
    if (currentNav === "Favourites") setMovies(favourites);
  }, [currentNav, favourites]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if (currentNav === "Trending")
          url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
        else if (currentNav === "New Releases")
          url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
        else if (currentNav === "Coming Soon")
          url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
        const res = await axios.get(url);
        const data = res.data.results.slice(0, 10);
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentNav]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        navigations,
        setNavigations,
        setMovies,
        menuHandler,
        currentNav,
        setSearch,
        searchList,
        favouriteHandler,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
