const DISCORD = require('discord.js'); //connects script to discord.js
const client = new DISCORD.Client(); //creates new client
const TOKEN = ''; //connects script to user

const PREFIX = `!`; //prefix for all commands

//command handler
const fs = require('fs');
client.commands = new DISCORD.Collection();
const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");//finds the prefix, and splits it from the switch statement (statement won't trigger unless prefix is detected)

    switch(args[0]) {//goes through all commands

        case "hello":
            client.commands.get('hello').execute(message, args);
        break;
        
        case "ping":
            client.commands.get('ping').execute(message, args);
        break;

        case "help":
            client.commands.get('help').execute(message, args);
        break;
        
        case "version":
            client.commands.get('version').execute(message, args);
        break;

        case "uptime": //uptime breaks if it isn't inside the main file itself~
            totalSeconds = (client.uptime / 1000)
            days = Math.floor(totalSeconds / 86400)
            hours = Math.floor(totalSeconds / 3600)
            totalSeconds %= 3600
            minutes = Math.floor(totalSeconds / 60)
            seconds = totalSeconds % 60
            uptime = `${days} day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`
            const embed = new DISCORD.MessageEmbed()
                .setTitle('Gary has been alive for:')
                .setDescription(uptime)
                .setColor('#000080')
                message.channel.send(embed)
                console.log(uptime)
        break;
        
        case "rickroll":
            client.commands.get('rickroll').execute(message, args);
        break;
        
        case "fancybox":
            client.commands.get('fancybox').execute(message, args);
        break;

        case "log":
            client.commands.get('log').execute(message, args);
        break;

        case "say":
            client.commands.get('say').execute(message, args);
        break;
    }
});

client.on('ready', () => {
    console.log(`Teddy is ready to bust them trusts`)
});

client.login(TOKEN);
