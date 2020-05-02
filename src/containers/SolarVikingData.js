import React, { useEffect, useState } from "react";
import * as d3 from "d3-fetch";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { ComponentContainer, ChartSection } from "../components/Layout";

const SolarVikingData = () => {
  const [initialData, setInitialData] = useState(null);
  const [data, setData] = useState([]);
  const [heapCount, setHeap] = useState(0);
  const [type, setType] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!initialData) {
          let temporalData = await d3.csv("./data/viking_lander_data.csv");
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

  const handleVisualizationChange = ({ target: { value } }) => {
    setType(value);
  };

  const renderChartData = () => {
    if (type === 1) {
      return [
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
      ];
    }
    return [
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
    ];
  };

  return (
    <ComponentContainer>
      <section>
        <Select value={type} onChange={handleVisualizationChange}>
          <MenuItem value={1}>Wind</MenuItem>
          <MenuItem value={2}>Pressure and Temperature</MenuItem>
        </Select>
      </section>
      <ChartSection>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Sol" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          {renderChartData()}
        </AreaChart>
      </ChartSection>
    </ComponentContainer>
  );
};

export default SolarVikingData;
