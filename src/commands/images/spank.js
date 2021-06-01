const DIG = require('discord-image-generation');
const Discord = require("discord.js")

module.exports = {
    name: 'spank',
    Description: 'Spank someone!',
    async execute(client, message, args) {
            
            if (!message.mentions.users.first()) {
                return message.channel.send('<:sh_wait:817144214667132949> You have to mention someone to slap on da butt >;(')
            }
            const user = message.mentions.users.first()
            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' })

            const avatar2 = message.author.displayAvatarURL({ dynamic: false, format: 'png' })

            let img = await new DIG.Spank().getImage(avatar2, avatar);
        
            let attach = new Discord.MessageAttachment(img, "spank.png");;
            message.channel.send(attach)
        
    }
}