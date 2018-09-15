exports.run = (client, message, args) => {
  if(!message.member.roles.some(r=>["👑 Owners" , "🔨 Developers" , "🚀 Administradores"].includes(r.name)) )
  return message.reply("Desculpe, apenas administradores ou superiores pode usar esse comando");

const sayAviso = args.join(" ");
let aviso = args.slice(0).join(' ');
if(!aviso)
return message.reply("Por favor, me diga qual aviso irei dar.");
message.delete().catch(O_o=>{}); 
client.guilds.get("485852217383976961").channels.get("487681483558092810").send("@everyone",{embed: {
  color: 3447003,
  author: {
    name: "$korpedAvisos",
    icon_url: client.user.avatarURL
  },
  fields: [{
      name: "⠀",
      value: `${sayAviso}. \n`
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "$korpedBOT • @ImSkorped"
  }
}
});

}
