import React from "react";

const StatsCard = ({ title, value, darkMode }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md text-center ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p
        className={`text-2xl font-bold ${
          darkMode ? "text-yellow-300" : "text-blue-600"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default StatsCard;
