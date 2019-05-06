const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('<a:emoji_12:574240268434276352> Kray Yardım Menüsü <a:emoji_13:574240299820384257>')
.setTimestamp()
.addField('» Ayar Komutları', 'k+ayar')
.addField('» Çerçeve Komutları', 'k+çerçeve')
.addField('» Eğlence Komutları', 'k+eğlence')
.addField('» Genel Komutlar', 'k+genel')
.addField('» Kullanıcı Komutları', 'k+kullanıcı')
.addField('» Moderatör Komutlar', 'k+moderatör')
.addField('» Müzik Komutları', 'k+müzik')
.addField('» Oyun Komutları', 'k+oyun')
.addField('» Profil Komutları',  'k+profil')
.addField('» Sunucu Komutları', 'k+sunucu')
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
 