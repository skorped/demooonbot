const Discord = require("discord.js");

module.exports.run = (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
    const comousar = new Discord.RichEmbed()
       .setAuthor("SkorpedBOT", client.user.avatarURL)
       .setTitle("!removercargo")
       .setDescription(`Ira remover o cargo do usuário mencionado.`)
       .setColor("#60d1f6")
       .setFooter("SkorpedBOT • @ImSkorped")
   let member = message.mentions.members.first();
   if(!member)
    return message.channel.send(comousar).then(msg => msg.delete(10000));
   let rolename = args.slice(1).join(' ');
   if(!rolename)
    return message.channel.send("por favor, digite o cargo para remover! (**OBS:** Digite sem o @ e se tiver emojis, digite com emojis! :)").then(msg => msg.delete(10000));
   
    if (!message.guild.roles.find("name", rolename)) {
      
        const norole = new Discord.RichEmbed()
           .setColor("ff0000")
           .setAuthor('Deu um erro', client.user.avatarURL)
           
           .setDescription(`O cargo **${rolename}** não existe (**OBS:** Coloque o nome do cargo certo, emojis, minúsculo e maiúsculo nos lugares certos **E SEM @**.)`)
        
        
           .setTimestamp()
           .setFooter("SkorpedBOT • @ImSkorped", message.author.avatarURL)
        
        message.channel.send(message.author, norole)
        return;
        
       } else {
          let role = message.guild.roles.find("name", rolename);
          member.removeRole(role)
          message.reply("O cargo `" +rolename+"`"+` foi removido de ${member}!`).then(msg => msg.delete(5000));
        
    }
   let role = message.guild.roles.find("name", rolename);
   if(message.guild.channels.find("name", "change-logs")){
      let guild = message.guild.channels.find("name", "change-logs");
      const changelog = new Discord.RichEmbed()
        .setTitle("SkorpedBOT")
        .setDescription(member+ " não possui mais o cargo " +role+"!")
        .setColor(role.color)
        .setFooter("SkorpedBOT • @ImSkorped")
      guild.send(changelog) 
   }
   }else {
        const emojinop = client.guilds.get("490323549496541205").emojis.find("name", "x");
        message.reply("você não tem permissão! " + emojinop).then(msg => msg.delete(5000));
   }
}
