console.log("Conectando...")
const Discord = require('discord.js');
const client = new Discord.Client({
    autoReconnect: true,
    max_message_cache: 0
});
const PORT = process.env.PORT || 5000
const YTDL = require ("ytdl-core");
const moment = require('moment');
moment.locale('pt-BR');   
const config = require('./config.json');
var nicknames = require('nicknames');
const fs = require('fs');


fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/prefix-/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error("[CONSOLE] " + err);
    }

});

client.login(config.token)


let loop = require(`./loop.js`);
loop.run(client);


client.on('guildMemberAdd', member => {
    var x = member.guild.channels.get("486332252775776257");
    if(!x) return;
    const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setThumbnail(member.user.avatarURL)
    .setFooter("Leia as regras e divirta-se!")
    .setDescription(`**${member.user.username}** \n \n :point_right: *Entrou no servidor!*`)
    x.send(embed)
    let membro = member.guild.roles.find("name", "⚓ Membros");
    member.addRole(membro)
        
});


  client.on('guildMemberRemove', member => {
    var x = member.guild.channels.get("486332252775776257");
    if(!x) return;
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setThumbnail(member.user.avatarURL)
    .setFooter("Esperamos que volte!")
    .setDescription(`**${member.user.username}** \n \n :point_left: *Saiu do servidor, espero que volte.*`)
    x.send(embed)
  
  });





fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});
client.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.semprefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.semprefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/sem-prefix/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {

    }

});

client.login(config.token)



const prefix = "!";
const token = process.env.token;
const id = "149998623101288448"

const configs = require('./jsons/config.json');

const teste = configs.teste;

client.on("ready", () => {

    let string = ''
    for (var i = 0; i < client.users.size; i++) {

        let userStatus = {
            online: 'online',
            idle: 'ausente',
            dnd: 'ocupado',
            offline: 'offline'
        }[client.users.array()[i].presence.status]

        string += "     - " + client.users.array()[i].username + " ( " + userStatus + " ) ,\n";
    }

    
 
 
    
    const membrosNomes = string
    var statusIDO = ["dnd" , "online" , ]

    console.log(`Conectado !`)
    setTimeout(function() {
        console.log(`                   ---== Demoon's Lounge ==---                 \n\nMembros: (${client.users.size}):\n\n${membrosNomes}`);
    }, 2000)
    client.user.setPresence({ game: { name: `made by @ImSkorped`, type: 2 } })
    client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    setInterval(() => {
        client.user.setPresence({ game: { name: `twitter.com/ImSkorped`, type: 0 } })
        client.user.setStatus(statusIDO[Math.round(Math.random() * statusIDO.length - 1)]);
    }, 1 * 60 * 1000)
    
});

client.login(token)

client.on("message", (message) => {



});
