import React from "react";

const GoalCard = ({ goal, amount, progress, darkMode }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h4 className="font-semibold mb-2">{goal}</h4>
      <p className="text-sm mb-2">Target: ₹{amount}</p>
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs mt-2">{progress}% completed</p>
    </div>
  );
};

export default GoalCard;
