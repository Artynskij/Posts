import React from "react";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/about";
import Posts from "./pages/post";

import "./styles.css";

function App() {
  return (
   <div>
     <Posts/>
   </div>
  );
}

export default App;
