import React from "react";
import StatsCard from "../component/StatsCard";
import GoalCard from "../component/GoalCard";
import ProgressOverview from "../component/ProgressOverview";

const Dashboard = ({ darkMode, goals }) => {
  const totalSavings = goals.reduce((acc, goal) => acc + goal.saved, 0);
  const completedGoals = goals.filter((goal) => goal.saved >= goal.target).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Financial Dashboard</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Savings" value={`₹${totalSavings.toLocaleString()}`} darkMode={darkMode} />
        <StatsCard title="Active Goals" value={goals.length} darkMode={darkMode} />
        <StatsCard title="Completed Goals" value={completedGoals} darkMode={darkMode} />
      </div>

      {/* Progress Section */}
      <ProgressOverview darkMode={darkMode} />

      {/* Goals Section */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Your Goals</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <GoalCard
            key={goal.id}
            goal={goal.name}
            amount={`${goal.target.toLocaleString()}`}
            progress={((goal.saved / goal.target) * 100).toFixed(1)}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
