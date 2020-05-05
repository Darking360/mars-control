import React, { useState, useEffect } from "react";
import * as d3 from "d3-fetch";
import SolarChartVisualizer from "./SolarChartVisualizer";

const SolarPathFinderTemperatures = ({
  adapter,
  url,
  types,
  options,
  title,
  custom,
  day,
}) => {
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
        alert(
          "Something went wrong reading the data, please reload the app and check again."
        );
      }
    };
    fetchData();
  }, [initialData, heapCount, adapter, url]);

  useEffect(() => {
    if (initialData) {
      if (heapCount <= initialData.length) {
        setData(initialData.slice(heapCount, heapCount + 100));
        setHeap(heapCount + 100);
      }
    }
  }, [day, heapCount, initialData]);

  const chartProps = {
    data,
    types,
    options,
    title,
    custom,
  };

  return <SolarChartVisualizer {...chartProps} />;
};

export default SolarPathFinderTemperatures;
