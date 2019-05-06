const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
if (message.author.id !== ayarlar.sahip) return message.reply('Bu Komutu Sadece Sahibim Kullanabilir! Denemeyi Bırak Evlat!')
    let botid = args[0]
  if (!botid) return message.channel.send(`⛔ Davet edeceğin bot'un IDsini girmelisin!`).then(msg => msg.delete(10000))
  message.delete()
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setDescription(`[Sunucuna Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  message.channel.send(embed)
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ıd-davet', 'id-davett', 'davet-id'],
  permLevel: 0
};

exports.help = {
  name: 'id-davet', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'Özel Komuttur.'
};