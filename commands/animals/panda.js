const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { api } = require('some-random-api');

module.exports = {
    name: "panda",
    category: "animals",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/panda";
        const facts = "https://some-random-api.ml/facts/panda"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`ERROR!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random panda`)
            .setColor(`#f3f3f3`)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}