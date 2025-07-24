"use client";
import React from "react";

import createPlotlyComponent from "react-plotly.js/factory";
import PlotlyBasic from "plotly.js-basic-dist";

const Plot = createPlotlyComponent(PlotlyBasic);

// === Dummy shot data ===
const dummyShots = Array.from({ length: 50 }, () => ({
  carry: 250 + (Math.random() - 0.5) * 20, // around 250 yds +/- 10
  offline: (Math.random() - 0.5) * 40, // left/right dispersion +/- 20
}));

export default function ShotDispersionDemo() {
  const x = dummyShots.map((s) => s.carry);
  const y = dummyShots.map((s) => s.offline);

  // Mean & standard deviation for ellipse
  const meanX = avg(x);
  const meanY = avg(y);
  const stdX = stdDev(x);
  const stdY = stdDev(y);

  const ellipse = getEllipsePoints(meanX, meanY, stdX, stdY);

  return (
    <div
      style={{
        border: "1px solid #fff",
        borderRadius: "8px",
        padding: "10px",
        background: "white",
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
              line: {
                width: 1,
                color: "#fff", // border around each marker
              },
              symbol: "circle", // can use "square", "diamond", "x", etc.
            },
          },
          {
            x: ellipse.x,
            y: ellipse.y,
            mode: "lines",
            name: "Dispersion Ellipse",
            line: {
              color: "#35bd23",
              dash: "dashdot",
              width: 3,
            },
            fill: "toself",
            fillcolor: "#35bd230d", // soft transparent fill
          },
        ]}
        layout={{
          font: {
            family: "Roboto, sans-serif",
            color: "#222",
          },
          autosize: true,
          width: 612,
          title: {
            text: "Shot Dispersion",
            font: { family: "Arial Black", size: 20, color: "#333" },
          },
          xaxis: {
            title: { text: "Total (yds)" },
            showgrid: true,
            gridcolor: "#ddd",
            zeroline: false,
            tickfont: { color: "#666" },
          },
          yaxis: {
            title: { text: "" },
            showgrid: true,
            gridcolor: "#eee",
            zeroline: true,
            zerolinecolor: "#ddd",
            tickfont: { color: "#666" },
          },
          margin: { t: 50, r: 15, b: 50, l: 15 },
          legend: {
            orientation: "h",
            y: -0.2,
            font: { size: 12 },
          },
        }}
        config={{
          displayModeBar: false,
          responsive: true,
        }}
      />
    </div>
  );
}

// === Simple helpers ===
function avg(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function stdDev(arr: number[]) {
  const mean = avg(arr);
  const variance = avg(arr.map((val) => (val - mean) ** 2));
  return Math.sqrt(variance);
}

// === Generate ellipse points ===
function getEllipsePoints(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  numPoints = 100
) {
  const theta = Array.from(
    { length: numPoints },
    (_, i) => (i / numPoints) * 2 * Math.PI
  );
  const x = theta.map((t) => cx + rx * Math.cos(t));
  const y = theta.map((t) => cy + ry * Math.sin(t));
  return { x, y };
}
