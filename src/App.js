import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Quotes from "./components/Quotes";
import Home from "./screen/Home";
import Subjects from "./components/Subjects";
export const App = () => {
  return (
    <div >
      <Header />
      <Quotes />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
