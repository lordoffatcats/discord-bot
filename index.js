require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

var SIMPS = ['óskar', 'sjonni', 'pétur']

bot.on('message', message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send(`stop saying bad words ${message.author.username}`);
    console.log(`Removed ${message.author.username}'s Message as it had a forbidden word in it.`);
    message.delete()
  }})

bot.on('message', message => {
  if(config.VALGERDUR.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send(`did you mean hvalgerður ${message.author.username}`);
    console.log(`${message.author.username} said valgerður`);
  }})

bot.on('message', message => {
  const randomSimp = SIMPS[Math.floor(Math.random() * array.length)];
  if(config.SIMP.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send(`did you mean ${randomSimp}`);
  }})
