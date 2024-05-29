import React, { useState } from "react";
import "./App.css";
import Componente6 from "./components/Componente6.jsx";
import Componente9 from "./components/Componente9.jsx";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Componente6 />
      <Componente9 />
    </>
  );
}

export default App;
