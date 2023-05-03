import "./App.css";
import { useState } from "react";
import Weather from "./pages/Weather";
import Header from "./common/header/Header";

function App() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <Header />
      <div>
        <button onClick={() => setShow(!show)}>toggle app</button>
        {show && <Weather />}
      </div>
    </>
  );
}

export default App;
