import program from "commander";
import {Question} from "./../../domain/model/question.js";
export default class CLIController {
  constructor(cliHandler, chatGenerate) {
    this.cliHandler = cliHandler;
    this.cliHandler.on("ask", async (ask) => {
      const answer = await chatGenerate.getAnswer(new Question(ask, "cli"));
      this.cliHandler.write(answer.getAnswer());
    });
    this.start();
  }
  async start() {
    program
      .command("ask [question]")
      .description("Ask a question")
      .action(async (question) => {
        await this.cliHandler.type("ask", question);
      });
    program.parse(process.argv);
  }
}
