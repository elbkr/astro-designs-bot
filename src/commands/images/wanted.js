const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: 'wanted',
    description: "Gimme his head!!!!",
    async execute(client, message, args) {

        if (!message.mentions.users.size) {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.wanted(avatar);
        let attachment = new Discord.MessageAttachment(image, "wanted.png");
        return message.channel.send(attachment);
        }
        else {
            const user = message.mentions.users.first()
            
            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            let image = await canvacord.Canvas.wanted(avatar);
            let attachment = new Discord.MessageAttachment(image, "wanted.png");
            return message.channel.send(attachment);
        }
    }
}