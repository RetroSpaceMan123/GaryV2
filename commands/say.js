const DISCORD = require('discord.js');
module.exports = {
    name: `say`,
    description: `Tells Teddy what to say`,
    execute(message, args){

        if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"]))
            return message.channel.send(`:stop_sign: Stop right there. You can't use this command bro`);

            let argsresult;
            let mChannel = message.mentions.channels.first()
        
            if(mChannel) {
                argsresult = args.slice(1).join(" ")
                mChannel.send(argsresult)
            } else {
                argsresult = args.join(" ")
                message.channel.send(argsresult)
            }
        }
    }