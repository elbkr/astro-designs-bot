const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
    name: 'triggered',
    aliases: ['trigger'],
    description: "Trigger your avatar of a user's",
    async execute(client, message, args) {
        if (!message.mentions.users.size) {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
        }
        else {
            const user = message.mentions.users.first()
            
            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canvacord.Canvas.trigger(avatar);
            let attachment = new Discord.MessageAttachment(image, "triggered.gif");
            return message.channel.send(attachment);
        }
    }
}