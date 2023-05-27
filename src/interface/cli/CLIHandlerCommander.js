import program from "commander";
import CLIHandler from "./ClIHandler";


export default class CLIHandlerCommander extends CLIHandler {
  constructor() {
    super();
    program.command('ask [question]').description('Ask a question').action(async (question) => {
        await this.type('ask', question);
    });
    program.parse(process.argv);
  }
}

