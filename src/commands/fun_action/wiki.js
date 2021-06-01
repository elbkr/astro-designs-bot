const { MessageEmbed } = require("discord.js");
const request = require("node-superfetch");
const { shorten } = require("../../utilities/msgformat");

module.exports = {
  name: "wiki",
  description: "Searches Wikipedia for the specified article.",
  aliases: ["wikipedia"],
  usage: " <topic>",

  async execute(client, message, args) {
    if (!args.length) {
      return message.channel.send("Usage: `wikipedia <topic>`");
    }

    try {
      const query = args.join(" ");
      const { body } = await request
        .get("https://en.wikipedia.org/w/api.php")
        .query({
          action: "query",
          prop: "extracts|pageimages",
          format: "json",
          titles: query,
          exintro: "",
          explaintext: "",
          pithumbsize: 150,
          redirects: "",
          formatversion: 2,
        });
      const data = body.query.pages[0];
      if (data.missing) return msg.say("Could not find any results.");
      const embed = new MessageEmbed()
        .setColor("#ffe65d")
        .setTitle(data.title)
        .setAuthor(
          "Wikipedia",
          "https://i.imgur.com/Z7NJBK2.png",
          "https://www.wikipedia.org/"
        )
        .setThumbnail(data.thumbnail ? data.thumbnail.source : null)
        .setURL(
          `https://en.wikipedia.org/wiki/${encodeURIComponent(query).replace(
            /\)/g,
            "%29"
          )}`
        )
        .setDescription(shorten(data.extract.replace(/\n/g, "\n\n")));
      return message.channel.send({ embed });
    } catch (err) {
      return message.channel.send(
        `Oh no, an error occurred: \`${err.message}\`.`
      );
    }
  },
};
