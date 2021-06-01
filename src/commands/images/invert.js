const DIG = require('discord-image-generation');
const Discord = require("discord.js")

module.exports = {
    name: 'negative',
    aliases: ['nega'],
    Description: '',
    async execute(client, message, args) {

        if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({ size: 1024, dynamic: false, format: 'png' });
        
        let img = await new DIG.Invert().getImage(avatar);
        
        let attach = new Discord.MessageAttachment(img, "negative.png");;
        message.channel.send(attach)
        }
        else {
            const user = message.mentions.users.first()

            let avatar = user.displayAvatarURL({ size: 1024, dynamic: false, format: 'png' });
        
            let img = await new DIG.Invert().getImage(avatar);
            
            let attach = new Discord.MessageAttachment(img, "negative.png");;
            message.channel.send(attach)
        }
    }
}