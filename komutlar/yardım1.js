const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Komut Grupları')
.setTimestamp()
.addField('» Ayar Komutları', 'k+ayar')
.addField('» Çerçeve Komutları', 'k+çerçeve')
.addField('» Eğlence Komutları', 'k+eğlence')
.addField('» Genel Komutlar', 'k+genel')
.addField('» Kullanıcı Komutları', 'k+kullanıcı')
.addField('» Moderatör Komutlar', 'k+moderatör')
.addField('» Müzik Komutları', 'k+müzik')
.addField('» Sunucu Komutları', 'k+sunucu')
.addField('» Oyun Komutları',  'k+oyun')
.addField('» Profil Komutları', 'k+profil')
.setFooter('© 2019 Kray Bot Tüm Hakları Saklıdır.', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: false,
  guildOnly: false, 
  aliases: ["y","ya"], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
 