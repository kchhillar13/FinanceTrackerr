import React from "react";

const Tips = ({ darkMode }) => {
  const tips = [
    {
      title: "Automate Savings",
      description:
        "Set up automatic transfers to your savings account to ensure you save consistently without thinking about it.",
    },
    {
      title: "Track Expenses",
      description:
        "Monitor your daily spending to identify areas where you can cut costs and allocate more toward your goals.",
    },
    {
      title: "Set Milestones",
      description:
        "Break your goals into smaller milestones to stay motivated and track your progress effectively.",
    },
    {
      title: "Avoid Impulse Purchases",
      description:
        "Give yourself a 24-hour rule before making any big purchase decisions to prevent unnecessary spending.",
    },
    {
      title: "Increase Income",
      description:
        "Look for side hustles or freelance opportunities to boost your savings and reach goals faster.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Tips & Insights
      </h1>
      <p className="text-center mb-8 text-lg">
        Simple strategies to help you achieve your financial goals faster.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{tip.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
