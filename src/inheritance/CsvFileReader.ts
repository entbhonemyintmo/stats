import fs from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public file_path: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.file_path, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
