import { MatchData } from "./MatchFileReader";
import { WinsAnalysis } from "./analyzers/WinsAlanysis";
import { Analyzer, OutputTarget } from "./interfaces";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { ConsoleReport } from "./reportTargets/PrintConsole";

export class Summarizer {
  constructor(
    public readonly analyzer: Analyzer,
    public readonly reporter: OutputTarget
  ) {}

  static winsAnalysisWithHtmlReport(team: string): Summarizer {
    return new Summarizer(new WinsAnalysis(team), new HtmlReport());
  }

  static winsAnalysisWithPrintConsole(team: string): Summarizer {
    return new Summarizer(new WinsAnalysis(team), new ConsoleReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.reporter.print(output);
  }
}
