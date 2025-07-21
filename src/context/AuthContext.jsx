/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  const login = (username) => {
    localStorage.setItem("currentUser", username);
    setCurrentUser(username);
  };

  const signup = (username) => {
    localStorage.setItem("currentUser", username);
    setCurrentUser(username);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
