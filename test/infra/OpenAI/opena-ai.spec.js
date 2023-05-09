import OpenAI from '../../../src/infra/OpenAI/OpenAI'
import { describe, expect, jest } from '@jest/globals'

// mock OPENAI MODULE
describe('OpenAI', () => {
  let openAI
  beforeEach(() => {
    openAI = new OpenAI()
    jest.clearAllMocks()
  })

  test('should openai return status 401 because api key is not undefined', async () => {
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
  test('should openai return response', async () => {
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
