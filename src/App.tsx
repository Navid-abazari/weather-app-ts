import "./css/style.css";
import { useState } from "react";
import Weather from "./pages/Weather";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

function App() {
  return (
    <div id="root-container">
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
