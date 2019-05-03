const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**😋 Kray BOT Yardım Komutları Yeni Komutlar Yakında 😋**")
    .setColor("RANDOM")
    .addField(`💣 Bilgi 💣`, 'Komutlar hakkında bilgi almak için `k+bilgi <komut adı>` \nBotun Geliştiricisi @Fatih Borlu#9047')
    message.channel.send(serverembed);
}

exports.conf = {
  enabled: true,
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