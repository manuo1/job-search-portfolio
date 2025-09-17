import React from "react";
import { Routes, Route } from "react-router-dom";
import Experiences from "../pages/Experiences/Experiences";
import NotFound from "../pages/NotFound/NotFound";
import Cv from "../pages/Cv/Cv";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Cv />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/cv" element={<Cv />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
