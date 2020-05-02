import React, { useEffect, useState } from "react";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { ComponentContainer, ChartSection } from "./Layout";

const SolarChartVisualizer = ({ types, options, data }) => {
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
    <ComponentContainer>
      {options.length > 0 && (
        <section>
          <Select value={type} onChange={handleVisualizationChange}>
            {renderOptions()}
          </Select>
        </section>
      )}
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

export default SolarChartVisualizer;
