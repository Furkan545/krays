const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('<a:emoji_12:574240268434276352> Kray Yardım Menüsü <a:emoji_13:574240299820384257>')
.setDescription(`**Bağlantılar:** \n**[[BotunSunucusu]](https://discord.gg/ss3N4hM)**\n**[[BotuEkle]](https://discordapp.com/oauth2/authorize?client_id=574264952781799465&scope=bot&permissions=0)**`)
.setTimestamp()
.addField('<a:rainbowpartner:573924384025346051> Ayar Komutları <a:rainbowpartner:573924384025346051>', '<a:emoji_3:574005374269653006>  k+ayar')
.addField('<a:rainbowpartner:573924384025346051> Çerçeve Komutları <a:rainbowpartner:573924384025346051>', ' <a:emoji_18:575032047546925058> k+çerçeve')
.addField('<a:rainbowpartner:573924384025346051> Eğlence Komutları <a:rainbowpartner:573924384025346051>', '<a:emoji_3:574005374269653006>  k+eğlence')
.addField('<a:rainbowpartner:573924384025346051> Genel Komutlar <a:rainbowpartner:573924384025346051>', ' <a:emoji_18:575032047546925058> k+genel')
.addField('<a:rainbowpartner:573924384025346051> Kullanıcı Komutları <a:rainbowpartner:573924384025346051>', '<a:emoji_3:574005374269653006>  k+kullanıcı')
.addField('<a:rainbowpartner:573924384025346051> Moderatör Komutlar <a:rainbowpartner:573924384025346051>', ' <a:emoji_18:575032047546925058> k+moderatör')
.addField('<a:rainbowpartner:573924384025346051> Müzik Komutları <a:rainbowpartner:573924384025346051>', '<a:emoji_3:574005374269653006> k+müzik')
.addField('<a:rainbowpartner:573924384025346051> Oyun Komutları <a:rainbowpartner:573924384025346051>', ' <a:emoji_18:575032047546925058> k+oyun')
.addField('<a:rainbowpartner:573924384025346051> Profil Komutları <a:rainbowpartner:573924384025346051>',  '<a:emoji_3:574005374269653006> k+profil')
.addField('<a:rainbowpartner:573924384025346051> Sunucu Komutları <a:rainbowpartner:573924384025346051>', ' <a:emoji_18:575032047546925058> k+sunucu')
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
 