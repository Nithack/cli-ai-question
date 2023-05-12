export class Question {
  constructor(question, user) {
    this.question = question;
    this.user = user;
  }
  getQuestion() {
    return this.question;
  }
  getUser() {
    return this.user;
  }
}