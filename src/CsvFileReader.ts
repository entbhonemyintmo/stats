import fs from "fs";

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filePath: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filePath, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
