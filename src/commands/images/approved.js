const make = require("claire-cord")
const Discord = require("discord.js")

module.exports = {
    name: 'approved',
    Description: 'approve someone\'s profile pic',
    async execute(client, message, args) {

        if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        

        let img = await new make.Approved().getImage(avatar);
        
        let attach = new Discord.MessageAttachment(img, "approved.png");;
        message.channel.send(attach)
        }
        else {
            const user = message.mentions.users.first()

            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            
           
            let img = await new make.Approved().getImage(avatar);
        
            let attach = new Discord.MessageAttachment(img, "approved.png");;
            message.channel.send(attach)
        }
    }
}