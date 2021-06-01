const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require("moment");

const verificationLevels = {
  0: "None",
  1: "Low",
  2: "Medium",
  3: "(╯°□°）╯︵ ┻━┻",
  4: "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻",
};

const contentFilterLevels = {
  0: "None",
  1: "Medium",
  2: "High",
};

const regions = {
  brazil: "Brazil",
  europe: "Europe",
  hongkong: "Hong Kong",
  india: "India",
  japan: "Japan",
  russia: "Russia",
  singapore: "Singapore",
  southafrica: "South Africa",
  sydeny: "Sydeny",
  "us-central": "US Central",
  "us-east": "US East",
  "us-west": "US West",
  "us-south": "US South",
};

module.exports = {
  name: "server",
  description: "Displays information about the current server.",
  usage: "server",
  aliases: ["serverinfo", "guildinfo", "guild"],

  async execute(client, message, args) {
    const createdTimestamp = moment
      .utc(message.guild.createdAt)
      .format("DDMMYYYY");

    const embed = new MessageEmbed()
      .setColor("#FF2C4B")
      .setThumbnail(`${message.guild.iconURL({ size: 1024, dynamic: true })}`)
      .setTitle(`${message.guild.name}`)
      .setFooter(
        `Server ID: ${message.guild.id}`,
        `${message.guild.iconURL({ size: 1024, dynamic: true })}`
      )
      .setDescription(
        `**Created:** ${moment
          .utc(message.guild.createdAt)
          .format("DD-MM-YYYY")} (${moment(
          createdTimestamp,
          "DDMMYYYY"
        ).fromNow()})\r\n**Owner:** ${message.guild.owner.user.tag}\r\n`
      )

      .addField(
        "Stats",
        stripIndents`
      **Members:** ${message.guild.memberCount} (${
          message.guild.members.cache.filter((m) => m.user.bot).size
        } bots)
      **Roles:** ${message.guild.roles.cache.size}
      **Boosts:** ${
        message.guild.premiumSubscriptionCount >= 1
          ? ` ${message.guild.premiumSubscriptionCount}`
          : `0`
      } 
      `,
        true
      )

      .addField(
        "Channels",
        stripIndents`
      **Total:**  ${message.guild.channels.cache.size}
      **Text:** ${
        message.guild.channels.cache.filter((ch) => ch.type === "text").size
      }
      **Voice:** ${
        message.guild.channels.cache.filter((ch) => ch.type === "voice").size
      }
      `,
        true
      )

      .addField(
        "Details",
        `
      **Region:** ${regions[message.guild.region]}\r\n**Content filter:** ${
          contentFilterLevels[message.guild.explicitContentFilter]
        }\r\n**Verification:** ${
          verificationLevels[message.guild.verificationLevel]
        }\r\n**AFK:** ${
          message.guild.afkChannel
            ? `<#${message.guild.afkChannel.id}>`
            : "None"
        } ${
          message.guild.afkChannel
            ? `(After ${message.guild.afkTimeout / 60} min)`
            : ""
        } `
      );
    message.channel.send({ embed });
  },
};
