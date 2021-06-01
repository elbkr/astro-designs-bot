const DIG = require('discord-image-generation');
const Discord = require("discord.js")

module.exports = {
    name: 'blur',
    Description: '',
    async execute(client, message, args) {

        if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        
        let level 
        if(args[0]){
            if (isNaN(args[0])) {
                level = 1
            }
            else {
            level = args[0]
            }
        }
        else {
            level = 2
        }

        let img = await new DIG.Blur().getImage(avatar, level);
        
        let attach = new Discord.MessageAttachment(img, "blur.png");;
        message.channel.send(attach)
        }
        else {
            const user = message.mentions.users.first()

            let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
            
            let level 
            if(args[1]){
                if (isNaN(args[1])) {
                    level = 1
                }
                else {
                level = args[1]
                }
            }
            else {
                level = 1
            }
            
            let img = await new DIG.Blur().getImage(avatar, level);
        
            let attach = new Discord.MessageAttachment(img, "blur.png");;
            message.channel.send(attach)
        }
    }
}