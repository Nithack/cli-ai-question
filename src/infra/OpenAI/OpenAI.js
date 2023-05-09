import OpenAIInterface from './OpenAi.interface.js';
import { OpenAIApi, Configuration } from 'openai';
class OpenAI extends OpenAIInterface {

  constructor() {
    super()
    this.openai = new OpenAIApi(new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    }))
  }
  async getAnswer(question) {

    return await this.openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "user", "content": question },
      ],
    }).then((response) => {
      console.log('then', response)
      return response.data.choices[0].message.content
    }).catch((err) => {
      throw new Error(`[ERROR] ${err.response.data.error.message} [${err.response.status}]`);
    });

  }
}

export default OpenAI;