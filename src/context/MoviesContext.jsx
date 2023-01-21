import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

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
          "https://api-gate2.movieglu.com/filmsNowShowing/?n=8",
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
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  );
};
