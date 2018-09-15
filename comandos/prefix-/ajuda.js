exports.run = (client, message, args) => {   

    message.channel.send({
        "embed": {
          "author": {
            "name": "Informações do servidor.",
            "icon_url": client.user.displayAvatarURL
          },
          "description": `Somos uma comunidade de jogos em geral.\n\nTwitter do Discord Manager: https://twitter.com/ImSkorped\n\nCaso tenha alguma duvida, fale com a staff.`,
          "color": 10223807
        }
      });

}
    
