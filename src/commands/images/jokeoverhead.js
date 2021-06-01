const canvacord = require('canvacord');
const Discord = require("discord.js")

module.exports = {
    name: 'jokeOverHead',
    aliases:[`joverh`],
    Description: 'You are a joke',
    async execute(client, message, args) {

        if (!message.mentions.users.first()) {
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        

        let image = await canvacord.Canvas.jokeOverHead(avatar);
        let attachment = new Discord.MessageAttachment(image, "jokeOverHead.png");
        message.channel.send(attachment)
        }
        else {
            const user = message.mentions.users.first()

            let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
            
           
            let image = await canvacord.Canvas.jokeOverHead(avatar);
            let attachment = new Discord.MessageAttachment(image, "jokeOverHead.png");
            message.channel.send(attachment)
        }
    }
}