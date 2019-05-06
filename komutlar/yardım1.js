const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('<a:emoji_12:574240268434276352> Kray Yardım Menüsü <a:emoji_13:574240299820384257>')
.setTitle('<a:emoji_12:574240268434276352>')
.setTimestamp()
.addField('» Ayar Komutları', '<a:emoji_3:574005374269653006>  k+ayar')
.addField('» Çerçeve Komutları', ' <a:emoji_18:575032047546925058> k+çerçeve')
.addField('» Eğlence Komutları', '<a:emoji_3:574005374269653006>  k+eğlence')
.addField('» Genel Komutlar', ' <a:emoji_18:575032047546925058> k+genel')
.addField('» Kullanıcı Komutları', '<a:emoji_3:574005374269653006>  k+kullanıcı')
.addField('» Moderatör Komutlar', ' <a:emoji_18:575032047546925058> k+moderatör')
.addField('» Müzik Komutları', '<a:emoji_3:574005374269653006> k+müzik')
.addField('» Oyun Komutları', ' <a:emoji_18:575032047546925058> k+oyun')
.addField('» Profil Komutları',  '<a:emoji_3:574005374269653006> k+profil')
.addField('» Sunucu Komutları', ' <a:emoji_18:575032047546925058> k+sunucu')
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
 