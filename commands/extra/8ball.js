const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  description: "There is a big chance I insult you!",
  category: "extra",
  run: async (client, message, args) => {
    if (!args[0]) {
      const embed = new MessageEmbed()
          .setTitle('Type question!')
          .setDescription('hx!8ball <question>');
      return message.channel.send(embed)
  };
      let responses = [
        "Yes",
        "No",
        "Definetly",
        "Absoloutely",
        "Not in a million years",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: **${args}**\nMy reply: **${response}**`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
  },
};