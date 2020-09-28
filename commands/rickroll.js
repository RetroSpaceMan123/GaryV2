module.exports = {
    name: 'rickroll',
    description : 'rickrolls the chat',
    execute(message, args){
        message.channel.send(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
    }
}