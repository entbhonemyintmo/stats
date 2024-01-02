import { MatchData } from "./MatchFileReader";

export interface DataReader {
  raw_data: string[][];
  read(): void;
}

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}
