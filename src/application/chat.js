
import ChatInterface from '../domain/ports/chat.interface.js'
import { Answer } from '../domain/model/answer.js'
export default class Chat extends ChatInterface {
  constructor(openAI) {
    super()
    this.openAI = openAI
  }
  async getAnswer(question) {
    const answer = await this.openAI.getAnswer(question.getQuestion())
    if (answer === undefined) throw new Error('Answer is undefined')
    return new Answer(answer, question)
  }
}
