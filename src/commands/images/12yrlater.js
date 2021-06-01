const make = require("claire-cord")
const Discord = require("discord.js")

module.exports = {
    name: 'affect',
    Description: 'Don\'t worry, it doesn\'t affect my baby',
    async execute(client, message, args) {

        if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        

        let img = await new make.Affect().getImage(avatar);
        
        let attach = new Discord.MessageAttachment(img, "Affect.png");;
        message.channel.send(attach)
        }
        else {
            const user = message.mentions.users.first()

            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            
           
            let img = await new make.Affect().getImage(avatar);
        
            let attach = new Discord.MessageAttachment(img, "Affect.png");;
            message.channel.send(attach)
        }
    }
}