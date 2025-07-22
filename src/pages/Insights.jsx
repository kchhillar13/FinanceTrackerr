import React from "react";

const Insights = ({ darkMode, goals }) => {
  const totalSavings = goals.reduce((acc, goal) => acc + goal.saved, 0);
  const totalTarget = goals.reduce((acc, goal) => acc + goal.target, 0);
  const completionRate = totalTarget > 0 ? ((totalSavings / totalTarget) * 100).toFixed(1) : 0;

  const topGoals = [...goals].sort((a, b) => b.saved / b.target - a.saved / a.target).slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Insights</h1>

      {/* Overall Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h2 className="text-xl font-semibold mb-2">Total Savings</h2>
          <p className="text-2xl font-bold">₹{totalSavings.toLocaleString()}</p>
        </div>
        <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h2 className="text-xl font-semibold mb-2">Total Target</h2>
          <p className="text-2xl font-bold">₹{totalTarget.toLocaleString()}</p>
        </div>
        <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h2 className="text-xl font-semibold mb-2">Completion Rate</h2>
          <p className="text-2xl font-bold">{completionRate}%</p>
        </div>
      </div>

      {/* Top Goals */}
      <h2 className="text-2xl font-semibold mb-4">Top Performing Goals</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {topGoals.map((goal) => (
          <div
            key={goal.id}
            className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}
          >
            <h3 className="text-lg font-bold mb-2">{goal.name}</h3>
            <p className="text-gray-500">Target: ₹{goal.target}</p>
            <p className="text-gray-500">Saved: ₹{goal.saved}</p>
            <div className="w-full bg-gray-300 h-2 rounded mt-2">
              <div
                className="h-2 bg-green-500 rounded"
                style={{ width: `${(goal.saved / goal.target) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1">{((goal.saved / goal.target) * 100).toFixed(1)}% Complete</p>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-xl font-semibold mb-4">Tips to Boost Savings</h2>
        <ul className="list-disc pl-6">
          <li>Set realistic goals and break them into smaller milestones.</li>
          <li>Automate your savings every month.</li>
          <li>Cut unnecessary expenses and track your spending habits.</li>
          <li>Review progress regularly to stay motivated.</li>
        </ul>
      </div>
    </div>
  );
};

export default Insights;
