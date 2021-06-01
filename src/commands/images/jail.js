const canvacord = require('canvacord');
const Discord = require('discord.js')
module.exports = {
    name: 'jail',
    description: "Put someone in the jail",
    async execute(client, message, args) {

        if (!message.mentions.users.size) {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.jail(avatar);
        let attachment = new Discord.MessageAttachment(image, "jail.png");
        return message.channel.send(attachment);
        }
        else {
            const user = message.mentions.users.first()
            
            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canvacord.Canvas.jail(avatar);
            let attachment = new Discord.MessageAttachment(image, "jail.png");
            return message.channel.send(attachment);
        }
    }
}