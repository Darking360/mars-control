import React, { useEffect, useState } from "react";
import { Area } from "recharts";
import BaseSolarVisualizer from "../components/BaseSolarVisualizer";
import { CustomMessage } from "../components/Layout";

window.localStorageGet = function (key, default_value) {
  if (global.localStorage) {
    return (
      JSON.parse(global.localStorage.getItem(key)) || default_value || null
    );
  }
  return default_value;
};

const SolarPathfinder = ({ day }) => {
  const [options, setOptions] = useState([]);

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

  // const options = []; // Should be localStorage items

  useEffect(() => {
    const fileHistory = window.localStorageGet("fileHistory", []);
    // fileHistory = [{
    //   fileName: file.name,
    //   size: file.size,
    //   dateUploaded: Date.now(),
    //   url: tsv_url,
    // }, ...]
    setOptions(
      fileHistory.map(({ fileName, dateUploaded, url, size }, index) => {
        const isoDate = new Date(dateUploaded).toISOString();
        const kbSize = Math.round(size / 1024);
        return {
          value: index,
          name: `${fileName} - ${isoDate} - ${kbSize}kb`,
          url,
        };
      })
    );
  }, []);

  const visualizerProps = {
    adapter: "tsv",
    url: "./data/pathfinder_temperatures.tsv", // TODO where the data is being read from
    types,
    options,
    day,
    file: true,
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
