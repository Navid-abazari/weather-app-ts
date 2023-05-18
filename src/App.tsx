import "./App.css";
import { useState } from "react";
import Weather from "./pages/Weather";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Weather />
      <Footer />
    </>
  );
}

export default App;
