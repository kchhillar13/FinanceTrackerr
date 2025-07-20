import React from "react";

const TipsCard = ({ darkMode }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h4 className="text-lg font-semibold mb-4">Tips to Reach Your Goal</h4>
      <ul className="list-disc pl-6 space-y-2">
        <li>Save ₹1,000 per week to stay on track.</li>
        <li>Reduce non-essential expenses for the next 3 months.</li>
        <li>Consider setting up an auto-debit to your savings account.</li>
      </ul>
    </div>
  );
};

export default TipsCard;
