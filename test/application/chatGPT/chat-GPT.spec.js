import OpenAI from './../../../src/infra/OpenAI/OpenAI'
import { describe, expect, jest } from '@jest/globals'
import ChatGPT from './../../../src/application/chat-GPT'
import { Question } from '../../../src/application/model/question'

describe('OpenAI', () => {
  let openAI
  let chatgpt
  beforeEach(() => {
    process.env.OPENAI_API_KEY = '123456789'
    openAI = new OpenAI()
    chatgpt = new ChatGPT(openAI)
    jest.clearAllMocks()
  })

  test('should be return response', async () => {
    jest.spyOn(openAI.openai, 'createChatCompletion').mockResolvedValue({
      data: {
        choices: [{
          message: {
            content: 'This is a test'
          }
        }]
      }
    })
    const question = new Question('Olá', 'cli')
    const result = await chatgpt.getAnswer(question)
    expect(result).toEqual({ answer: "This is a test", question: { question: "Olá", user: "cli" } })
    expect(result.getAnswer()).toEqual('This is a test')
    expect(result.getQuestion()).toEqual('Olá')
  })

  test('should exception because openai return is undefined', async () => {
    jest.spyOn(openAI, 'getAnswer').mockResolvedValue(undefined)
    const question = new Question('Olá', 'cli')
    expect(chatgpt.getAnswer(question)).rejects.toThrowError('Answer is undefined')
  })
})
