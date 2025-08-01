"use client";

import React from "react";
import createPlotlyComponent from "react-plotly.js/factory";
import PlotlyBasic from "plotly.js-basic-dist";
import {
  parseShotValue,
  avg,
  stdDev,
  getEllipsePoints,
} from "@/utils/shotMath";
import { ShotData } from "@/types/shotData";

const Plot = createPlotlyComponent(PlotlyBasic);

type ShotDispersionProps = {
  shots: ShotData[];
  selectedShotIds: string[] | null;
  onSelectShot: (val: string) => void;
};

export default function ShotDispersion({
  shots,
  selectedShotIds,
  onSelectShot,
}: ShotDispersionProps) {
  // Parse carry + offline values into numbers
  const x = shots.map((s) => parseShotValue(s["Carry(yd)"]));
  const y = shots.map((s) => parseShotValue(s["Offline(yd)"]));

  const ids = shots.map((s) => `${s.Club.replace(/\s+/g, "-")}-${s.Index}`);

  const colors = ids.map((id) =>
    selectedShotIds?.includes(id) ? "#ff4444" : "#00d1ff"
  );

  // Hover text for each shot
  const hoverText = shots.map(
    (s) =>
      `Shot #${s.Index}\nClub: ${s.Club}\nCarry: ${s["Carry(yd)"]} yds\nOffline: ${s["Offline(yd)"]} yds`
  );

  // Compute ellipse stats
  const meanX = avg(x);
  const meanY = avg(y);
  const stdX = stdDev(x);
  const stdY = stdDev(y);
  const ellipse = getEllipsePoints(meanX, meanY, stdX, stdY);

  const handleClick = (event: any) => {
    // event.points is an array of clicked points; usually one here
    if (!event.points?.length) return;
    const pointIndex = event.points[0].pointIndex;
    const id = ids[pointIndex];
    onSelectShot(id);
  };

  return (
    <div style={containerStyle}>
      <Plot
        data={[
          getShotsTrace(x, y, hoverText, ids, colors),
          getEllipseTrace(ellipse),
        ]}
        layout={layout}
        config={plotConfig}
        style={{ width: "100%", height: 600 }}
        onClick={handleClick}
      />
    </div>
  );
}

// --- Plot styling/config ---

const containerStyle: React.CSSProperties = {
  border: "1px solid #ededef",
  borderRadius: 8,
  padding: "10px 0",
  background: "white",
  width: "100%",
  maxWidth: 1240,
  margin: "0 auto",
};

const layout: Partial<Plotly.Layout> = {
  font: { family: "Roboto, sans-serif", color: "#222" },
  autosize: true,
  margin: { t: 0, r: 0, b: 50, l: 50 },
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

  legend: { orientation: "h", y: -0.2, font: { size: 12 } },
};

const plotConfig: Partial<Plotly.Config> = {
  displayModeBar: false,
  responsive: true,
};

// --- Helper functions for Plotly traces ---

function getShotsTrace(
  x: number[],
  y: number[],
  hoverText: string[],
  ids: string[],
  colors: string[]
) {
  return {
    x,
    y,
    mode: "markers",
    type: "scatter",
    name: "Shots",
    marker: {
      size: 10,
      color: colors,
      opacity: 0.8,
      line: { width: 1, color: "#fff" },
      symbol: "circle",
    },
    text: hoverText,
    hoverinfo: "text",
    customdata: ids,
  } as Partial<Plotly.PlotData>;
}

function getEllipseTrace(ellipse: { x: number[]; y: number[] }) {
  return {
    x: ellipse.x,
    y: ellipse.y,
    mode: "lines",
    name: "Dispersion Ellipse",
    line: { color: "#35bd23", dash: "dashdot", width: 3 },
    fill: "toself",
    fillcolor: "#35bd230d",
    hoverinfo: "skip",
  } as Partial<Plotly.PlotData>;
}
