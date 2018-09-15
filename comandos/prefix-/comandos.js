exports.run = (client, message, args) => {   

message.channel.send({"embed": {
    "title": "Use os comandos no canal #comandos",
    "description": "```Usar os comandos em um canal inadequado, resulta em punição```",
    "url": "",
    "color": 4437732,
    "timestamp": new Date(),
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
    "author": {
      "name": "$korpedBOT",
      "url": "",
      "icon_url": ""
    },
    "fields": [
      {
        "name": "Comandos | Pagina 1",
        "value": "!aviso (aviso)\n!ban (@user) (motivo)\n!chat (on/off)\n!divulgador\n!say (mensagem)\n!embed (mensagem)\n!dropar (drop)\n!skin (Nick)\n!avatar (@user)",
        "inline": true
      },
      {
        "name": "Comandos | Pagina 2",
        "value": "!kick (@user) (motivo)\n!limpar (numero)\n!mute (@user) (motivo)\n!setar (@user) (cargo)\n!remover (@user) (cargo)\n!sugerir (sugestão)\n!votar (enquete)\n!defesa\n**!eval (codigo)**",
        "inline": true
      }
      
    ]
  }
});


}
