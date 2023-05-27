export default class CliInterface {
    async getAnswer(question) {
        throw new Error('getAnswer must be implemented')
    }
}