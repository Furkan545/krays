const Discord = require('discord.js');

const ayarlar = require("../config.js")

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
message.delete()
  
  let Sehir = args[0];


if (!Sehir) {
  
  
const embed = new Discord.RichEmbed()
.setTitle('🕋 Şehirlere Göre Namaz Vakitleri')
.setColor('RANDOM')
.setThumbnail('https://img2.apk.tools/150/2/a/8/com.namaz.namazvakitleri.png')
.setDescription(`**\n**:x: Şehir Adı yazmalısınız! \n\n**\`\`\` Doğru Kullanım :: ${ayarlar.prefix}namaz <şehir>\`\`\`** `)
.setTimestamp()
.setFooter(`${message.author.username} | Tarafından Kontrol Ediliyor..`, message.author.avatarURL )

 return message.channel.send(embed);
 }
  
var request = require('request');
request(`https://simsekapi.cf/GvbF47g2/namaz/${encodeURIComponent(Sehir)} `, function (error, response, body) {
if (error) return console.log('Hata:', error);
else if (!error) {
var veri = JSON.parse(body);
        

const embed = new Discord.RichEmbed()
.setTitle('🕋 Şehirlere Göre Namaz Vakitleri')
.setColor('RANDOM')
.setThumbnail('https://img2.apk.tools/150/2/a/8/com.namaz.namazvakitleri.png')
.setDescription(`**\n:: ${Sehir} İçin Namaz Vakitleri ::\n**
☀️İmsak  ::** ${veri.imsak} **
🌞Güneş  ::** ${veri.gunes} **
🌞Öğle   ::** ${veri.ogle} **
🌤İkindi ::** ${veri.ikindi} **
🌜Akşam  ::** ${veri.aksam} **
🌚Yatsı  ::** ${veri.yatsi} **`)
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
    name: 'namaz <şehir>',
    description: ' Şehirlere Göre Namaz Vakitlerini Gösterir.',
    usage: '..namaz <şehir>'
}
 