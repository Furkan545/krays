const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Kullanıcı Komutları`)
    .addField('prefix+komut', 'Açıklama')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField ('', '')
    .addField ('', '')
    .addField ('', '')
    .addField ('', '')
    .addField ('', '')
    .addField ('', '')
    .addField ('', '')
    .addField ('', '')
    .addField ('', '')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=574264952781799465&scope=bot&permissions=0) **|** [Destek Sunucusu](https://discord.gg/ss3N4hM) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: '',
  usage: 'kullanıcı'
};
   