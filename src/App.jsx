import React from "react";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";
import "./App.css";

export default function App() {
  return (
    <div className="app-root">
      <div className="left-half" />
      <div className="right-half">
        <div className="card tab-container">
          <Tabs />
        </div>
        <div className="between-divider" />
        <div className="card gallery-container">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
