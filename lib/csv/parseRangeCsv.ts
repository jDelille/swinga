import Papa from "papaparse";
import { ShotData } from "@/types/shotData";

export function parseRangeCsv(file: File): Promise<ShotData[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<ShotData>(file, {
      header: true,
      skipEmptyLines: true,
      beforeFirstChunk: (chunk) => {
        const lines = chunk.split(/\r\n|\n|\r/);
        const actualDataLines = lines.slice(2); // skip extra header lines
        console.log(lines.splice(2))
        return actualDataLines.join("\n");
      },
      complete: (results) => resolve(results.data),
      error: reject,
    });
  });
}