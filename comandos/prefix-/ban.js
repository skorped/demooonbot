exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["👑 Owners" , "🔨 Developers" , "🚀 Administradores" , "⚓ Moderadores"].includes(r.name)) )
  return message.reply("Desculpe, apenas moderadores ou superiores podem usar esse comando");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Uso correto: !ban (@user) (motivo)");
if(!member.bannable) 
  return message.reply("Não tenho permissão para isso");

let reason = args.slice(1).join(' ');
if(!reason)
  return message.reply("Por favor, indique um motivo para o banimento");

member.ban(reason)
  .catch(error => message.reply(`Sorry ${message.author} não posso banir, Error: ${error}`));
  message.delete().catch(O_o=>{}); 
  client.guilds.get("485852217383976961").channels.get("490224217246269450").send({"embed": {
      "title": "$korpedPunições",
      "description": "Um usuario foi punido.",
      "url": "",
      "color": 4437732,
      "timestamp": new Date(),
      "footer": {
        "icon_url": "",
        "text": "$korpedBOT • @ImSkorped"
      },
      "thumbnail": {
        "url": ""
      },
      "image": {
        "url": ""
      },
      "author": {
        "name": "$korpedPunições",
        "url": "",
        "icon_url": ""
      },
      "fields": [
  
        {
          "name": "Usuario punido",
          "value": `${member.user}`
        },
        {
          "name": "Motivo",
          "value": `${reason}`
        },
        {
          "name": "Punição",
          "value": "Banimento",
          "inline": true
        },
        {
          "name": "Autor da punição",
          "value": `${message.author}`,
          "inline": true
        }
      ]
    }
  });

}
