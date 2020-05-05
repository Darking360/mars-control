import React, { useState } from "react";
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
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  ChartVisualizerContainer,
  ChartSection,
  LoaderSection,
} from "./Layout";
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
      <MenuItem key={name} value={value}>
        {name}
      </MenuItem>
    ));
  };

  return (
    <ChartVisualizerContainer>
      <SolarTitle title={title} respond />
      {custom && custom}
      {options.length > 0 && (
        <section className="selector">
          <Select value={type} onChange={handleVisualizationChange}>
            {renderOptions()}
          </Select>
        </section>
      )}
      {data.length > 0 ? (
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
              <CartesianGrid stroke="#00e676" strokeDasharray="3 3" />
              <XAxis stroke="#00e676" dataKey="Sol" />
              <YAxis stroke="#00e676" domain={["auto", "auto"]} />
              <Tooltip />
              {renderChartData()}
            </AreaChart>
          </ResponsiveContainer>
        </ChartSection>
      ) : (
        <LoaderSection>
          <CircularProgress color="primary" />
        </LoaderSection>
      )}
    </ChartVisualizerContainer>
  );
};

export default SolarChartVisualizer;
