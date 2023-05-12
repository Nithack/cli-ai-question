
import ChatGPTInterface from './chat-GPT.interface'
import { Answer } from './model/answer'
class ChatGPT extends ChatGPTInterface {
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

export default ChatGPT