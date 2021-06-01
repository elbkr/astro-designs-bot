const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: 'batslap',
    aliases: ['bslap'],
    description: "Slap someone",
    async execute(client, message, args) {
    

           
            let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });

            const user = message.mentions.users.first()
            
            if(!message.mentions.users.first()) {
                return message.channel.send(`<:sh_wait:817144214667132949> You have to mention someone to slap on da face >;(`)
            }
            let avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });

            let image = await canvacord.Canvas.slap(avatar, avatar2);
            let attachment = new Discord.MessageAttachment(image, "slap.png");
            return message.channel.send(attachment);


      
    }
}