exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["Dono" , "Coordenador" , "Admin Geral" , "Admin" , "Mod+" , "Mod" , "Helper"].includes(r.name)) )
  return message.reply("Desculpe, apenas administradores podem usar esse comando");

let member = message.mentions.members.first();
if(!member)
  return message.reply("Uso correto: !mute (@user) (motivo)");

let reason = args.slice(1).join(' ');
if(!reason)
  return message.reply("Por favor, indique um motivo para o mute");

  member.guild.members.get(member.id).addRole(member.guild.roles.find("name", "Muted").id);
  member.guild.members.get(member.id).removeRole(member.guild.roles.find("name", "Membro").id);
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
          "value": "Mute",
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
