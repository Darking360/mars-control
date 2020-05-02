import React from "react";
import { Area } from "recharts";
import BaseSolarVisualizer from "./BaseSolarVisualizer";

const SolarPathfinder = () => {
  const types = [
    <Area
      type="monotone"
      dataKey="T1 celsius"
      stackId="1"
      stroke="#8884d8"
      fill="#8884d8"
    />,
    <Area
      type="monotone"
      dataKey="T2 celsius"
      stackId="1"
      stroke="#82ca9d"
      fill="#82ca9d"
    />,
    <Area
      type="monotone"
      dataKey="T3 celsius"
      stackId="1"
      stroke="#ffc658"
      fill="#ffc658"
    />,
  ];

  const options = [];

  const visualizerProps = {
    adapter: "tsv",
    url: "./data/pathfinder_temperatures.tsv",
    types,
    options,
  };

  return <BaseSolarVisualizer {...visualizerProps} />;
};

export default SolarPathfinder;
