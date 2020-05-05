import React from "react";
import { Area } from "recharts";
import BaseSolarVisualizer from "../components/BaseSolarVisualizer";

const SolarPathfinder = ({ day }) => {
  const types = {
    "1": [
      <Area
        type="monotone"
        dataKey="wind_m_sec"
        stackId="1"
        stroke="#ff3d00"
        fill="#ff3d00"
      />,
      <Area
        type="monotone"
        dataKey="wind_deg."
        stackId="1"
        stroke="#00e5ff"
        fill="#00e5ff"
      />,
    ],
    "2": [
      <Area
        type="monotone"
        dataKey="pressure_mb"
        stackId="1"
        stroke="#64dd17"
        fill="#64dd17"
      />,
      <Area
        type="monotone"
        dataKey="temp_F"
        stackId="1"
        stroke="#00e5ff"
        fill="#00e5ff"
      />,
      <Area
        type="monotone"
        dataKey="temp_C"
        stackId="1"
        stroke="#ff3d00"
        fill="#ff3d00"
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
    day,
  };

  return <BaseSolarVisualizer title="Viking Chart Data" {...visualizerProps} />;
};

export default SolarPathfinder;
