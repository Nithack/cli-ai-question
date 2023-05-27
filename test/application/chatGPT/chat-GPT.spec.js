
import { describe, expect, jest } from '@jest/globals'
import Chat from '../../../src/application/chat'
import { Question } from '../../../src/domain/model/question'
import OpenAIRepository from '../../../src/infra/chat-generator/open-ai/open-ai.repository'

describe('OpenAI', () => {
  let openAI
  let chat
  beforeEach(() => {
    process.env.OPENAI_API_KEY = '123456789'
    openAI = new OpenAIRepository()
    chat = new Chat(openAI)
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
    const result = await chat.getAnswer(question)
    expect(result).toEqual({ answer: "This is a test", question: { question: "Olá", user: "cli" } })
    expect(result.getAnswer()).toEqual('This is a test')
    expect(result.getQuestion()).toEqual('Olá')
  })

  test('should exception because openai return is undefined', async () => {
    jest.spyOn(openAI, 'getAnswer').mockResolvedValue(undefined)
    const question = new Question('Olá', 'cli')
    expect(chat.getAnswer(question)).rejects.toThrowError('Answer is undefined')
  })
})
