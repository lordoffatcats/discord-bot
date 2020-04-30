require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

let forbiddenWords = ['nigga', 'nigger', 'beggi', 'negri', 'geir', 'eiður', 'hamood', 'habibi', 'Nigger'];
let valgerður = ['valgerður', 'Valgerður']

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
  for (var i = 0; i < forbiddenWords.length; i++) {
    if (message.content.includes(forbiddenWords[i])) {
      message.channel.send(`stop saying bad words ${message.author.username}`);
      console.log(`Removed ${message.author.username}'s Message as it had a forbidden word in it.`);
      message.delete();
      break;
    }
  }
});

bot.on('message', message => {
  for (var i = 0; i < valgerður.length; i++) {
    if (message.content.includes(valgerður[i]) && message.author.username != 'stór heili maður/ chat filter') {
      message.channel.send(`Did you mean hvalgerður. ${message.author.username}`);
      console.log(`${message.author.username}just said valgerdur`);
      break;
    }
  }
});
