exports.run = (client, message, args) => {   

  if(!message.member.roles.some(r=>["👑 Owners" , "🔨 Developers" , "🚀 Administradores" , "⚓ Moderadores"].includes(r.name)) ) return message.reply("Desculpe, apenas meus gerenciadores podem usar esse comando");
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('**Diga a quantidade de mensagens que devo apagar!**');
message.channel.bulkDelete(`${args[0]}`)
  setTimeout(function() {
      message.channel.sendMessage(`**:wastebasket: ${args[0]} mensagens foram apagadas!**`).then((value) => {
          setTimeout(() => {
              value.delete();
          }, 5000);
      });
  }, 2000)
};
