import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import http from "http";

const reader = new CsvFileReader("./data/football.csv");
reader.read();

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
  res.end("hi there!, you are reaching out to the http server...");
});

server.listen(8000, "127.0.0.1", () =>
  console.log("server is runing on port 8000...")
);
