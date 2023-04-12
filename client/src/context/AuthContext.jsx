import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    console.log(inputs);
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };
  const logout = async () => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
