## CLI-AI-QUESTION

cli-ai-question - Um CLI em Node.js para obter respostas do ChatGPT usando a biblioteca da OpenAI.

## Descrição

Este projeto é um CLI em Node.js que se integra com a API do ChatGPT da OpenAI para fornecer respostas baseadas em perguntas. O usuário pode fazer uma pergunta no prompt de comando e o CLI irá gerar uma resposta usando o ChatGPT. O CLI usa a biblioteca oficial da OpenAI para se comunicar com a API do ChatGPT. Quando o usuário faz uma pergunta, o CLI usa a entrada do usuário como a sequência de texto para gerar a resposta do ChatGPT. A resposta do ChatGPT é impressa no console.

Este projeto é o início de um projeto maior que será convertido em TypeScript no futuro. Ele é projetado para fornecer uma base sólida para a integração com a API do ChatGPT, que pode ser facilmente expandida e modificada para atender às necessidades do projeto.

## Dependências

- Node.js
- `yargs`
- `@openai/api`

## Como Usar

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Crie uma conta gratuita na OpenAI e gere uma chave de API
4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da OpenAI como uma variável de ambiente: `OPENAI_API_KEY=your_api_key_here`
5. Execute o CLI com `node index.js`

## Comandos e Opções

### `ask`

Permite que o usuário faça uma pergunta e receba uma resposta do ChatGPT.

#### Opções

- `-l, --length <value>`: o comprimento máximo da resposta (padrão: 100)
- `-m, --model <value>`: o modelo do ChatGPT a ser usado (padrão: "davinci")

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.