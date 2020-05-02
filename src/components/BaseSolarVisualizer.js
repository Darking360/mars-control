import React, { useState, useEffect } from "react";
import * as d3 from "d3-fetch";
import SolarChartVisualizer from "./SolarChartVisualizer";

const SolarPathFinderTemperatures = ({ adapter, url, types, options }) => {
  const [initialData, setInitialData] = useState(null);
  const [data, setData] = useState([]);
  const [heapCount, setHeap] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!initialData) {
          let temporalData = await d3[adapter](url);
          setInitialData(temporalData);
          setData(temporalData.slice(heapCount, heapCount + 100));
          setHeap(heapCount + 100);
        }
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let interval;
    if (initialData) {
      interval = setInterval(() => {
        if (heapCount <= initialData.length) {
          setData(initialData.slice(heapCount, heapCount + 100));
          setHeap(heapCount + 100);
        }
      }, 600000);
    }
    return () => clearInterval(interval);
  });

  const chartProps = {
    data,
    types,
    options,
  };

  return <SolarChartVisualizer {...chartProps} />;
};

export default SolarPathFinderTemperatures;
