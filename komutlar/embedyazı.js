const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');


exports.run = (client, message, args) => {
  const yazdır = args.join(" ")
  if (yazdır < 1) return message.channel.send("Embed e yazmam için birşeyler yaz")
  const embed = new Discord.RichEmbed()
    .setDescription(yazdır)
    .setColor(0x00A2E8);
  message.channel.send({embed});

}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["embedyazı"],
  permLevel: 0
};

module.exports.help = {
  name: 'embed',
  description: '',
  usage: 'embedyazı'
};