export default class ChatGenerateInterface {
  async getAnswer(question) {
    throw new Error('getAnswer must be implemented')
  }
}