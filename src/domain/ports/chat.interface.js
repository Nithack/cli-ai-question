class ChatInterface {
  constructor() {
    if (this.constructor === ChatInterface) {
      throw new Error('Abstract classes can\'t be instantiated.');
    }
  }
  async getAnswer(question) {
    throw new Error('Method \'getAnswer\' must be implemented.');
  }
}

export default ChatInterface;