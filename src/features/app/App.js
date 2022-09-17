import React, { useState } from "react";
import "./App.scss";
import CustomInputNumber from "../customInputNumber/CustomInputNumber";

export default function App() {
  return (
    <CustomInputNumber
      min={0}
      max={20}
      step={1}
      name={"customNum"}
      value={1}
      disabled={false}
    />
  );
}
