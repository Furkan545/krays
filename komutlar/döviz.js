const Discord = require("discord.js")
const client = new Discord.Client()
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const ayarlar = require("../config.js")

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
    if(!args[0]) {
        let embed = new Discord.RichEmbed();
        embed.setDescription(":x: Hata | Doğru Kullanım= "+ ayarlar.prefix + `döviz durum\`\``);
        embed.setColor("RED");
        message.channel.send({embed: embed});
    }
    if (args[0] === "durum"){
        const res = await Doviz.getKur("USD");
        const eur = await Doviz.getKur("EUR");
        const gbp = await Doviz.getKur("GBP");
        const jpy = await Doviz.getKur("JPY");
        const tarih = await Doviz.guncelTarih();
        let embed = new Discord.RichEmbed();
        embed.setAuthor(`Döviz Kurları`,message.author.avatarURL);
    
        embed.setColor("RANDOM");
        embed.setDescription(`:dollar: Dolar Alış: **${res.alis}** TL \n:dollar: Dolar Satış: **${res.satis}** TL \n \n:euro: Euro Alış: **${eur.alis}** TL\n:euro: Euro Satış: **${eur.satis}** TL \n \n:pound: İngiliz Sterlini Alış: **${gbp.alis}** TL \n:pound: İngiliz Sterlini Satış: **${gbp.satis}** TL \n \n:yen:Yen Alış: **${jpy.alis}** TL \n:yen:Yen Satış: **${jpy.satis}** TL`)
embed.setFooter(`Dövizlerin Güncellenme Tarihi;  \n${tarih}`)

        message.channel.send({embed: embed});
    }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["doviz","kur","dövizkur","kuranaliz","kurgetir","dövizanaliz","usd","euro","dolar","eur"],
  permLevel: 0
};

exports.help = {
  name: 'döviz',
  description: 'Yapımcısı technoeren#2937 dir!!!.',
  usage: 'döviz'
};