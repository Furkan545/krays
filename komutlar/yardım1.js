const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`<a:emoji_12:574240268434276352> <a:emoji_3:574005374269653006> KRAY YARDIM <a:emoji_3:574005374269653006> <a:emoji_13:574240299820384257>`)
    .setThumbnail('https://www.ssyukle.com/images/2019/05/06/fd9bc33bd4367c71888459fb0e45285f.jpg')
    .addField("<a:emoji_1:574232372661321739>  Bir komut hakkında bilgi almak için  <a:emoji_11:574232372661321739>", `<a:emoji_3:574005374269653006> k+bilgi <komut adı> \n<a:emoji_3:574005374269653006> k+roller ▬ k+emojiler`)
    .addField(`<a:emoji_11:574232372661321739>  Aktif Komutlar  <a:emoji_11:574232372661321739>`, `<a:4911_dynopspin:573890327535157248> k+kulanıcı 》 Kullanıcı komutlarını listeler. \n<a:4911_dynopspin:573890327535157248> k+eğlence 》 Eğlence komutlarını listeler. \n<a:4911_dynopspin:573890327535157248> k+sunucu 》 Sunucu komutlarını listeler.`)
    message.channel.send(serverembed);
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['h', 'help', 'y'],
 
  permLevel: 0,
  kategori: 'genel'
};

exports.help = {
  name: 'yardım',
  category: 'genel',
  description: 'Tüm komutları listeler.',
  usage: 'yardım veya yardım <komut adı>'
};
   