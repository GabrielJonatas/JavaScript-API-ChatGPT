import { config } from "dotenv";

config()

import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

// habilitar a api através da key
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
}))

// habilitar o prompt no node
const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
userInterface.prompt();

// promise que aguarda o prompt
userInterface.on("line", async input => {
    const res = await openai

    // utiliza o chat GPT
    .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input}]
    })
    console.log(res.data.choices[0].message.content)
    userInterface.prompt();
})

/*userInterface.on("line", async input => {
    const res = await openai

    // Somente responde perguntas
    .createCompletion({
        model: "text-davinci-003",
        prompt: input,
        temperature: 0.1,
        max_tokens: 50,
    });
    console.log(res.data.choices[0].text)
    userInterface.prompt();
})*/




