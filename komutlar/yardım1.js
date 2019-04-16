const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**:chicken:Yardım Komutları**")
    .setColor("RANDOM")
    .addField(`Bot Komutları`, 'k!ön-ek: Bot prefix ayarlar. \nk!davet: Bot davet linkini atar. \nk!ping: Botun pingini gösterir. \nk!sunucular: Botun bulunduğu sunucuları gösterir. \nk!istatistik: Botun istatistiklerini gösterir. ')
    .addField(`Moderasyon Komutları`, 'k!yasakla: İstediğiniz kişiyi sunucudan yasaklar. \nk!at: İstediğiniz kişiyi sunucudan atar. \nk!konuştur: Susturulmuş bir kişinin susturmasını kaldırmayı sağlar. \nk!mod-log-ayarla: Moderasyon kayıtları kanalını ayarlar. \nk!reklam-taraması: Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar. \nk!yavaş-mod: Bulunduğunuz kanala yazma sınırı (süresi) ekler. \nk!sustur-rol-ayarla: Birisi susturulunca verilecek rolü ayarlar. \nk!sustur: İstediğiniz kişiyi susturur. \nk!temizle-üye: Belirtilen kişinin belirtilen miktarda mesajını siler. \nk!temizle: Belirtilen miktarda mesaj siler. \nk!uyar: İstediğiniz kişiyi uyarır. \nk!uyarı-kaldır: İstediğiniz kişinin uyarılarını kaldırır. \nk!uyarılar: İstediğiniz kişinin uyarılarını gösterir.')
	 .addField(`Kullanıcı Komutları`, 'k!afk: AFK olursunuz. \nk! atatürk: Atatürk ün rastgele bir resmini atar. \nk!avatar: Avatarınızı gösterir. \nk!havadurumu: Yazılan konumun hava durumu bilgisini gösterir. \nk!hesapla: Belirtilen işlemi yapar. \nk!kitap-ara: Yazılan kitabın bilgisini gösterir. \nk!kullanıcı-bilgi: İstediğiniz kullanıcı veya komutu kullanan kullanıcı hakkında bilgi verir. \nk!romen: Yazdığınız sayının romen karşılığını yazar. \nk!söz: Rastgele güzel sözler atar. \nk!yetkilerim: Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir. \nk!çevir: İstediğiniz yazıyı istediğiniz dile çevirir.')
	.addField(`Müzik Komutları`, 'k!çal: İstenilen şarkıyı oynatır. \nk!durdur: Çalan şarkıyı durdurur. \nk!duraklat: Çalan şarkıyı duraklatır. \nk!devamet: Duraklatılmış şarkıyı devam ettirir.')
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
  name: 'ys',
  category: 'genel',
  description: 'Tüm komutları listeler.',
  usage: 'yardım veya yardım <komut adı>'
};
