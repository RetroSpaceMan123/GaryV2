const DISCORD = require('discord.js');
module.exports = {
    name: 'help',
    description : `lists Teddy's commands`,
    execute(message, args){
        const embed = new DISCORD.MessageEmbed()
        .setTitle(`Help Directory`)
        .setDescription(`These are all of Teddy's commands so far. Try one out for yourself. Make sure to use "?" before the command (Ex: ?hello)`)
        .addField('hello', 'Receive a warm greeting from Teddy')
        .addField('rickroll', 'Rick-rolls the chat')
        .addField('fancybox', 'Creates a fancy message')
        .addField('version', `Shows Teddy's Version`)
        .addField('log', 'Lists what has changed from the previous version of Teddy')
        .addField('uptime', 'Shows how long Teddy has been alive')
        .addField('ping', 'Teddy play ping pong with you')
        .setColor('#75071F')
        message.channel.send(embed)
    }
}