import React from "react";

const ProgressOverview = ({ darkMode }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h4 className="text-lg font-semibold mb-4">Overall Progress</h4>
      <div className="h-4 bg-gray-300 rounded-full">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: "65%" }}
        ></div>
      </div>
      <p className="text-sm mt-2">65% towards all goals</p>
    </div>
  );
};

export default ProgressOverview;
