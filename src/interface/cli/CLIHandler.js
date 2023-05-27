class CLIHandler {
  commands = {};
  on(command, callBack) {
    this.commands[command] = callBack;
  }
  async type(command, params) {
    if(this.commands[command] === undefined) throw new Error('Command not found');
    return await this.commands[command](params);
  }
  write(result) {
    console.log(result)
  }
}

export default CLIHandler;
