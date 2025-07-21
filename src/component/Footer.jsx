import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`text-center py-4 mt-10 absolute bottom-0 w-full ${
        darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-600"
      }`}
    >
      <p>© {new Date().getFullYear()} GoalTracker. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
