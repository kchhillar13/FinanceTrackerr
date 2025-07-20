import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Dashboard from "./pages/Dashboard";
import GoalDetails from "./pages/GoalDetails";
import Insights from "./pages/Insights";
import Tips from "./pages/Tips";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [goals, setGoals] = useState([
    { id: 1, name: "Buy a Car", target: 500000, saved: 150000 },
    { id: 2, name: "Vacation in Bali", target: 150000, saved: 50000 },
  ]);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen flex flex-col transition-colors duration-500`}
    >
           
        <BrowserRouter>
        <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />   
          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode} />}/>
            <Route path="/goals" element={<GoalDetails darkMode={darkMode} goals={goals} setGoals={setGoals} />}/>
            <Route path="/insights" element={<Insights darkMode={darkMode} goals={goals} />}/>
            <Route path="/tips" element={<Tips darkMode={darkMode} />}/>
          </Routes>
        </BrowserRouter>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
