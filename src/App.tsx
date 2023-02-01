import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>Video-chat</div>
      <div>
        <Routes>
          <Route path="/" element />
        </Routes>
      </div>
    </div>
  );
}

export default App;
