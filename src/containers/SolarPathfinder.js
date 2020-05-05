import React from "react";
import { Area } from "recharts";
import BaseSolarVisualizer from "../components/BaseSolarVisualizer";
import { CustomMessage } from "../components/Layout";

const SolarPathfinder = ({ day }) => {
  const types = [
    <Area
      type="monotone"
      dataKey="T1 celsius"
      stackId="1"
      stroke="#ff3d00"
      fill="#ff3d00"
      key="t1celsius"
    />,
    <Area
      type="monotone"
      dataKey="T2 celsius"
      stackId="1"
      stroke="#00e5ff"
      fill="#00e5ff"
      key="t2celsius"
    />,
    <Area
      type="monotone"
      dataKey="T3 celsius"
      stackId="1"
      stroke="#64dd17"
      fill="#64dd17"
      key="t3celsius"
    />,
  ];

  const options = [];

  const visualizerProps = {
    adapter: "tsv",
    url: "./data/pathfinder_temperatures.tsv",
    types,
    options,
    day,
  };

  return (
    <BaseSolarVisualizer
      title="Pathfinder Chart Data"
      {...visualizerProps}
      custom={<CustomMessage>Temperatures in celsius</CustomMessage>}
    />
  );
};

export default SolarPathfinder;
