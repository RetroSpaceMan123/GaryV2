const DISCORD = require('discord.js');
module.exports = {
    name: 'fancybox',
    description : 'creates a custom embedded message',
    execute(message, args){
        
        let filter = m => m.author.id === message.author.id;
        
        message.channel.send(`What do you want your fancy message to be? (Title first message, Description second message) (You have 1 minute)`)
        message.channel.awaitMessages(filter, {
            max: 2,
            time: 60000
        }).then(collect => {
            
            if(collect.first().content === "cancel") {
                return message.channel.send(`Alright, I cancelled the fancybox.`).then(message.react('😔'))
            }

            if(collect.last().content === "cancel") {
                return message.channel.send(`Alright, I cancelled the fancybox`).then(message.react('😔'))
            }
            
            if(collect.first().content === "Cancel") {
                return message.channel.send(`Alright, I cancelled the fancybox.`).then(message.react('😔'))
            }

            if(collect.last().content === "Cancel") {
                return message.channel.send(`Alright, I cancelled the fancybox`).then(message.react('😔'))
            }

            if(collect.first().content === "!fancybox") {
                return message.channel.send(`Alright, I cancelled the fancybox.`).then(message.react('😔'))
            }

            if(collect.last().content === "!fancybox") {
                return message.channel.send(`Alright, I cancelled the fancybox`).then(message.react('😔'))
            }

            let title = collect.first().content;
            let body = collect.last().content;
            
            const embed = new DISCORD.MessageEmbed()
            .setTitle(title)
            .setDescription(body)
            .setColor('#75071F')
            message.channel.send(embed)
            message.react('👍')
        })
    }
}