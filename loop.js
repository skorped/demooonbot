const Discord = require('discord.js');
module.exports.run = async (client) =>{

    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("Mensagens automaticas ativadas.")

    for (i=0; i<10;){
        await sleep(600000)

    const mensagem1 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Mensagem automatica")

            .setDescription("Me siga no Twitter [Clique Aqui](https://twitter.com/ImSkorped) :smiley:")
           
            .setTimestamp()
            .setFooter("SkorpedBOT • @ImSkorped")

    client.channels.get("487686130935005195").send(mensagem1);
    

    await sleep(600000)

    const mensagem2 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Mensagem automatica")

            .setDescription("Entre no meu servidor https://discord.gg/CVxS3QS")
           
            .setTimestamp()
            .setFooter("SkorpedBOT • @ImSkorped")

    client.channels.get("487686130935005195").send(mensagem2);

    await sleep(600000)

    const mensagem3 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Mensagem automatica")

            .setDescription("Me siga no Twitter [Clique Aqui](https://twitter.com/ImSkorped) :smiley:")
           
            .setTimestamp()
            .setFooter("SkorpedBOT • @ImSkorped")

    client.channels.get("487686130935005195").send(mensagem3);
    

    await sleep(600000)

    const mensagem4 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Mensagem automatica")

            .setDescription("Entre no meu servidor! https://discord.gg/CVxS3QS")
           
            .setTimestamp()
            .setFooter("SkorpedBOT • @ImSkorped")

    client.channels.get("487686130935005195").send(mensagem4);

    await sleep(600000)

    const mensagem5 = new Discord.RichEmbed()
    .setColor("0cff00")
            .setAuthor("Mensagem automatica")

            .setDescription("Visite o twitter do Skorped! [Clique Aqui](https://twitter.com/ImSkorped) :smiley:")
           
            .setTimestamp()
            .setFooter("SkorpedBOT • @ImSkorped")

    client.channels.get("487686130935005195").send(mensagem5);
    
    
    }
}
