const { MessageEmbed } = require("discord.js");
const help = require("../../json files/helpMsgs.json");
const setup = require("../../models/setup");

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
    const data = await setup
      .findOne({ Guild: message.guild.id })
      .catch((err) => console.log(err));

    let pr;
    if (data) {
      pr = data.Prefix;
    } else {
      pr = 'y!';
    }

    await message.delete();
    
    if (!args[0]) {
      let embed = new MessageEmbed()
        .setTitle("THB8 commands")
        .setColor("#ffe65d")
        .setDescription("React with the emoji of your choice")
        .addFields(
          {
            name: "<:sh_mods:813491189780971542> Moderation commands",
            value: `\u200b`,
            inline: true,
          },
          {
            name: "<:sh_np:812824625720590367> Music commands",
            value: `\u200b`,
            inline: true,
          },
          {
            name: "<:sh_utils:813491190069461082> Useful commands",
            value: `\u200b`,
            inline: true,
          },
          {
            name: "<:sh_images:813491189772058627> Images commands",
            value: `\u200b`,
            inline: true,
          }
        )
        .addFields(
          {
            name: "<:sh_fun:813491190145482773> Fun & actions commands",
            value: `\u200b`,
            inline: true,
          },
          {
            name: "<:sh_star:814934724060774490>  Leveling commands",
            value: `\u200b`,
            inline: true,
          },
          {
            name: "<:sh_config:813491189705736333> Config commands",
            value: `\u200b`,
            inline: true,
          },
          {
            name: "<:sh_18:818196966067667014> NSFW commands",
            value: `\u200b`,
            inline: true,
          },
          {
            name: "<:sh_yhf8:820734376714174494> Other commands",
            value: `\u200b`,
            inline: true,
          }
        );

      var helpMessage = await message.channel.send(embed);

      await helpMessage.react("<:sh_mods:813491189780971542>");
      await helpMessage.react("<:sh_np:812824625720590367>");
      await helpMessage.react("<:sh_utils:813491190069461082>");
      await helpMessage.react("<:sh_images:813491189772058627>");
      await helpMessage.react("<:sh_fun:813491190145482773>");
      await helpMessage.react("<:sh_star:814934724060774490>");
      await helpMessage.react("<:sh_config:813491189705736333>");
      await helpMessage.react("<:sh_18:818196966067667014>");
      await helpMessage.react("<:sh_yhf8:820734376714174494>");

      const filter = (reaction, user) =>
        user.id !== message.client.user.id && user.id == message.author.id;
      var collector = helpMessage.createReactionCollector(filter, {
        time: 180000,
      });

      collector.on("collect", async (reaction, user) => {
        const member = message.guild.member(user);

        switch (reaction.emoji.name) {
          case "sh_mods":
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

          case "sh_np":
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
          case "sh_fun":
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

          case "sh_images":
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

          case "sh_utils":
            reaction.users.remove(member).catch(console.error);
            let usefulMessage = new MessageEmbed()
              .setColor("#ffe65d")
              .setTitle("<:sh_utils:813491190069461082> Useful commands")
              .setDescription(
                "Useful commands are used to get info about someone, translating something..."
              )
              .addField("available commands", help.helpMsg5)
              .addField(
                `\u200b`,
                `Type \`${pr}help <command>\` to get detailed info about that command`
              );
            await helpMessage.edit(usefulMessage);

            break;

          case "sh_star":
            reaction.users.remove(member).catch(console.error);
            let levelsMessage = new MessageEmbed()
              .setColor("#ffe65d")
              .setTitle("<:sh_star:814934724060774490>  Leveling commands")
              .setDescription(
                `Leveling commands are used to check your xp, see the server's xp leaderboard...`
              )
              .addField("available commands", help.helpMsg6)
              .addField(
                `\u200b`,
                `Type \`${pr}help <command>\` to get detailed info about that command`
              );
            await helpMessage.edit(levelsMessage);

            break;

          case "sh_config":
            reaction.users.remove(member).catch(console.error);
            let configMessage = new MessageEmbed()
              .setColor("#ffe65d")
              .setTitle("<:sh_config:813491189705736333> Config commands")
              .setDescription(
                "Config commands are used to garant a better experience of the bot in the server!"
              )
              .addField("available commands", help.helpMsg7)
              .addField(
                `\u200b`,
                `Type \`${pr}help <command>\` to get detailed info about that command`
              );
            await helpMessage.edit(configMessage);

            break;

          case "sh_18":
            reaction.users.remove(member).catch(console.error);
            if (message.channel.nsfw) {
              let nsfwMessage = new MessageEmbed()
                .setColor("#ffe65d")
                .setTitle("<:sh_18:818196966067667014> NSFW commands")
                .setDescription(
                  "NSFW commands can only be used on NSFW marked channels"
                )
                .addField(
                  "Available commands",
                  `NSFW\r${help.helpMsg9}\rActions\r${help.helpMsg91}`
                )
                .addField(
                  `\u200b`,
                  `Type \`${pr}help <command>\` to get detailed info about that command`
                );
              await helpMessage.edit(nsfwMessage);
            } else {
              let nsfwMessage = new MessageEmbed()
                .setColor("#ffe65d")
                .setTitle("<:sh_18:818196966067667014> NSFW commands")
                .setDescription(
                  "NSFW commands can only be used on NSFW marked channels\rThis commands will be revamped soon..."
                )
                .addField(
                  "available commands",
                  `To see all available NSFW commands, run \`${pr}help\` on a NSFW marked channel`
                )
                .addField(
                  `\u200b`,
                  `Type \`${pr}help <command>\` to get detailed info about that command`
                );
              await helpMessage.edit(nsfwMessage);
            }
            break;

          case "sh_yhf8":
            reaction.users.remove(member).catch(console.error);
            let otherMessage = new MessageEmbed()
              .setColor("#ffe65d")
              .setTitle("<:sh_yhf8:820734376714174494> Other commands")
              .setDescription(
                "Other commands are used to get info about the bot,inviting it to other server..."
              )
              .addField("available commands", help.helpMsg8)
              .addField(
                `\u200b`,
                `Type \`${pr}help <command>\` to get detailed info about that command`
              );
            await helpMessage.edit(otherMessage);

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
        .setColor("#FFE65D")
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
