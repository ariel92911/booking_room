import React, { useState } from "react";
import "./App.scss";

export default function App() {
  const [name, setName] = useState("React");

  return <h1> Hello, {name} !</h1>;
}
