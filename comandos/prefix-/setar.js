const Discord = require("discord.js");

module.exports.run = (client, message, args) =>{

   message.delete().catch(O_o=>{});
   if (message.member.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
    const comousar = new Discord.RichEmbed()
       .setAuthor("SkorpedBOT", client.user.avatarURL)
       .setTitle("!setar")
       .setDescription(`Adiciona o usuario no cargo mencionado`)
       .setColor("#60d1f6")
       .setFooter("SkorpedBOT")
   let member = message.mentions.members.first();
   if(!member)
    return message.channel.send(comousar).then(msg => msg.delete(10000));
   let rolename = args.slice(1).join(' ');
   if(!rolename)
    return message.channel.send("por favor, digite o cargo para adicionar!").then(msg => msg.delete(10000));
   
    if (!message.guild.roles.find("name", rolename)) {
      
        const norole = new Discord.RichEmbed()
           .setColor("ff0000")
           .setAuthor('Ocorreu um erro', client.user.avatarURL)
           
           .setDescription(`${message.author}, o cargo **${rolename}** não existe`)
        
        
           .setTimestamp()
           .setFooter("ERRO", message.author.avatarURL)
        
        message.channel.send(norole)
        return;
        
       } else {
          let role = message.guild.roles.find("name", rolename);
          member.addRole(role)
          message.reply(`cargo `+ "`" +rolename + "`" + ` setado com sucesso em ${member}! :white_check_mark:`).then(msg => msg.delete(5000));
        
    }
   let role = message.guild.roles.find("name", rolename);
   if(message.guild.channels.find("name", "change-logs")){
      let guild = message.guild.channels.find("name", "change-logs");
      const changelog = new Discord.RichEmbed()
        .setTitle("$korpedBOT")
        .setDescription(member+ " agora possui o cargo " +role+"!")
        .setColor(role.color)
        .setFooter("SkorpedBOT • @ImSkorped")
      guild.send(changelog) 
   }
   }else {
        const emojinop = client.guilds.get("490323549496541205").emojis.find("name", "x");
        message.reply("você não tem permissão! " + emojinop).then(msg => msg.delete(500000));
   }
}
