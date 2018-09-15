exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["Dono" , "Coordenador" , "Droper"].includes(r.name)) )
  return message.reply("Desculpe, apenas meus gerenciadores pode usar esse comando");

  let reason = args.slice(0).join(' ');
  if(!reason)
    return message.reply("Por favor, coloque oque irei dropar!");
    message.delete().catch(O_o=>{});
  
    client.guilds.get("490323549496541205").channels.get("490331094097330205").send({"embed": {
        "description": "",
        "url": "",
        "color": 4437732,
        "timestamp":  new Date(),
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
        "fields": [
    
          {
            "name": "Drop!",
            "value": `${reason} \n`,
            "inline": true
          }
        ]
      }
    });

}
