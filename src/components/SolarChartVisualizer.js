import React, { useEffect, useState } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { ChartVisualizerContainer, ChartSection } from "./Layout";
import SolarTitle from "./SolarTitle";

const SolarChartVisualizer = ({ types, options, data, title, custom }) => {
  const [type, setType] = useState(1);

  const handleVisualizationChange = ({ target: { value } }) => {
    setType(value);
  };

  const renderChartData = () => {
    if (Array.isArray(types)) return types;
    return types[type];
  };

  const renderOptions = () => {
    return options.map(({ value, name }) => (
      <MenuItem value={value}>{name}</MenuItem>
    ));
  };

  return (
    <ChartVisualizerContainer>
      <SolarTitle title={title} />
      {custom && custom}
      {options.length > 0 && (
        <section className="selector">
          <Select value={type} onChange={handleVisualizationChange}>
            {renderOptions()}
          </Select>
        </section>
      )}
      <ChartSection>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis stroke="#00e676" dataKey="Sol" />
            <YAxis stroke="#00e676" domain={["auto", "auto"]} />
            <Tooltip />
            {renderChartData()}
          </AreaChart>
        </ResponsiveContainer>
      </ChartSection>
    </ChartVisualizerContainer>
  );
};

export default SolarChartVisualizer;
