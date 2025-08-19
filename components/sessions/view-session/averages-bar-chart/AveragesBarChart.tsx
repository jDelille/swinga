"use client";

import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styles from "./AveragesBarChart.module.scss";
import { useTheme } from "next-themes";

const sessionData = [
  { club: "Driver", avgDistance: 230, avgOffline: 12 },
  { club: "3-Wood", avgDistance: 210, avgOffline: 15 },
  { club: "5-Iron", avgDistance: 160, avgOffline: 10 },
  { club: "PW", avgDistance: 120, avgOffline: 8 },
];

type MetricKey = "avgDistance" | "avgOffline";


const AveragesBarChart: React.FC= () => {
  const [metric, setMetric] = useState<MetricKey>("avgDistance");
      const {  resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  const options = {
    chart: {
      type: "column",
      backgroundColor: isDarkMode ? "#181818" : "#ffffff"

    },
    title: {
      text: "",
    },
    xAxis: {
      categories: sessionData.map((data) => data.club),
      title: { text: "" },
      labels: {
        style: {
          color: "gray",
          fontWeight: "500",
          fontSize: "12px",
        },
      },
    },
    yAxis: [
      {
        min: 0,
        title: { text: "" },
        labels: {
          style: {
            color: "gray", 
            fontSize: "12px",
            fontWeight: "500",
          },
        },
      },
      {
        min: 0,
        opposite: true,
        title: { text: "" },
        labels: {
          style: {
            color: "gray", 
            fontSize: "12px",
            fontWeight: "500",
          },
        },
      },
    ],
    series: [
      {
        name: metric === "avgDistance" ? "Average Distance" : "Average Offline",
        data: sessionData.map((data) => data[metric]),
        color: "#2ABB7F",
        borderRadius: 12, 
        borderColor: "#2ABB7F", 
        borderWidth: 1,
        tooltip: {
          valueSuffix: " yds",
        },
      },
    ],
  };

  return (
    <div className={styles.barChartContainer}>
      <div className={styles.chart}>
        <div className={styles.header}>
          <p className={styles.title}>Distance Averages</p>
          <div className={styles.controls}>
            <button onClick={() => setMetric("avgDistance")}>Distance</button>
            <button onClick={() => setMetric("avgOffline")}>Offline</button>
          </div>
        </div>

        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <div className={styles.filters}>
        <div className={styles.header}>
          <p>Filters</p>
        </div>
        <ul className={styles.filtersList}>
          <li>Filter 1</li>
          <li>Filter 2</li>
          <li>Filter 3</li>
        </ul>
      </div>
    </div>
  );
};

export default AveragesBarChart;
