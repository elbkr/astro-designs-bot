const DIG = require('discord-image-generation');
const Discord = require("discord.js")

module.exports = {
    name: 'gay',
    aliases: ['pride'],
    Description: '',
    async execute(client, message, args) {

        if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        
        let img = await new DIG.Gay().getImage(avatar);
        
        let attach = new Discord.MessageAttachment(img, "gay.png");;
        message.channel.send(attach)
        }
        else {
            const user = message.mentions.users.first()

            let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        
            let img = await new DIG.Gay().getImage(avatar);
            
            let attach = new Discord.MessageAttachment(img, "gay.png");;
            message.channel.send(attach)
        }
    }
}