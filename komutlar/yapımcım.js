const Discord = require("discord.js")

exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed()

.setTitle(`Özel Kodalama Bot Bilgi`)
.addField(`Kodlayan`,`@Fatih Borlu#9047`)
.setAuthor(`Bot Bilgi`,message.author.avatarURL,)
.setColor("GREEN")
.setThumbnail(client.user.avatarURL) // şş saşlkda guild
.addField(`Botun Kullaanıcı Sayısı`,client.users.size) // nası ya sldak neydi ?
.addField(`Botun Olduğu Sunucu Sayısı`,client.guilds.size) // bu varmı böyle bişe hm unutum 1 dk
.addField(`Botaki Komut Sayısı`,client.commands.size)
//oldumu :D ?
.addField(`Sahip`, `@Fatih Borlu#9047`,true) //imdatt efe dc bak bi haa burda niye hata var
.addField(`Botun Geliştiricisi`,`@Fatih Borlu#9047`,true)
.addField(`Bot Discord.js Versiyon`,Discord.version)
.addField(`Bot İd`,client.user.id) //cilent olan herşey botla ilgimi ? timam
.setTimestamp()
message.channel.sendEmbed(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapıcı"],
  permLevel: 0,
  kategori: "ayarlar"
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapımcıyı gösterir',
  usage: 'yapım'
};