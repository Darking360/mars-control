import React from "react";
import { Area } from "recharts";
import BaseSolarVisualizer from "./BaseSolarVisualizer";

const SolarPathfinder = () => {
  const types = {
    "1": [
      <Area
        type="monotone"
        dataKey="wind_m_sec"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />,
      <Area
        type="monotone"
        dataKey="wind_deg."
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />,
    ],
    "2": [
      <Area
        type="monotone"
        dataKey="pressure_mb"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />,
      <Area
        type="monotone"
        dataKey="temp_F"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />,
      <Area
        type="monotone"
        dataKey="temp_C"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />,
    ],
  };

  const options = [
    { value: "1", name: "Wind" },
    { value: "2", name: "Pressure and Temperature" },
  ];

  const visualizerProps = {
    adapter: "csv",
    url: "./data/viking_lander_data.csv",
    types,
    options,
  };

  return <BaseSolarVisualizer {...visualizerProps} />;
};

export default SolarPathfinder;
