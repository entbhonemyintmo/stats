import fs from "fs";
import { DataReader } from "./interfaces";

export class CsvFileReader implements DataReader {
  raw_data: string[][] = [];

  constructor(public file_path: string) {}

  read(): void {
    this.raw_data = fs
      .readFileSync(this.file_path, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
