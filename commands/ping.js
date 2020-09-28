module.exports = {
    name: 'ping',
    description : 'plays ping pong',
    execute(message, args){
        message.channel.send(`pong! :ping_pong: `);
    }
}