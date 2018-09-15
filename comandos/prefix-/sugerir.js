exports.run = (client, message, args) => {   
        const saySugest = args.join(" ");
          message.delete().catch(O_o=>{});
          let sugest = args.slice(0).join(' ');
          if(!sugest)
            return message.reply("Por favor, me diga qual a sugestão que você tem.");
        
          client.guilds.get("485852217383976961").channels.get("490595189979611145").send({"embed": {
              "title": "$korpedSugestões",
              "description": "Chegou uma nova sugestão",
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
                "name": "$korpedSugestões",
                "url": "",
                "icon_url": ""
              },
              "fields": [
  
                {
                  "name": "Sugestão",
                  "value": `${saySugest}`,
                  "inline": true
                },
                {
                  "name": "Autor da sugestão",
                  "value": `${message.author}`,
                  "inline": true
                }
              ]
            }
          })            .then(function (message) {
            setTimeout(function() {
              message.react("✅")
                }, 500)
            setTimeout(function() {
              message.react("❎")
                }, 1000)
          }).catch(function() {
           });;
  
      }
