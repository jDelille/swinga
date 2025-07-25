"use client";

import React from "react";
import createPlotlyComponent from "react-plotly.js/factory";
import PlotlyBasic from "plotly.js-basic-dist";

const Plot = createPlotlyComponent(PlotlyBasic);

type ShotData = {
  "Carry(yd)": string;
  "Offline(yd)": string;
  Club: string;
  Index: string | number;
};

type ShotDispersionProps = {
  shots: ShotData[];
};

export default function ShotDispersion({ shots }: ShotDispersionProps) {
  // Parse shot strings to numeric values with sign
  const parseShotValue = (val: string) => {
    if (!val) return 0;
    const v = val.trim();
    if (v.startsWith("L")) return -parseFloat(v.slice(1));
    if (v.startsWith("R")) return parseFloat(v.slice(1));
    return parseFloat(v);
  };

  const x = shots.map((s) => parseShotValue(s["Carry(yd)"]));
  const y = shots.map((s) => parseShotValue(s["Offline(yd)"]));

  // Add hover text with index and club
  const hoverText = shots.map(
    (s) => `Shot #${s.Index} - Club: ${s.Club}\nCarry: ${s["Carry(yd)"]} yds\nOffline: ${s["Offline(yd)"]} yds`
  );

  // Mean & standard deviation for ellipse
  const meanX = avg(x);
  const meanY = avg(y);
  const stdX = stdDev(x);
  const stdY = stdDev(y);

  const ellipse = getEllipsePoints(meanX, meanY, stdX, stdY);

  return (
    <div
      style={{
        border: "1px solid #ededef",
        borderRadius: 8,
        padding: "10px 0",
        background: "white",
        width: "100%", // full width of parent container
        maxWidth: 1240,
        margin: "0 auto",
      }}
    >
      <Plot
        data={[
          {
            x,
            y,
            mode: "markers",
            type: "scatter",
            name: "Shots",
            marker: {
              size: 10,
              color: "#00d1ff",
              opacity: 0.8,
              line: { width: 1, color: "#fff" },
              symbol: "circle",
            },
            text: hoverText,
            hoverinfo: "text",
          },
          {
            x: ellipse.x,
            y: ellipse.y,
            mode: "lines",
            name: "Dispersion Ellipse",
            line: { color: "#35bd23", dash: "dashdot", width: 3 },
            fill: "toself",
            fillcolor: "#35bd230d",
            hoverinfo: "skip",
          },
        ]}
        layout={{
          font: { family: "Roboto, sans-serif", color: "#222" },
          autosize: true,
          title: {
            text: "",
            font: { family: "Arial Black", size: 20, color: "#333" },
          },
          xaxis: {
            title: { text: "Carry Distance (yds)" },
            showgrid: true,
            gridcolor: "#ddd",
            zeroline: false,
            tickfont: { color: "#666" },
          },
          yaxis: {
            title: { text: "Offline (yds)" },
            showgrid: true,
            gridcolor: "#eee",
            zeroline: true,
            zerolinecolor: "#ddd",
            tickfont: { color: "#666" },
          },
          margin: { t: 0, r: 0, b: 50, l: 50 },
          legend: { orientation: "h", y: -0.2, font: { size: 12 } },
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: "100%", height: 600 }}
      />
    </div>
  );
}

// === Helpers ===
function avg(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function stdDev(arr: number[]) {
  const mean = avg(arr);
  const variance = avg(arr.map((val) => (val - mean) ** 2));
  return Math.sqrt(variance);
}

function getEllipsePoints(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  numPoints = 100
) {
  const theta = Array.from({ length: numPoints }, (_, i) => (i / numPoints) * 2 * Math.PI);
  const x = theta.map((t) => cx + rx * Math.cos(t));
  const y = theta.map((t) => cy + ry * Math.sin(t));
  return { x, y };
}