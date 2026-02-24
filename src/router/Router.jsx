import React from "react";
import { Routes, Route } from "react-router-dom";
import Experiences from "../pages/Experiences/Experiences";
import Cv from "../pages/Cv/Cv";

function Router() {
  return (
    <Routes>
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="*" element={<Experiences />} />
    </Routes>
  );
}

export default Router;
