import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Document from "./pages/documents/Document";
// import Home from "./pages/home/Home"



function App() {
  return (
    <div className="App">    
      <Routes>
        <Route element={<Document />} path="/document" />
      </Routes>
    </div>
  );
}

export default App;
