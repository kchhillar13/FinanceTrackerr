import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Dashboard from "./pages/Dashboard";
import GoalDetails from "./pages/GoalDetails";
import Insights from "./pages/Insights";
import Tips from "./pages/Tips";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [goals, setGoals] = useState([
    { id: 1, name: "Buy a Car", target: 500000, saved: 150000 },
    { id: 2, name: "Vacation in Bali", target: 150000, saved: 50000 },
  ]);

  return (
    <AuthProvider>
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        } min-h-screen flex flex-col transition-colors duration-500`}
      >
        <BrowserRouter>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-1 px-4 md:px-8 h-[80vw]">
            <Routes>
              <Route path="/" element={<Dashboard darkMode={darkMode} goals={goals} />} />
              <Route path="/goals" element={<GoalDetails darkMode={darkMode} goals={goals} setGoals={setGoals} />} />
              <Route path="/insights" element={<Insights darkMode={darkMode} goals={goals} />} />
              <Route path="/tips" element={<Tips darkMode={darkMode} />} />
              <Route path="/login" element={<Login darkMode={darkMode} />} />
              <Route path="/signup" element={<Signup darkMode={darkMode} />} />
            </Routes>
          </main>
          <Footer darkMode={darkMode} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
