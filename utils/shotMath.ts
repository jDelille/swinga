export function parseShotValue(val: string): number {
  if (!val) return 0;
  const v = val.trim();
  if (v.startsWith("L")) return -parseFloat(v.slice(1));
  if (v.startsWith("R")) return parseFloat(v.slice(1));
  return parseFloat(v);
}

export function avg(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function stdDev(arr: number[]): number {
  const mean = avg(arr);
  const variance = avg(arr.map((val) => (val - mean) ** 2));
  return Math.sqrt(variance);
}

export function getEllipsePoints(
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