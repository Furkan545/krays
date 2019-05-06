const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» Eğlence Komutları', 'k+eğlence')
.addField('» Moderatör Komutları', 'k+moderatör')
.addField('» Genel Komutlar', 'k+genel')
.addField('» Kullanıcı Komutlar', 'k+kullanıcı')
.addField('» Oyun Komutları', 'k+oyun')
.addField('» Müzik Komutları', 'k+müzi
.setFooter('© 2018 Fredux', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["y","ya"], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
 