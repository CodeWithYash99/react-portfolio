import React from "react";

import SideBar from "./components/SideBar";
import BodyContainer from "./components/BodyContainer";

import "./App.css";

const App = () => {
  return <div className="App-container flex flex-row">
    <SideBar />
    <BodyContainer />
  </div>;
};

export default App;
