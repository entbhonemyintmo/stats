import fs from "fs";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult];
export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filePath: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filePath, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
        ];
      });
  }
}
