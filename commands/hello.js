module.exports = {
    name: 'hello',
    description : 'says hello',
    execute(message, args){
        message.channel.send(`Greetings ${message.author}, I am President Theodore Roosevelt, your local rough rider and trust buster! :cowboy:`);
    }
}