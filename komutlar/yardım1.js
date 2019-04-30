const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**😋 Kray BOT Yardım Komutları Yeni Komutlar Yakında 😋**")
    .setColor("RANDOM")
    .addField(`⚙️ Bot Komutları ⚙️`, 'k+ön-ek: `Bot prefix ayarlar.` \nk+davet: `Bot davet linkini atar.` \nk+ping: `Botun pingini gösterir.` \nk+sunucular: `Botun bulunduğu sunucuları gösterir.` \nk+istatistik: `Botun istatistiklerini gösterir.` ')
    .addField(`🛠 Moderasyon Komutları 🛠`, 'k+yasakla: `İstediğiniz kişiyi sunucudan yasaklar.` \nk+at: `İstediğiniz kişiyi sunucudan atar.` \no!konuştur: `Susturulmuş bir kişinin susturmasını kaldırmayı sağlar.` \nk+mod-log-ayarla: `Moderasyon kayıtları kanalını ayarlar.` \nk+reklam-taraması: `Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar.` \nk+yavaş-mod: `Bulunduğunuz kanala yazma sınırı (süresi) ekler.` \nk+sustur-rol-ayarla: `Birisi susturulunca verilecek rolü ayarlar.` \nsustur: `İstediğiniz kişiyi susturur.` \no!temizle-üye: `Belirtilen kişinin belirtilen miktarda mesajını siler.` \no!temizle: `Belirtilen miktarda mesaj siler.` \no!uyar: `İstediğiniz kişiyi uyarır.` \no!uyarı-kaldır: `İstediğiniz kişinin uyarılarını kaldırır.` \no!uyarılar: `İstediğiniz kişinin uyarılarını gösterir.`')
	 .addField(`📌 Kullanıcı Komutları 📌`, 'k+afk: `AFK olursunuz.` \nk+ atatürk: `Atatürk ün rastgele bir resmini atar.` \nk+avatar: `Avatarınızı gösterir.` \nk+havadurumu: `Yazılan konumun hava durumu bilgisini gösterir.` \nk+hesapla: `Belirtilen işlemi yapar.` \nk+kitap-ara: `Yazılan kitabın bilgisini gösterir.` \nk+kullanıcı-bilgi: `İstediğiniz kullanıcı veya komutu kullanan kullanıcı hakkında bilgi verir.` \nk+romen: `Yazdığınız sayının romen karşılığını yazar.` \nk+söz: `Rastgele güzel sözler atar.` \nk+yetkilerim: `Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.` \no!çevir: `İstediğiniz yazıyı istediğiniz dile çevirir.`')
	.addField(`🎧 Müzik Komutları 🎧`, 'k+çal: `İstenilen şarkıyı oynatır.` \no!durdur: `Çalan şarkıyı kapatır.` \no!duraklat: `Çalan şarkıyı duraklatır.` \nk+devamet: `Duraklatılmış şarkıyı devam ettirir.`')
	.addField(`🔩 Ayarlar 🔩`, 'k+caps-engelle: `Büyük harf engelleme sistemini açıp kapatmanızı sağlar.` \nk+davet-kanal-ayarla: `Davet kanalını ayarlar. ` \nk+giriş-mesaj-ayarla: `Giriş mesajını değiştirmenizi sağlar. ` \no!giriş-çıkış-ayarla: `Giriş çıkış kanalını ayarlar.` \no!küfür-engelle: `Küfür engelleme sistemini açıp kapatmanızı sağlar.` \no!link-engelle: `Link engelleme sistemini açıp kapatmanızı sağlar.` \no!log-ayarla: `Sunucu kayıtları kanalını ayarlar.` \no!oto-rol-ayarla: `Sunucuya birisi katıldıgında verilecek rolü ayarlar.` \no!sayaç-ayarla: `Sayacı ayarlar.` \no!sayaç-kanal-ayarla: `Sayaç kanalını ayarlar.` \no!site: `Botun sitesini gösterir` \no!tag-ayarla: `Sunucuya katılan üyeye otomatik tag verir.` \no!yapımcım: `Botun yapımcısını gösterir.` \no!çıkış-mesaj-ayarla: `Çıkış mesajını değiştirmenizi sağlar.`')
    .addField(`👑 Özel komut sistemi 👑`, 'k+komut-ekle: `Sunucuya özel komut ekler.` \nk+komut-sil: `Sunucuya özel komutlardan istenilen komutu siler.`')
    .addField(`🕹 Sunucu komutları 🕹`, 'k+ayarlar: `Sunucu ayarlarını gösterir.` \nk+davet-sıralaması: `Sunucunuza en çok kullanıcı getirenleri sıralar.` \nk+emojiler: `Bulunduğunuz sunucudaki emojileri gösterir.` \no!oylama: `Sunucunuzda oylama yapmanızı sağlar.` \no!roller: `Bulunduğunuz sunucudaki rolleri gösterir.` \no!sunucu-bilgi: `Bulunduğunuz sunucu hakkında bilgi verir.`')
    .addField(`💣 Bilgi 💣`, 'Komutlar hakkında bilgi almak için `k+bilgi <komut adı>`')
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