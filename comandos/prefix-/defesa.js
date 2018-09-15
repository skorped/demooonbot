exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Você não possui permissão.");
    message.channel.send({
        "embed": {
            "title": `SkorpedBOT • Defesa`,
            "color": 2490112,
            "timestamp": new Date(),
            "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
            },
            "fields": [
                {
                  "name": `📖 - Mostra a defesa atual`,
                  "value": `*Nivel de proteção atual*`
                },
                {
                  "name": `🔐 - Altera para a recomandada (2)`,
                  "value": `*Alterar para nivel 2 de proteção (Recomendado)*`,
                  "inline": false
                },
                {
                  "name": `🔓 - Remove a segurança (NENHUM)`,
                  "value": `*Remover toda a segurança do servidor.*`,
                  "inline": false
                }
            
            

]
}

    }).then(help => {
  
        setTimeout(() => {
            help.react('📖');
        }, 500);
        setTimeout(() => {
            help.react('🔐');
        }, 600);
        setTimeout(() => {
            help.react('🔓');
        }, 600);
  
        const collector = help.createReactionCollector((r, u) => (r.emoji.name === '📖' || r.emoji.name === `🔓` || r.emoji.name === '🔐') && u.id !== client.user.id);
  
        collector.on('collect', r => {
            switch(r.emoji.name) {
  
            case '📖':


            message.channel.send(`O nivel de defesa é **${message.guild.verificationLevel}**`)
                         
                            
                
              break;

              case '🔐':
              message.guild.setVerificationLevel(2)
              message.channel.send('**Alterado.**');

              break;

              case '🔓':
              message.guild.setVerificationLevel(0)
              message.channel.send('**Alterado.**');
  
        setTimeout(() => {
            help.delete();
        }, 1 * 60 * 1000);
  
    }



})
    })

}
