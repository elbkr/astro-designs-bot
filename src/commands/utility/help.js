const { MessageEmbed } = require("discord.js");
const help = require("../../json files/helpMsgs.json");
const { images_emoji, expressions_emoji, fun_emoji, useful_emoji } = require("../../config.json")

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  async execute(client, message, args) {
    if (!message.guild.me.permissions.has("ADD_REACTIONS" || "EMBED_LINKS")) {
      return message.channel.send(
        "Please make sure I have permission to `ADD_REACTIONS` and `EMBED_LINKS`"
      );
    }
  
    let pr;
   
    pr = "s/"

    await message.delete();
    
    if (!args[0]) {
      let embed = new MessageEmbed()
        .setTitle("ISRP 2 commands")
        .setColor("#FF2C4B")
        .setDescription("React with the emoji of your choice")
        .addFields(
          {
            name: `${images_emoji} Images commands`,
            value: `\u200b`,
            inline: true,
          },
          {
            name: `${expressions_emoji} Expression commands`,
            value: `\u200b`,
            inline: true,
          },
          {
            name: `${useful_emoji} Useful commands`,
            value: `\u200b`,
            inline: true,
          }
        )
        .addFields(
          {
            name: `${fun_emoji} Fun & actions commands`,
            value: `\u200b`,
            inline: true,
          }
        );

      var helpMessage = await message.channel.send(embed);

      await helpMessage.react(images_emoji);
      await helpMessage.react(expressions_emoji);
      await helpMessage.react(useful_emoj);
      await helpMessage.react(fun_emoji);

      const filter = (reaction, user) =>
        user.id !== message.client.user.id && user.id == message.author.id;
      var collector = helpMessage.createReactionCollector(filter, {
        time: 180000,
      });

      collector.on("collect", async (reaction, user) => {
        const member = message.guild.member(user);

        switch (reaction.emoji.name) {
          case "is_images":
            reaction.users.remove(member).catch(console.error);

            let modsMessage = new MessageEmbed()
              .setColor("#FF2C4B")
              .setTitle(`${images_emoji} Images commands`)
              .setDescription(
                "Image commands are used to transform people's avatars, making funny images and memes"
              )
              .addField("available commands", help.helpMsg1)
              .addField(
                `\u200b`,
                `Type \`${pr}help <command>\` to get detailed info about that command`
              );
            await helpMessage.edit(modsMessage);

            break;

          case "is_expressions":
            reaction.users.remove(member).catch(console.error);
            let musicMessage = new MessageEmbed()
              .setColor("#FF2C4B")
              .setTitle(`${expressions_emoji} Expression commands`)
              .setDescription(
                "Expression commands are used to express yourself using cool gifs"
              )
              .addField("available commands", help.helpMsg3)
              .addField(
                `\u200b`,
                `Type \`${pr}help <command>\` to get detailed info about that command`
              );
            await helpMessage.edit(musicMessage);

            break;
          case "is_fun":
            reaction.users.remove(member).catch(console.error);
            let funMessage = new MessageEmbed()
              .setColor("#FF2C4B")
              .setTitle(`${fun_emoji} Fun & actions commands`)
              .setDescription("Fun & actions commands were made to have fun!!!")
              .addField(
                "available commands", help.helpMsg2
              )
              .addField(
                `\u200b`,
                `Type \`${pr}help <command>\` to get detailed info about that command`
              );
            await helpMessage.edit(funMessage);

            break;

          case "is_useful":
            reaction.users.remove(member).catch(console.error);
            let imageMessage = new MessageEmbed()
              .setColor("#FF2C4B")
              .setTitle(`${useful_emoji} Useful commands`)
              .setDescription(
                "Useful commands are used to get info about someone, getting it's avatar..."
              )
              .addField("available commands", help.helpMsg4)
              .addField(
                `\u200b`,
                `Type \`${pr}help <command>\` to get detailed info about that command`
              );
            await helpMessage.edit(imageMessage);

            break;
            
          default:
            reaction.users.remove(member).catch(console.error);
            break;
        }
      });

      collector.on("end", () => {
        if(helpMessage) {
        helpMessage.delete().catch(console.error);
        }
      });
    } else {
      const { commands } = message.client;

      const name = args[0].toLowerCase();
      const command =
        commands.get(name) ||
        commands.find((c) => c.aliases && c.aliases.includes(name));

      if (!command) {
        return message.reply("that's not a valid command!");
      }

      const embed = new MessageEmbed()
        .setTitle(command.name)
        .setColor("#FF2C4B")
        .setDescription(command.description);

      if(command.aliases) {
        embed.addField('Aliases', command.aliases)
      }
      if(command.cooldown) {
        embed.addField("Cooldown", `${command.cooldown} seconds`);
      }
      else {
        embed.addField("Cooldown", `3 seconds`);
      }
      
      embed.addField('Example', 'soon...')
      
      message.channel.send(embed)
    }
  },
};
