const DIG = require('discord-image-generation');
const Discord = require("discord.js")

module.exports = {
    name: 'greyscale',
    aliases: ['grey', 'blackwhite', 'blwh'],
    Description: '',
    async execute(client, message, args) {

        if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({ size: 1024, dynamic: false, format: 'png' });
        
        let img = await new DIG.Greyscale().getImage(avatar);
        
        let attach = new Discord.MessageAttachment(img, "grey.png");;
        message.channel.send(attach)
        }
        else {
            const user = message.mentions.users.first()

            let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        
            let img = await new DIG.Greyscale().getImage(avatar);
            
            let attach = new Discord.MessageAttachment(img, "grey.png");;
            message.channel.send(attach)
        }
    }
}