const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Kullanıcı Komutları`)
    .addField('k+afk', 'Afk Olursunuz.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('k+hesapla', 'Belirtilen işlemi Yapar.')
    .addField('k+söz', 'Rastgele Güzel Söz atar.')
    .addField('k+atatürk', 'Rastgele atatürkün fotğrafını atar.')
    .addField('k+kitap-ara', 'Yazılan Kitap Bilgisini Gösterir.')
    .addField('k+avatar', 'Avatarınızı Gösterir.')
    .addField('k+kullanıcı-bilgi', 'İstediğiniz kullanıcı, kullanan kullanıcı bilgilerini gösterir. ')
    .addField('k+yetkilerim', 'Komutu kullandığınız sunucuda yetkilerinizi/izinlerinizi gösterir.')
    .addField('k+havadurumu', 'Yazılan konumun havadurum bilgisini gösterir.')
    .addField('k+romen', 'Yazdığınız sayının romen karşılığını yazar.')
    .addField('k+çevir', 'İstediğiniz yazıyı istediğiniz dile çevirir.')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=574264952781799465&scope=bot&permissions=0) **|** [Destek Sunucusu](https://discord.gg/ss3N4hM) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: '',
  usage: 'kullanıcı'
};
   