import dotenv from 'dotenv';
import CLIController from './interface/cli/CLIController.js';
import Chat from './application/chat.js';
import CLIHandler from './interface/cli/ClIHandler.js';
import OpenAIRepository from './infra/chat-generator/open-ai/openAI.repository.js/index.js';
dotenv.config();




const cliHandlerCommander = new CLIHandler();
const openAIRepository = new OpenAIRepository();
const chatGenerate = new Chat(openAIRepository);
const cliController = new CLIController(cliHandlerCommander, chatGenerate);
