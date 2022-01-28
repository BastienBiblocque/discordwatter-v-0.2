const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const token = process.env.TOKEN
var CronJob = require('cron').CronJob;

var job = new CronJob('* * * * * *', async function() {
    await postMessage('510203975207878687','slt mek bwa 2 lo');
}, null, true, 'America/Los_Angeles');

client.once('ready', () => {
    console.log('Félicitations, votre bot Discord a été correctement initialisé !');
    job.start();
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong !')
    }
})



async function postMessage(channelId, message){
    const channel = await client.channels.fetch(channelId);
    await channel.send(message);
}

client.login('OTM2NzM4MjE4MzExODIzNDIw.YfRjcw.'+ 'yQimF17V7tfaFpA8nCk7nhp-wpg');

