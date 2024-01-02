import fs from "fs";
import { OutputTarget } from "../interfaces";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync("./data/report.html", html);
  }
}
