import http from "http";
// import { MatchFileReader } from "./inheritance/MatchFileReader";
import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchFileReader } from "./composition/MatchFileReader";
import { Summarizer } from "./composition/Summarizer";
import { WinsAnalysis } from "./composition/analyzers/WinsAlanysis";
import { ConsoleReport } from "./composition/reportTargets/PrintConsole";

// with the inheritance approach
// const reader = new MatchFileReader("./data/football.csv");
// reader.read();

// with the composition approach
const reader = MatchFileReader.fromCsv("./data/football.csv");
reader.load();

const summary = Summarizer.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(reader.data);

const server = http.createServer((req, res) => {
  res.end(`server is runing on port 8000...`);
});

server.listen(8000, "127.0.0.1", () =>
  console.log("server is runing on port 8000...")
);
