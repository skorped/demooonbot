const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{

    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("você não tem permissão!").then(msg => msg.delete(5000));
    message.delete().catch(O_o=>{});
    const comousar = new Discord.RichEmbed()
        .setAuthor("SkorpedBOT", client.user.avatarURL)
        .setTitle("!chat")
        .setDescription(`Irá mutar ou mutar o chat.`)
        .setColor("#60d1f6")
        .setFooter("SkorpedBOT")
        .addField("Utilize", "`!chat <on/off>`")
    let mensg = args.join(" ");
    if(!mensg)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
    if(args[0] == "OFF" || args[0] == "off"){
        let role = message.guild.roles.find("name", "@everyone");
        message.channel.overwritePermissions(role, {SEND_MESSAGES: false});
        message.channel.send(`Canal **silenciado** por: ${message.author}`)
        return;
    }
    if(args[0] == "ON" || args[0] == "on"){
        let role = message.guild.roles.find("name", "@everyone");
        message.channel.overwritePermissions(role, {SEND_MESSAGES: true});
        message.channel.send(`Canal **ativo novamente** por: ${message.author}`)
        return;
    }
    message.reply("Como utilizar: `!chat off` ou `!chat on`!").then(msg => msg.delete(8000));

    
    
 }
