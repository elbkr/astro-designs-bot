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
              .setColor("#ffe65d")
              .setTitle("<:sh_mods:813491189780971542> Moderation commands")
              .setDescription(
                "Moderation commands are used to keep the server safe and clean!"
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
              .setColor("#ffe65d")
              .setTitle("<:sh_np:812824625720590367> Music commands")
              .setDescription(
                "Music commands are used to play songs in a voice channel!\rFor some reason, the commands won't work. I'm trying to fix it as soon as possible"
              )
              .addField(
                "available commands",
                "Music commands currently disabled while we fix all the issues"
              )
              .addField(
                `\u200b`,
                `Type \`${pr}help <command>\` to get detailed info about that command`
              );
            await helpMessage.edit(musicMessage);

            break;
          case "is_fun":
            reaction.users.remove(member).catch(console.error);
            let funMessage = new MessageEmbed()
              .setColor("#ffe65d")
              .setTitle("<:sh_fun:813491190145482773> Fun & actions commands")
              .setDescription("Fun & actions commands were made to have fun!!!")
              .addField(
                "available commands",
                `Fun\r${help.helpMsg4}\rActions\r${help.helpMsg41}`
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
              .setColor("#ffe65d")
              .setTitle("<:sh_images:813491189772058627> Image commands")
              .setDescription(
                "Image commands are used to transform people's avatars, making funny images and memes"
              )
              .addField("available commands", help.helpMsg3)
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
