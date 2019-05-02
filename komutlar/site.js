const Discord = require("discord.js")

exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed()


.setTitle(`Sitenizin Linki Aşağıdadır`)
.setDescription("**https://kray.glitch.me/**")
.setColor("#ff0a0a")
.setTimestamp()
message.channel.sendEmbed(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["web"],
  permLevel: 0,
  kategori: "ayarlar"
};

exports.help = {
  name: 'site',
  description: 'Sunucunun sitesini gösterir',
  usage: 'test'
};