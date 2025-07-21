import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({ darkMode, setDarkMode }) => {
  const { currentUser, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`flex justify-between items-center px-6 py-4 shadow-md relative ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Logo */}
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        💰 Goal Tracker
      </h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 text-lg font-semibold">
        <button onClick={() => navigate("/")} className="hover:text-blue-500">
          Dashboard
        </button>
        <button onClick={() => navigate("/goals")} className="hover:text-green-500">
          Goals
        </button>
        <button onClick={() => navigate("/insights")} className="hover:text-purple-500">
          Insights
        </button>
        <button onClick={() => navigate("/tips")} className="hover:text-orange-500">
          Tips
        </button>
      </nav>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-md font-semibold ${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {darkMode ? "Dark" : "Light"}
        </button>

        {currentUser ? (
          <>
            <span className="text-sm">{currentUser}</span>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Sign Up
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`absolute top-16 left-0 w-full flex flex-col space-y-4 px-6 py-4 md:hidden ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          <button onClick={() => {navigate("/"); toggleMenu();}}>Dashboard</button>
          <button onClick={() => {navigate("/goals"); toggleMenu();}}>Goals</button>
          <button onClick={() => {navigate("/insights"); toggleMenu();}}>Insights</button>
          <button onClick={() => {navigate("/tips"); toggleMenu();}}>Tips</button>

          <div className="flex flex-col space-y-2 mt-4">
            <button
              onClick={() => {setDarkMode(!darkMode); toggleMenu();}}
              className={`px-4 py-2 rounded-md ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? "Dark" : "Light"}
            </button>
            {currentUser ? (
              <>
                <span className="text-sm">{currentUser}</span>
                <button
                  onClick={() => {logout(); toggleMenu();}}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {navigate("/login"); toggleMenu();}}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Login
                </button>
                <button
                  onClick={() => {navigate("/signup"); toggleMenu();}}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
