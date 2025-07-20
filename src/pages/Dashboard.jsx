import React from "react";
import StatsCard from "../component/StatsCard";
import GoalCard from "../component/GoalCard";
import ProgressOverview from "../component/ProgressOverview";

const Dashboard = ({ darkMode }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Your Financial Dashboard</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard title="Total Savings" value="₹50,000" darkMode={darkMode} />
        <StatsCard title="Active Goals" value="3" darkMode={darkMode} />
        <StatsCard title="Completed Goals" value="1" darkMode={darkMode} />
      </div>

      {/* Progress Section */}
      <ProgressOverview darkMode={darkMode} />

      {/* Goals Section */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Your Goals</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GoalCard goal="Vacation Fund" amount="30,000" progress={60} darkMode={darkMode} />
        <GoalCard goal="New Laptop" amount="80,000" progress={40} darkMode={darkMode} />
        <GoalCard goal="Emergency Fund" amount="1,00,000" progress={25} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Dashboard;
