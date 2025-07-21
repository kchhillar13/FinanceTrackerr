import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = ({ darkMode, setDarkMode }) => {

  const navigate = useNavigate()

  return (
    <header
      className={`flex justify-between items-center px-6 py-4 shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Logo */}
      <h1
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        💰 Financial Tracker
      </h1>
      <nav className="flex space-x-6 text-lg font-semibold">
        <button
          onClick={() => navigate("/")}
          className="hover:text-blue-500 transition-colors"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/goals")}
          className="hover:text-green-500 transition-colors"
        >
          Goals
        </button>
        <button
          onClick={() => navigate("/insights")}
          className="hover:text-purple-500 transition-colors"
        >
          Insights
        </button>
        <button
          onClick={() => navigate("/tips")}
          className="hover:text-orange-500 transition-colors"
        >
          Tips
        </button>
      </nav>

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
    </header>
  );
};

export default Navbar;
