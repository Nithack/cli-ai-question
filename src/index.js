import dotenv from 'dotenv';
import ChatGPT from './application/chat-GPT.js';
import OpenAI from './infra/OpenAI/OpenAI.js'
import { Question } from './application/model/question.js'
dotenv.config();

const openai = new OpenAI();
const chatgpt = new ChatGPT(openai)
const question = new Question('Olá', 'cli')

chatgpt.getAnswer(question).then((response) => {
  console.log(response);
})
