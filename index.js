
const { Client, RichEmbed } = require("@guildedjs/guilded.js");
require("dotenv").config();
const client = new Client();
const superagent = require('superagent');
client.on('ready', () => console.log(`Bot is successfully logged in`));

client.on("messageCreate", async(message) => {
    if(message.content === "poggers") {
        return message.channel.send("poggers indeed");
    }
    if(message.content === "anal") {
        return message.channel.send("***MACARONI IN ANUS***");
    }
        if (message.content.toLowerCase().startsWith(process.env.pOne) || message.content.toLowerCase().startsWith(process.env.pTwo)){
             console.log(message.content);
          let string = message.content.split(' ').slice(1).join("%20");
          const { body } = await superagent
            .get(`https://lewds.ga/v1/fun/chat?uid=1234567890&msg=` + string)
            .catch(e => {
                return message.channel.send(`The API broke! ||\n\`Error: ${e}\`||`)
              })
	message.channel.send(`\`\`\`${body.response}\`\`\``)
            return;
          }

})
client.login({email:process.env.email, password:process.env.password})
