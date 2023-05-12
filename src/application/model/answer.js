export class Answer {
  constructor(answer, question) {
    this.answer = answer;
    this.question = question
  }
  getAnswer() {
    return this.answer;
  }
  getQuestion() {
    return this.question.getAnswer();
  }
}