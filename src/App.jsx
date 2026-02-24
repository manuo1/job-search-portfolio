import React from "react";
import Router from "./router/Router";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Router />
      </main>
    </>
  );
}

export default App;
