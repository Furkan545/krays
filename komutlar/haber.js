const Discord = require('discord.js');

const ayarlar = require("../index.js")

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
message.delete()
  
  
var request = require('request');
request('https://simsekapi.cf/GvbF47g2/sondakika', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var veri = JSON.parse(body);

        

const embed = new Discord.RichEmbed()
.setTitle('🎥 Bazı Son Dakika Haberleri ♻')
.setColor('RANDOM')
.setThumbnail(`${veri.resim1}`)
.setDescription(`
**\n🔴 ${veri.baslik1} **
\n${veri.icerik1}
\n◽**[Haberin Devamı..](${veri.haberurl1})**
\n🔴 Yayın Tarihi & Saati **${veri.habertarihi1}**
\n\n🔴** ${veri.baslik2} **
\n${veri.icerik2}
\n◽**[Haberin Devamı..](${veri.haberurl2})**
\n🔴 Yayın Tarihi & Saati **${veri.habertarihi2}**

`)
.setTimestamp()
.setFooter(`${message.author.username} | Tarafından Kontrol Ediliyor..`, message.author.avatarURL )
return  message.channel.send(embed);
   
    }
});

}   
     
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,

}

exports.help = {
    name: 'haber',
    description: 'Son Dakika Haberleri Gösterir',
    usage: '...haber'
}