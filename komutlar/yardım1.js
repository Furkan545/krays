const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '**Bot Bilgi👑**\n\n\n' + '``k+davet`` Yazarak Botu Davet Edebilirsiniz. \n\nBotun Davet Sunucusuna da Gelmeyi Unutmayın!!. \n[Davet Linki] \n\n\nBotun Geliştiricisi:@Fatih Borlu#9047',
              '**🎉Güncelleme Sonrası🎉**\n\n\n' + '````  h!nsfw-gif = NSFW Özelliklerine ``GIF`` Seçeneği Eklendi. \n``-``  h!desteksunucusu =  Destek Sunucusunun Linkini Atar.',
              '**Eğlence 1**\n\n\n' + '``-``  h!1vs1 @kullanıcı @kullanıcı = Belirlediğin İki Kişiyi Kapıştırır. \n``-``  h!aşkölçer @kullanıcı = Belirlediğin Kullanıcıyla Aşk Durumunu Ölçer. \n ``-``  h!atasözü = Rastgele Bir Atasözü Söyler. \n``-``  h!atatürk = Atatürk GIFI Atar. \n``-``  h!ateş-et @kullanıcı = Belirlediğin Kullanıcıya Ateş Edersin. \n``-``  h!atom-at  = Atom Bombası GIFI Atar. \n``-``  h!balık-tut = Rastgele Balık Tutarsın. \n ``-`` h!bayrak  = TÜRK Bayrağı GIFI Atar. \n``-``  h!cool = Rastgele Cool Resimler Atar. \n``-``  h!csgo (Hesap İsmi) = Belirlediğin CS:GO Hesabının İstatistiklerine Bakarsın. \n``-``  h!çay-doldur = Çay Doldurursun. \n``-``  h!çay-iç = Çay İçersin. \n``-``  h!espri = Rastgele Espri Yapar. \n``-``  h!evlen = Evlenirsin. \n``-``  h!fortnite (Hesap İsmi) = Belirlediğin Fortnite Hesabının İstatistiklerine Bakarsın.',
              '**Eğlence 2**\n\n\n' + '``-``  h!google (Aranacak Kelime) = Yazdığın Kelimeyi Google da Arar. \n``-``  h!hackle @kullanıcı = Belirlediğin Kullanıcıyı Hacklersin. \n ``-``  h!hava-durumu (Şehir) = Belirlediğin Şehrin Hava Durumuna Bakarsın. \n``-``  h!kaçcm = Malafatın Boyunu Ölçer. \n``-``  h!kedi = Rastgele Kedi Resmi Atar. \n``-``  h!kedi-adı  = Rastgele Kedi İsmi Söyler. \n``-``  h!korkut = Bot Seni Korkutur. \n ``-`` h!koş  = Koşarsın. \n``-``  h!köpek = Rastgele Köpek Resimler Atar. \n``-``  h!köpek-adı = Rastgele Köpek İsmi Söyler. \n``-``  h!nahçek = Jahrein in ``Karma İs A Bitch`` GIFINI Atar. \n``-``  h!öp = Öpüşme GIFI Atar. \n``-``  h!piyango = Piyango Çekersiniz. \n``-``  h!playstore (Oyun İsmi) = PlayStore Üzerinden Oyun Ararsınız. \n``-``  h!polis = Polis Çağırırsın.',
              '**Eğlence 3**\n\n\n' + '``-``  h!roblox (Hesap İsmi) = Belirlediğin Roblox Hesabının İstatistiklerine Bakarsın. \n``-``  h!saat = Türkiye Saatine UTF-8 Saatine Bakarsın. \n ``-``  h!sarıl = Sarılma GIFI Atar. \n``-``  h!sigara = Sigara İçersin. \n``-``  h!simit = Simit Yersin. \n``-``  h!sins  = Sins GIFI Atar. \n``-``  h!slots = Slot Oynarsın. \n ``-`` h!söv  = Bot Rastgele Söver. \n``-``  h!stresçarkı = Stres Çarkı Çevirirsin. \n``-``  h!şifre (1/15) = 1/15 Arasında Belirlediğin Sayı Kadar Şifre Oluşturur.',			  
              '**Müzik (BAKIMDA)**\n\n\n' + '``-``  hm!çal = Youtubeda İstediğiniz Bir Şarkıyı Aratır Ve Çalar. \n``-``  hm!duraklat = Oynatılan Şarkıyı Devam Etmek Üzere Durdurur. \n``-``  hm!devam = Duraklatılan Şarkıyı Devam Ettir. \n``-``  hm!geç = Oynatılan Şarkıyı Geçer. \n``-``  hm!sıra = Sıra’da Olan Müzikleri Gösterir. \n``-``  hm!çalan = Oynatılan Müziği Gösterir. \n``-``  hm!ses = Ses Seviyesini Ayarlarsınız.',
'**Bot Bilgi**\n\n\n' + '``-``  h!davet = Bot İle İlgili Bağlantıları Görürsünüz. \n``-``  h!i = Botun İstatistiklerini Gösterir. \n```-`` h!canlıdestek = Bot Sahibi İle İletişime Geçersin.',
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: false,
guildOnly: true,
aliases: ["y"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};