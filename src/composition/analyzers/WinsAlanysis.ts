import { MatchResult } from "../../MatchResult.enum";
import { MatchData } from "../MatchFileReader";
import { Analyzer } from "../interfaces";

export class WinsAnalysis implements Analyzer {
  wins = 0;
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HOME_WIN) {
        this.wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AWAY_WIN) {
        this.wins++;
      }
    }

    return `Team ${this.team} won ${this.wins} games`;
  }
}
