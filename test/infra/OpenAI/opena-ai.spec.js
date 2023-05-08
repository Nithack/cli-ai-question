import OpenAI from '../../../src/infra/OpenAI/OpenAI';
describe('OpenAI', () => {
  let openAI;
  beforeEach(() => {
    openAI = new OpenAI('teste');

  });

  test('should return a response question', async () => {
    const answer = 'What this is app use for?'
    const answerResponse = 'This app is used to answer questions about anything.'
    const response = await openAI.getAnswer('question');
    expect(response).toEqual(answerResponse);
  });
});