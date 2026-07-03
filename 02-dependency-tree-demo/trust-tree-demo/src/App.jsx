import React from "react";
import { createRoot } from "react-dom/client";
import { Button } from "antd";

function App() {
  return (
    <main style={{ padding: 32, fontFamily: "system-ui" }}>
      <h1>Trust Tree Demo</h1>
      <p>This tiny app brings a much bigger dependency tree.</p>
      <Button type="primary">A UI package entered the chat</Button>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
