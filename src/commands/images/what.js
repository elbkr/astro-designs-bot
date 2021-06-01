const make = require("claire-cord")
const Discord = require("discord.js")

module.exports = {
    name: 'What',
    Description: 'Make a What Leonardo Dicaprio meme with someone\'s profile pic',
    async execute(client, message, args) {

        if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        

        let img = await new make.What().getImage(avatar);
        
        let attach = new Discord.MessageAttachment(img, "What.png");;
        message.channel.send(attach)
        }
        else {
            const user = message.mentions.users.first()

            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            
           
            let img = await new make.What().getImage(avatar);
        
            let attach = new Discord.MessageAttachment(img, "What.png");;
            message.channel.send(attach)
        }
    }
}