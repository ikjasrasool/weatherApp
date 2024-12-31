import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./components/weather";

const App = () => {

    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Weather/>} />

                </Routes>
        </Router>
    );
};

export default App;
