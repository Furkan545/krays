const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverembed = new Discord.RichEmbed()
    .setDescription("**😋 Kapot BOT Yardım Komutları Yeni Komutlar Yakında 😋**")
    .setColor("RANDOM")
    .addField(`⚙️ Bot Komutları ⚙️`, 'kp!ön-ek: `Bot prefix ayarlar.` \nkp!davet: `Bot davet linkini atar.` \nkp!ping: `Botun pingini gösterir.` \nkp!sunucular: `Botun bulunduğu sunucuları gösterir.` \nkp!istatistik: `Botun istatistiklerini gösterir.` ')
    .addField(`🛠 Moderasyon Komutları 🛠`, 'kp!yasakla: `İstediğiniz kişiyi sunucudan yasaklar.` \nkp!at: `İstediğiniz kişiyi sunucudan atar.` \nkp!konuştur: `Susturulmuş bir kişinin susturmasını kaldırmayı sağlar.` \nkp!mod-log-ayarla: `Moderasyon kayıtları kanalını ayarlar.` \nkp!reklam-taraması: `Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar.` \nkp!yavaş-mod: `Bulunduğunuz kanala yazma sınırı (süresi) ekler.` \nkp!sustur-rol-ayarla: `Birisi susturulunca verilecek rolü ayarlar.` \nkp!sustur: `İstediğiniz kişiyi susturur.` \nkp!temizle-üye: `Belirtilen kişinin belirtilen miktarda mesajını siler.` \nkp!temizle: `Belirtilen miktarda mesaj siler.` \nkp!uyar: `İstediğiniz kişiyi uyarır.` \nkp!uyarı-kaldır: `İstediğiniz kişinin uyarılarını kaldırır.` \nkp!uyarılar: `İstediğiniz kişinin uyarılarını gösterir.`')
     .addField(`📌 Kullanıcı Komutları 📌`, 'kp!afk: `AFK olursunuz.` \nkp!atatürk: `Atatürk ün rastgele bir resmini atar.` \nkp!avatar: `Avatarınızı gösterir.` \nkp!havadurumu: `Yazılan konumun hava durumu bilgisini gösterir.` \nkp!hesapla: `Belirtilen işlemi yapar.` \nkp!kitap-ara: `Yazılan kitabın bilgisini gösterir.` \nkp!kullanıcı-bilgi: `İstediğiniz kullanıcı veya komutu kullanan kullanıcı hakkında bilgi verir.` \nkp!romen: `Yazdığınız sayının romen karşılığını yazar.` \nkp!söz: `Rastgele güzel sözler atar.` \nkp!yetkilerim: `Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.` \nkp!çevir: `İstediğiniz yazıyı istediğiniz dile çevirir.`')
    .addField(`🎧 Müzik Komutları 🎧`, 'kp!çal: `İstenilen şarkıyı oynatır.` \nkp!durdur: `Çalan şarkıyı kapatır.` \nkp!duraklat: `Çalan şarkıyı duraklatır.` \nkp!devamet: `Duraklatılmış şarkıyı devam ettirir.` \nkp!tekrar `Çalan şalan şarkıyı tekrar açar.` \nkp!geç `Çalan şarkıyı geçer.`')
    .addField(`🔩 Ayarlar 🔩`, 'kp!caps-engelle: `Büyük harf engelleme sistemini açıp kapatmanızı sağlar.` \nkp!davet-kanal-ayarla: `Davet kanalını ayarlar. ` \nkp!giriş-mesaj-ayarla: `Giriş mesajını değiştirmenizi sağlar. ` \nkp!giriş-çıkış-ayarla: `Giriş çıkış kanalını ayarlar.` \nkp!küfür-engelle: `Küfür engelleme sistemini açıp kapatmanızı sağlar.` \nkp!link-engelle: `Link engelleme sistemini açıp kapatmanızı sağlar.` \nkp!log-ayarla: `Sunucu kayıtları kanalını ayarlar.` \nkp!oto-rol-ayarla: `Sunucuya birisi katıldıgında verilecek rolü ayarlar.` \nkp!sayaç-ayarla: `Sayacı ayarlar.` \nkp!sayaç-kanal-ayarla: `Sayaç kanalını ayarlar.` \nkp!site: `Botun sitesini gösterir` \nkp!tag-ayarla: `Sunucuya katılan üyeye otomatik tag verir.` \nkp!yapımcım: `Botun yapımcısını gösterir.` \nkp!çıkış-mesaj-ayarla: `Çıkış mesajını değiştirmenizi sağlar.`')
    .addField(`👑 Özel komut sistemi 👑`, 'kp!komut-ekle: `Sunucuya özel komut ekler.` \nkp!komut-sil: `Sunucuya özel komutlardan istenilen komutu siler.`')
    .addField(`🕹 Sunucu komutları 🕹`, 'kp!ayarlar: `Sunucu ayarlarını gösterir.` \nkp!davet-sıralaması: `Sunucunuza en çok kullanıcı getirenleri sıralar.` \nkp!emojiler: `Bulunduğunuz sunucudaki emojileri gösterir.` \nkp!oylama: `Sunucunuzda oylama yapmanızı sağlar.` \nkp!roller: `Bulunduğunuz sunucudaki rolleri gösterir.` \nkp!sunucu-bilgi: `Bulunduğunuz sunucu hakkında bilgi verir.`')
    .addField(`💣 Bilgi 💣`, 'Komutlar hakkında bilgi almak için `kp!bilgi <komut adı>` \nBotun Geliştiricisi <@497754710896410654>')
    message.channel.send(serverembed);
}

exports.conf = {
  enabled: false,
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
   