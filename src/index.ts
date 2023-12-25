import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("./data/football.csv");
reader.read();

enum MatchResult {
  HOME_WIN = "H",
  AWAY_WIN = "A",
  DRAW = "D",
}

let manUWin = 0;
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HOME_WIN) {
    manUWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AWAY_WIN) {
    manUWin++;
  }
}

console.log(`Man U win matches ${manUWin}.`);
