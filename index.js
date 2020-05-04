require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

var SIMPS = ['jóhannes']

bot.on('message', message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send(`stop saying bad words ${message.author.username}`);
    console.log(`Removed ${message.author.username}'s Message as it had a forbidden word in it.`);
    message.delete()
  }})

bot.on('message', message => {
  if((config.VALGERDUR.some(word => message.content.toLowerCase().includes(word))) && message.author.username !== "stór heili maður/ chat filter"){
    message.channel.send(`did you mean hvalgerður ${message.author.username}`);
    console.log(`${message.author.username} said valgerður`);
  }})

bot.on('message', message => {
  const randomSimp = SIMPS[Math.floor(Math.random() * SIMPS.length)];
  if(config.SIMP.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send(`did you mean ${randomSimp}`);
    console.log(`${message.author.username} said simp`);
  }})

bot.on('message', message => {
  if(config.HVERAGERDI.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send(`did you mean birgir`);
    console.log(`${message.author.username} said hveragerdi`);
  }})

bot.on('message', message => {
  if(config.ANGER.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send(`did you mean eiður`);
    console.log(`${message.author.username} said anger`);
  }})

bot.on('message', message => {
  if(config.ANGY.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send(`https://tenor.com/view/im-angy-angry-no-talk-with-me-sloaney-panda-gif-14286263`);
    console.log(`${message.author.username} said angy`);
  }})

bot.on('message', message => {
  if(config.EGG.some(word => message.content.toLowerCase().includes(word))){
    message.channel.send(`:egg:`);
    console.log(`${message.author.username} said egg`);
    }})
