export default class CLIController {
    constructor(cliHandler, chatGenerate){
        this.cliHandler = cliHandler
        this.cliHandler.on('ask', async (ask)=>{
            const answer = await chatGenerate.getAnswer(ask)
            this.cliHandler.write(answer);
        })
    }
}