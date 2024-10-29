// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";

// Components
import Header from "./components/header";
import "./App.css";

// Register the service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((registration) => {
                console.log("Service Worker registered:", registration);
            })
            .catch((error) => {
                console.error("Service Worker registration failed:", error);
            });
    });
}

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
