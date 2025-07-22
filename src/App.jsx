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
    { id: 3, name: "Emergency Fund", target: 200000, saved: 75000 },
    { id: 4, name: "New Laptop", target: 80000, saved: 30000 },
    { id: 5, name: "Wedding Savings", target: 600000, saved: 200000 },
    { id: 6, name: "Home Renovation", target: 350000, saved: 120000 },
    { id: 7, name: "Start a Business", target: 1000000, saved: 250000 },
    { id: 8, name: "Kid's Education Fund", target: 500000, saved: 100000 },
    { id: 9, name: "World Tour", target: 750000, saved: 200000 },
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
          <main className="flex-1 px-4 md:px-8 min-h-[80vh]">
            <Routes>
              <Route
                path="/"
                element={<Dashboard darkMode={darkMode} goals={goals} />}
              />
              <Route
                path="/goals"
                element={<GoalDetails darkMode={darkMode} goals={goals} setGoals={setGoals} />}
              />
              <Route
                path="/insights"
                element={<Insights darkMode={darkMode} goals={goals} />}
              />
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
