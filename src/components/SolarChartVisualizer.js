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
import * as d3 from "d3-fetch";

const SolarChartVisualizer = ({
  types,
  options,
  data,
  title,
  custom,
  file = false,
}) => {
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

  window.localStorageSet = function (key, value) {
    if (value.toJS) value = value.toJS();
    if (global.localStorage) {
      global.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async function (e) {
      const tsv_url = e.target.result;
      try {
        const data = await d3.tsv("tsv_url");
        const newFileEntry = {
          fileName: file.name,
          size: file.size,
          dateUploaded: Date.now(),
          url: tsv_url,
        };
        window.localStorageSet("fileHistory", [
          // ...existingHistory,
          newFileEntry,
        ]);
      } catch (error) {
        console.log(error);
        alert("D3 could not parse the file as TSV, is this a valid TSV file?");
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <ChartVisualizerContainer>
      <SolarTitle title={title} respond />
      {custom && custom}
      {(options.length > 0 || file) && (
        <section className="selector">
          <Select value={type} onChange={handleVisualizationChange}>
            {renderOptions()}
          </Select>
          {file && (
            <input
              type="file"
              onChange={handleUpload}
              accept="text/tab-separated-values"
            />
          )}
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
