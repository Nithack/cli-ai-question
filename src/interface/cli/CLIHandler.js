class CLIHandler {
  commands = {};
  on(command, callBack) {
    this.commands[command] = callBack;
  }
  async type(command, params) {
    if(this.commands[command] === undefined) return;
    return await this.commands[command](params);
  }
  write(result) {
    console.log(result)
  }
}

export default CLIHandler;
