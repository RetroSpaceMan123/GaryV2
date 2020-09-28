module.exports = {
    name: 'version',
    description : `says Teddy's version`,
    execute(message, args){
        message.channel.send(`Version R.R.1 (Rough Rider Update 1)`);
    }
}