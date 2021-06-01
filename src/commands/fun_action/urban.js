const fetch = require("node-fetch");
const querystring = require("querystring");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "urban",
  aliases: ["urb"],
  description: "Search an urban word term",
  usage: "<word/s>",
  async execute(client, message, args) {
    const trim = (str, max) =>
      str.length > max ? `${str.slice(0, max - 3)}...` : str;

    if (!args[0]) {
      return message.channel.send("You need to supply a search term!");
    }

    const query = querystring.stringify({ term: args.join(" ") });

    const { list } = await fetch(
      `https://api.urbandictionary.com/v0/define?${query}`
    ).then((response) => response.json());

    if (!list.length) {
      return message.channel.send(
        `No results found for **${args.join(" ")}**.`
      );
    }

    const [answer] = list;

    let newEmbed = new MessageEmbed()
      .setColor("#ffe65d")
      .setTitle(answer.word)
      .setURL(answer.permalink)
      .addFields(
        { name: "Definition", value: trim(answer.definition, 1024) },
        { name: "Example", value: trim(answer.example, 1024) }
      )
      .setFooter(`👍 ${answer.thumbs_up}  👎 ${answer.thumbs_down}`);
    message.channel.send(newEmbed);
  },
};
