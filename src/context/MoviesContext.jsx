import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
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
    {
      id: 5,
      name: "Watch Later",
      selected: false,
    },
  ]);

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

  const headers = {
    client: "MOVI_159",
    "x-api-key": "urPd5tamU92qdna7MN6me9sjsyBItXke34zeZ52b",
    Authorization: "Basic TU9WSV8xNTk6Rmk3WXV0VTVaek9o",
    territory: "US",
    "api-version": "v200",
    geolocation: "40.7579;-73.9878",
    "device-datetime": "2023-01-20T23:16:48.864Z",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
          {
            headers,
          }
        );
        setMovies(res.data.films);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        navigations,
        setNavigations,
        setMovies,
        menuHandler,
        currentNav,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
