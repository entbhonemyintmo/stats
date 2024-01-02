import { MatchData } from "./MatchFileReader";
import { Analyzer, OutputTarget } from "./interfaces";

export class Summarizer {
  constructor(
    public readonly analyzer: Analyzer,
    public readonly reporter: OutputTarget
  ) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.reporter.print(output);
  }
}
