const DISCORD = require('discord.js')
module.exports = {
    name: 'log',
    description : `shows Teddy's latest updates`,
    execute(message, args){
        const embed = new DISCORD.MessageEmbed()
        .setTitle(`What's New`)
        .setDescription(`After a long slumber, Teddy has returned to bust some trusts, mostly focused on cleaning up the code, though there are some treats added for you to explore! :smiley:`)
        .addField(`Reworked Command Structure`, `Teddy officially now has a command handler, which means commands can be made easier, and are a lot more organized in the code`)
        .addField(`Fixed !fancybox`, `You can now set the title and description in the fancy message. The command also does not appear in the title, which was a problem before. Try it out for yourself!`)
        .addField(`Added !ping`, `Ever wanted to play ping pong with Teddy? Well now you can, sort of! I'm not sure Teddy can actually lose this, so is he really playing ping pong? :thinking: `)
        .setColor('#75071F')
        message.channel.send(embed)
    }
}