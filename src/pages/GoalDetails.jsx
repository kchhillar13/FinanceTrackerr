import React, { useState } from "react";

const GoalDetails = ({ darkMode, goals, setGoals }) => {
  const [newGoal, setNewGoal] = useState({ name: "", target: "" });
  const [showForm, setShowForm] = useState(false);

  const [editGoalId, setEditGoalId] = useState(null);
  const [editGoalData, setEditGoalData] = useState({ name: "", target: "" });

  // Add new goal
  const addGoal = () => {
    if (newGoal.name && newGoal.target) {
      setGoals([
        ...goals,
        { id: Date.now(), name: newGoal.name, target: Number(newGoal.target), saved: 0 },
      ]);
      setNewGoal({ name: "", target: "" });
      setShowForm(false);
    }
  };

  // Delete goal
  const deleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // Add money to a goal
  const addMoney = (id) => {
    const amount = prompt("Enter amount to add:");
    if (amount && !isNaN(amount)) {
      setGoals(
        goals.map((goal) =>
          goal.id === id ? { ...goal, saved: goal.saved + Number(amount) } : goal
        )
      );
    }
  };

  // Edit goal
  const startEditGoal = (goal) => {
    setEditGoalId(goal.id);
    setEditGoalData({ name: goal.name, target: goal.target });
  };

  const saveEditedGoal = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, name: editGoalData.name, target: Number(editGoalData.target) } : goal
      )
    );
    setEditGoalId(null);
    setEditGoalData({ name: "", target: "" });
  };

  const getProgress = (saved, target) => ((saved / target) * 100).toFixed(1);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Goal Details</h1>

      {/* Add Goal Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className={`px-4 py-2 rounded-md font-semibold ${
            darkMode
              ? "bg-blue-700 text-white hover:bg-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {showForm ? "Cancel" : "Add New Goal"}
        </button>
      </div>

      {/* Add Goal Form */}
      {showForm && (
        <div className={`p-4 mb-6 rounded-lg shadow-md max-w-md mx-auto ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <input
            type="text"
            placeholder="Goal Name"
            value={newGoal.name}
            onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
            className={`w-full p-2 mb-3 rounded border ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
          />
          <input
            type="number"
            placeholder="Target Amount"
            value={newGoal.target}
            onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
            className={`w-full p-2 mb-3 rounded border ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
          />
          <button
            onClick={addGoal}
            className={`w-full px-4 py-2 rounded-md font-semibold ${
              darkMode
                ? "bg-green-700 text-white hover:bg-green-600"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Add Goal
          </button>
        </div>
      )}

      {/* Goals List */}
      <div className="grid md:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <div key={goal.id} className={`p-6 rounded-lg shadow-md flex flex-col ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            {editGoalId === goal.id ? (
              <>
                <input
                  type="text"
                  value={editGoalData.name}
                  onChange={(e) => setEditGoalData({ ...editGoalData, name: e.target.value })}
                  className={`w-full p-2 mb-3 rounded border ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
                />
                <input
                  type="number"
                  value={editGoalData.target}
                  onChange={(e) => setEditGoalData({ ...editGoalData, target: e.target.value })}
                  className={`w-full p-2 mb-3 rounded border ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100"}`}
                />
                <button
                  onClick={() => saveEditedGoal(goal.id)}
                  className={`w-full px-4 py-2 rounded-md font-semibold mb-2 ${
                    darkMode
                      ? "bg-green-700 text-white hover:bg-green-600"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-2">{goal.name}</h2>
                <p className="text-gray-500">Target: ₹{goal.target}</p>
                <p className="text-gray-500">Saved: ₹{goal.saved}</p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-300 h-2 rounded mt-2">
                  <div
                    className="h-2 bg-blue-500 rounded"
                    style={{ width: `${getProgress(goal.saved, goal.target)}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1">
                  Progress: {getProgress(goal.saved, goal.target)}%
                </p>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => addMoney(goal.id)}
                    className={`px-3 py-2 rounded-md font-semibold ${
                      darkMode
                        ? "bg-blue-700 text-white hover:bg-blue-600"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Add Money
                  </button>
                  <button
                    onClick={() => startEditGoal(goal)}
                    className={`px-3 py-2 rounded-md font-semibold ${
                      darkMode
                        ? "bg-yellow-600 text-white hover:bg-yellow-500"
                        : "bg-yellow-500 text-white hover:bg-yellow-600"
                    }`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteGoal(goal.id)}
                    className={`px-3 py-2 rounded-md font-semibold ${
                      darkMode
                        ? "bg-red-700 text-white hover:bg-red-600"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalDetails;
