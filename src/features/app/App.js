import React, { useState } from "react";
import "./App.scss";
import RoomAllocation from "../roomAllocation/RoomAllocation";

export default function App() {
  return <RoomAllocation onChange={(result) => console.log(result)} />;
}
