"use client";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { avg, stdDev, getEllipsePoints } from "@/utils/shotMath";
import { ShotData } from "@/types/shotData";
interface Props {
  shots: ShotData[];
  isDarkMode?: boolean;
}
export default function ShotGraph({ shots, isDarkMode }: Props) {
  function parseShotValue(val: string | undefined) {
    if (!val) return NaN;
    val = val.trim();
    let multiplier = 1;
    if (val.startsWith("L")) multiplier = -1;
    const numeric = val.replace(/[^\d.-]/g, "");
    return parseFloat(numeric) * multiplier;
  }
  const validShots = shots
    .map((s) => ({
      x: parseShotValue(s["Carry(yd)"]),
      y: parseShotValue(s["Offline(yd)"]),
    }))
    .filter((pt) => !isNaN(pt.x) && !isNaN(pt.y));
  const meanX = avg(validShots.map((pt) => pt.x));
  const meanY = avg(validShots.map((pt) => pt.y));
  const stdX = stdDev(validShots.map((pt) => pt.x));
  const stdY = stdDev(validShots.map((pt) => pt.y));
  const ellipse = getEllipsePoints(meanX, meanY, stdX, stdY);
  const ellipsePoints = ellipse.x.map((val, i) => [val, ellipse.y[i]]);
  const offlineValues = validShots.map((pt) => pt.y);
  const minOffline = Math.min(...offlineValues);
  const maxOffline = Math.max(...offlineValues);
  const options: Highcharts.Options = {
    chart: { type: "scatter", backgroundColor: isDarkMode ? "#181818" : "#ffffff" },
    title: { text: "" },
    xAxis: {
      title: { text: "" },
      gridLineWidth: 0,
      gridLineColor: "#ddd",
      labels: { style: { color: "gray", fontSize: "12px", fontWeight: "600" } },
    },
    yAxis: {
      title: { text: "" },
      min: minOffline,
      max: maxOffline,
      tickInterval: 10,
      reversed: true,
      gridLineWidth: 1,
      gridLineColor: "#ddd",
      labels: { style: { color: "gray", fontSize: "12px", fontWeight: "600" } },
      plotLines: [{ color: "#888", width: 1, value: 0, zIndex: 5 }],
    },
    plotOptions: {
      scatter: { marker: { radius: 6, symbol: "circle" } },
      line: { marker: { enabled: false }, enableMouseTracking: false },
    },
    series: [
      { type: "scatter", name: "Shots", data: validShots, color: "#2ABB7F" },
      {
        type: "line",
        name: "Dispersion Ellipse",
        data: ellipsePoints,
        color: "gray",
        dashStyle: "Dash",
        marker: { enabled: false },
        enableMouseTracking: false,
      },
    ],
    legend: { enabled: false },
  };
  return (
    <div style={{ width: "100%", maxWidth: 1240 }}>
      {" "}
      <HighchartsReact highcharts={Highcharts} options={options} />{" "}
    </div>
  );
}
