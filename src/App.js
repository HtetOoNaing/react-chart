import React, { useState } from "react";
import "./App.css";
import LineChart from "./chart_sample/LineChart";

function App() {
  const [lineChartData] = useState({
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "Videos Mades",
        backgroundColor: "rgba(255,0,255,0.75)",
        data: [4, 5, 1, 10, 32, 2, 12],
      },
      {
        label: "Subscriptions",
        backgroundColor: "rgba(0,255,0,0.75)",
        data: [14, 15, 21, 0, 12, 24, 32],
      },
      {
        label: "Downloads",
        backgroundColor: "rgba(0,0,255,0.75)",
        data: [21, 10, 28, 12, 10, 14, 2],
      },
    ],
  });
  return (
    <div className="App">
      <div style={{ position: "relative", width: "500px", height: "400px" }}>
        <LineChart data={lineChartData} />
      </div>
    </div>
  );
}

export default App;
