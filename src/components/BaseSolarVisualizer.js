import React, { useState, useEffect, useRef } from "react";
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
  const previousDayRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!initialData) {
          let temporalData = await d3[adapter](url);
          setInitialData(temporalData);
          setData(temporalData.slice(heapCount, heapCount + 30));
          setHeap(heapCount + 30);
        }
      } catch (error) {
        alert(
          "Something went wrong reading the data, please reload the app and check again."
        );
      }
    };
    fetchData();
  }, [heapCount, adapter, url, initialData]);

  useEffect(() => {
    if (initialData && previousDayRef.current !== day) {
      if (heapCount <= initialData.length) {
        setData(initialData.slice(heapCount, heapCount + 30));
        setHeap(heapCount + 30);
      }
    }
  }, [day, heapCount, initialData]);

  useEffect(() => {
    previousDayRef.current = day;
  }, [day]);

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
