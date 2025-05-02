import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
