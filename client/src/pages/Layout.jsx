import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "./Home";


export default function Layout() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
