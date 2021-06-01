const { MessageEmbed } = require("discord.js");
const got = require("got");

module.exports = {
  name: "meme",
  aliases: ["mm"],
  description: "Sends a random meme!",
  async execute(client, message, args) {
    let embed = new MessageEmbed();
    
    const subReddits = ["dankmeme", "meme", "me_irl", "memes"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    got(`https://www.reddit.com/r/${random}/random/.json`).then((response) => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`${memeTitle}`);
      embed.setURL(`${memeUrl}`);
      embed.setImage(memeImage);
      embed.setColor("#ffe65d")
      embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
      message.channel.send(embed);
    });
  },
};
