import React from "react";

import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  return (
    <Line
      options={{
        responsive: true,
        title: { text: "Line Chart", display: true },
        maintainAspectRatio: false,
      }}
      data={data}
    />
  );
};

export default LineChart;
