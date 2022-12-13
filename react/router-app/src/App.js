import React, { useState } from "react";
import Home from './views/Home';
import About from './views/About';
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import counterContext from "./contexts/counterContext";

const App = () => {
    const [counter, setCounter] = useState(0);
    return (
        <counterContext.Provider value={{ counter, setCounter }}>
            <BrowserRouter>
                <div className="h-screen">
                    <Header />
                    <div className="min-h-[92%] h-[92%] overflow-y-scroll bg-indigo-200">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<div>404 Not Found</div>} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </counterContext.Provider >
    )
}

export default App;
