const Discord = require("discord.js");
const mongoose = require('mongoose');
const fs = require("fs");
const { readdirSync } = require("fs");
const client = new Discord.Client({
    disableEveryone: true,
  });
const config = require("./botconfig.json");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
  });
 
  client.on('guildMemberAdd', async member => {
    require("./events/guild/memberAdd")(member)
  })
  
  client.on('guildMemberRemove', async (message) => {
    require("./events/guild/memberRemove")(message)
  })

  client.on('ready', () => {
    client.user.setActivity('hx!help', { type: 'PLAYING' })
  })

  client.login(process.env.token)
