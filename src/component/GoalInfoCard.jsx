import React, { useState, useEffect } from "react";

const GoalInfoCard = ({ darkMode }) => {
  const targetAmount = 30000;

  // Load saved amount from localStorage
  const savedAmount = parseInt(localStorage.getItem("currentAmount")) || 18000;
  const [currentAmount, setCurrentAmount] = useState(savedAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [message, setMessage] = useState("");

  const progress = Math.min((currentAmount / targetAmount) * 100, 100);

  // Save to localStorage whenever currentAmount changes
  useEffect(() => {
    localStorage.setItem("currentAmount", currentAmount);
  }, [currentAmount]);

  const handleAddMoney = () => {
    const amountToAdd = customAmount ? parseInt(customAmount) : 1000;

    if (!isNaN(amountToAdd) && amountToAdd > 0) {
      setCurrentAmount((prev) =>
        Math.min(prev + amountToAdd, targetAmount)
      );
      setCustomAmount("");
      if (currentAmount + amountToAdd >= targetAmount) {
        setMessage("🎉 Congratulations! Goal Completed!");
        setTimeout(() => setMessage(""), 3000); // Remove message after 3 sec
      }
    }
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md mb-6 ${
        darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">Vacation Fund</h3>
      <p className="mb-2">
        Target Amount: <span className="font-bold">₹{targetAmount}</span>
      </p>
      <p className="mb-4">
        Current Savings: <span className="font-bold">₹{currentAmount}</span>
      </p>
      <p className="mb-4">
        Deadline: <span className="font-bold">31st December 2025</span>
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-4 mb-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm mb-4">Progress: {progress.toFixed(1)}%</p>

      {/* Custom Amount Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="number"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          placeholder="Enter amount"
          className={`border rounded px-3 py-2 flex-1 ${
            darkMode
              ? "bg-gray-700 border-gray-600 text-white"
              : "bg-white border-gray-300 text-black"
          }`}
        />
        <button
          onClick={handleAddMoney}
          disabled={progress >= 100}
          className={`px-6 py-2 rounded-md font-semibold transition ${
            darkMode
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } ${progress >= 100 ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {progress >= 100 ? "Goal Reached" : "Add Money"}
        </button>
      </div>

      {/* Success Message */}
      {message && (
        <p className="text-green-500 font-semibold animate-bounce">{message}</p>
      )}
    </div>
  );
};

export default GoalInfoCard;
