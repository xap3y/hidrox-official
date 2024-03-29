const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "dog",
    category: "animals",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/dog";
        const facts = "https://some-random-api.ml/facts/dog"

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
            .setTitle(`Random dog`)
            .setColor(`#f3f3f3`)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}