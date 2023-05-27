import OpenAIRepository from '../../../src/infra/chat-generator/open-ai/open-ai.repository'
import { describe, expect, jest } from '@jest/globals'


describe('OpenAI', () => {
  let openAI
  beforeEach(() => {
    process.env.OPENAI_API_KEY = '123456789'
    openAI = new OpenAIRepository();
    jest.clearAllMocks()
  })

  test('should exception because api key is undefined', async () => {
    delete process.env.OPENAI_API_KEY
    expect(() => new OpenAIRepository()).toThrowError(
      "OPENAI_API_KEY is undefined"
    );
  })

  test('should be return status 401 because api key is not undefined', async () => {
    const defaultErrorAPIKEY = `Incorrect API key provided: undefined. You can find your API key at https://platform.openai.com/account/api-keys.`
    jest.spyOn(openAI.openai, 'createChatCompletion').mockRejectedValueOnce({
      response: {
        data: {
          error: {
            message: defaultErrorAPIKEY
          }
        },
        status: 401
      }
    })
    const answer = 'What this is app use for?'
    expect(openAI.getAnswer(answer)).rejects.toThrowError(`[ERROR] ${defaultErrorAPIKEY} [401]`)
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
    const answer = 'What this is app use for?'
    expect(await openAI.getAnswer(answer)).toEqual('This is a test')
  })
})
