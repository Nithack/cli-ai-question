import dotenv from 'dotenv';
dotenv.config();

import OpenAI from './infra/OpenAI/OpenAI.js'

const openai = new OpenAI();
openai.getAnswer('Olá').then((response) => {
  console.log(response);
})
