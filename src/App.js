import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
