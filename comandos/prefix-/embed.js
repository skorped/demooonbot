exports.run = (client, message, args) => {   
  if(!message.member.roles.some(r=>["👑 Owners" , "🔨 Developers"].includes(r.name)) )
  return message.reply("Desculpe, apenas administradores ou superiores pode usar esse comando");

const saySelf = args.join(" ");
  message.delete().catch(O_o=>{}); 
  let fala = args.slice(0).join(' ');
  if(!fala)
    return message.reply("Por favor, me diga oque colocar na embed.");


    message.channel.send({
        "embed": {
          "author": {
            "name": "Atenção!",
            "icon_url": client.user.displayAvatarURL
          },
          "description": `${saySelf}`,
          "color": 10223807
        }
      });

}
