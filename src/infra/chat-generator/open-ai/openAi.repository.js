import { OpenAIApi, Configuration } from 'openai';
import ChatGenerateInterface from '../../../domain/ports/chatGenerate.interface.js';

class OpenAIRepository extends ChatGenerateInterface {
  constructor() {
    super();
    if (process.env.OPENAI_API_KEY === undefined)
      throw new Error("OPENAI_API_KEY is undefined");
    this.openai = new OpenAIApi(
      new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      })
    );
  }
  async getAnswer(question) {
    return await this.openai
      .createChatCompletion(this.generateChatCompletionBody(question))
      .then((response) => {
        return response.data.choices[0].message.content;
      })
      .catch((err) => {
        throw new Error(
          `[ERROR] ${err.response.data.error.message} [${err.response.status}]`
        );
      });
  }

  generateChatCompletionBody(question) {
    return {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    };
  }
}

export default OpenAIRepository;