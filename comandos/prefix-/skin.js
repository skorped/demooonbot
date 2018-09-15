exports.run = (client, message, args) => {
	
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('Digite o nick da skin.');
  message.channel.sendMessage({
    "embed": {
      "title": `${args[0]}`,
      "url": `https://namemc.com/${args[0]}`,
      "color": 55512,
      "image": {
        "url": `https://namemc.com/${args[0]}`
      },
      "author": {
        "name": `${message.author.username}`,
        "icon_url": `${message.author.displayAvatarURL}`
      }
    }
  });

}
