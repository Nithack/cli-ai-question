// #!/usr/bin/env node


// require('dotenv').config();
// const program = require('commander');
// const package = require('./../package.json');
// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });


// const openai = new OpenAIApi(configuration);

// program.version(package.version);



// async function ask(question) {
//   const basicQuestion = [
//     { "role": "user", "content": question },
//   ]
//   await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: basicQuestion,
//   }).then((response) => {
//     console.log(response.data.choices[0].message.content)
//     return JSON.stringify(response.data.choices[0].message.content);
//   }).catch((err) => {
//     console.log(err.response);
//   });
// }

// program
//   .command('ask [pergunta]')
//   .description('Faz uma pergunta')
//   .action(ask);


// program.parse(process.argv);