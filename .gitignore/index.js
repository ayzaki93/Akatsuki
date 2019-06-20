const Discord = require('discord.js'); 
var bot = new Discord.Client();  


const PREFIX = ">";

bot.login(process.env.TOKEN);

bot.on('ready', () => {
    console.log("Bot Prêt !")
});

bot.on("ready", () => {
    bot.user.setPresence({
        game: { 
            name: 'By . 𝙋𝙍𝙄𝘿𝙀 Ϟ#9999',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/something'
        },
        status: 'idle'
    })
})


bot.on('message', async message => { 
    if (message.author.equals(bot.user)) return; 

    if (!message.content.startsWith(PREFIX)) return; 

    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase(); 
    var mutedrole = message.guild.roles.find("name", "muted");
 
 
    if(command == "activvv") {
        let text = message.content.slice('>private'.length); // cuts off the /private part
        message.guild.members.forEach(member => {
          if (member.id != bot.user.id && !member.user.bot) member.send(text);
        });
    }

 });
