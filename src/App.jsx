import React from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
