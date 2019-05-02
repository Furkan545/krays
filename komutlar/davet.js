const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../config.js');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:@Fatih_Borlu#9047** ")
  .setFooter('GoGame', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[Botu Ekle](https://discordapp.com/oauth2/authorize?client_id=572529179388543024&scope=bot&permissions=805314622)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/bPftMMe)`, false)
  .setURL('https://discordapp.com/oauth2/authorize?client_id=572529179388543024&scope=bot&permissions=805314622')
  .setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  aciklama: 'Bot ile ilgili bilgi verir.',
  kullanim: 'davet'
};