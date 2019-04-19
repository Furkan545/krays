const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**😋 Osman8x BOT Yardım Komutları Yeni Komutlar Yakında 😋**")
    .setColor("RANDOM")
    .addField(`⚙️ Bot Komutları ⚙️`, 'o!ön-ek: `Bot prefix ayarlar.` \no!davet: `Bot davet linkini atar.` \no!ping: `Botun pingini gösterir.` \no!sunucular: `Botun bulunduğu sunucuları gösterir.` \no!istatistik: `Botun istatistiklerini gösterir.` ')
    .addField(`🛠 Moderasyon Komutları 🛠`, 'o!yasakla: `İstediğiniz kişiyi sunucudan yasaklar.` \no!at: `İstediğiniz kişiyi sunucudan atar.` \no!konuştur: `Susturulmuş bir kişinin susturmasını kaldırmayı sağlar.` \no!mod-log-ayarla: `Moderasyon kayıtları kanalını ayarlar.` \no!reklam-taraması: `Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar.` \no!yavaş-mod: `Bulunduğunuz kanala yazma sınırı (süresi) ekler.` \no!sustur-rol-ayarla: `Birisi susturulunca verilecek rolü ayarlar.` \no!sustur: `İstediğiniz kişiyi susturur.` \no!temizle-üye: `Belirtilen kişinin belirtilen miktarda mesajını siler.` \no!temizle: `Belirtilen miktarda mesaj siler.` \no!uyar: `İstediğiniz kişiyi uyarır.` \no!uyarı-kaldır: `İstediğiniz kişinin uyarılarını kaldırır.` \no!uyarılar: `İstediğiniz kişinin uyarılarını gösterir.`')
	 .addField(`📌 Kullanıcı Komutları 📌`, 'o!afk: `AFK olursunuz.` \no! atatürk: `Atatürk ün rastgele bir resmini atar.` \no!avatar: `Avatarınızı gösterir.` \no!havadurumu: `Yazılan konumun hava durumu bilgisini gösterir.` \no!hesapla: `Belirtilen işlemi yapar.` \no!kitap-ara: `Yazılan kitabın bilgisini gösterir.` \no!kullanıcı-bilgi: `İstediğiniz kullanıcı veya komutu kullanan kullanıcı hakkında bilgi verir.` \no!romen: `Yazdığınız sayının romen karşılığını yazar.` \no!söz: `Rastgele güzel sözler atar.` \no!yetkilerim: `Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.` \no!çevir: `İstediğiniz yazıyı istediğiniz dile çevirir.`')
	.addField(`🎧 Müzik Komutları 🎧`, 'o!çal: `İstenilen şarkıyı oynatır.` \no!durdur: `Çalan şarkıyı kapatır.` \no!duraklat: `Çalan şarkıyı duraklatır.` \no!devamet: `Duraklatılmış şarkıyı devam ettirir.`')
	.addField(`🔩 Ayarlar 🔩`, 'o!caps-engelle: `Büyük harf engelleme sistemini açıp kapatmanızı sağlar.` \no!davet-kanal-ayarla: `Davet kanalını ayarlar. ` \no!giriş-mesaj-ayarla: `Giriş mesajını değiştirmenizi sağlar. ` \no!giriş-çıkış-ayarla: `Giriş çıkış kanalını ayarlar.` \no!küfür-engelle: `Küfür engelleme sistemini açıp kapatmanızı sağlar.` \no!link-engelle: `Link engelleme sistemini açıp kapatmanızı sağlar.` \no!log-ayarla: `Sunucu kayıtları kanalını ayarlar.` \no!oto-rol-ayarla: `Sunucuya birisi katıldıgında verilecek rolü ayarlar.` \no!sayaç-ayarla: `Sayacı ayarlar.` \no!sayaç-kanal-ayarla: `Sayaç kanalını ayarlar.` \no!site: `Botun sitesini gösterir` \no!tag-ayarla: `Sunucuya katılan üyeye otomatik tag verir.` \no!yapımcım: `Botun yapımcısını gösterir.` \no!çıkış-mesaj-ayarla: `Çıkış mesajını değiştirmenizi sağlar.`')
    .addField(`👑 Özel komut sistemi 👑`, 'o!komut-ekle: `Sunucuya özel komut ekler.` \no!komut-sil: `Sunucuya özel komutlardan istenilen komutu siler.`')
    .addField(`🕹 Sunucu komutları 🕹`, 'o!ayarlar: `Sunucu ayarlarını gösterir.` \no!davet-sıralaması: `Sunucunuza en çok kullanıcı getirenleri sıralar.` \no!emojiler: `Bulunduğunuz sunucudaki emojileri gösterir.` \no!oylama: `Sunucunuzda oylama yapmanızı sağlar.` \no!roller: `Bulunduğunuz sunucudaki rolleri gösterir.` \no!sunucu-bilgi: `Bulunduğunuz sunucu hakkında bilgi verir.`')
    .addField(`💣 Bilgi 💣`, 'Komutlar hakkında bilgi almak için `o!bilgi <komut adı>`')
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