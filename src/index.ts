import http from "http";
import { MatchResult } from "./MatchResult..enum";
// import { MatchFileReader } from "./inheritance/MatchFileReader";
import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchFileReader } from "./composition/MatchFileReader";

// with the inheritance approach
// const reader = new MatchFileReader("./data/football.csv");
// reader.read();

// with the composition approach
const reader = new MatchFileReader(new CsvFileReader("./data/football.csv"));
reader.load();

let manUWin = 0;
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HOME_WIN) {
    manUWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AWAY_WIN) {
    manUWin++;
  }
}

console.log(`Man U win matches ${manUWin}.`);

const server = http.createServer((req, res) => {
  res.end(`Man U win matches ${manUWin}.`);
});

server.listen(8000, "127.0.0.1", () =>
  console.log("server is runing on port 8000...")
);
