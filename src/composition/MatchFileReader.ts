import { MatchResult } from "../MatchResult.enum";
import { dateStringToDate } from "../utils";
import { CsvFileReader } from "./CsvFileReader";
import { DataReader } from "./interfaces";

export type MatchData = [Date, string, string, number, number, MatchResult];

export class MatchFileReader {
  data: MatchData[] = [];

  constructor(public readonly reader: DataReader) {}

  static fromCsv(filename: string): MatchFileReader {
    return new MatchFileReader(new CsvFileReader(filename));
  }

  load() {
    this.reader.read();
    this.data = this.reader.raw_data.map((row: string[]): MatchData => {
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
