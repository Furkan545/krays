const Discord = require('discord.js')
const id = '441169716547944448'

exports.run = (client, message, args) => {
    const bildiri = args.join(" ")
    if (!args[0]) {
        const embed = new Discord.RichEmbed()
            .setDescription(`Lütfen geçerli bir bildiri yazın. Eğer boş/gereksiz bildiri gönderirseniz bottan engellenirsiniz.`)
            .setTimestamp()
            .setColor("RANDOM")
        message.channel.send({embed})
        return
    }
  
    const embed = new Discord.RichEmbed()
        .setDescription(`Bildiriniz başarıyla bot geliştiricisine iletilmiştir <a:success:498218308366237716>`)
        .setTimestamp()
        .setColor("RANDOM")
    message.channel.send({embed})
    
   var TavsiyeHook = new Discord.WebhookClient("559830846417403904", "6SiyTczgOIlj6VQ39AU_Tn6nEGa1I8dC8OuoViBdL68LWwjVj5yoTQqBsk1DfwK42BRn")

    .setColor("0x36393F")
       .addField(`Bildiren Kişi`, message.author.tag)
            .addField(`Bildirinin Yapıldığı Sunucu`, message.guild.name)
            .addField(`Bildirinin Yapıldığı Sunucunun Davet Linki`, invite.url)
            .addField(`Bildiri`, bildiri)
            .setColor("RANDOM")
            .setTimestamp()
    TavsiyeHook.send(embed)
};

    

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rapor', 'raporla', 'tavsiye', 'tavsiyeet', 'tavsiyet', 'öner', 'öneri', 'bildir'],
    permLevel: 0,
  kategori: "iletisim"
}

exports.help = {
    name: 'tavsiye',
    description: 'Bot geliştiricisine hataları raporlamayı/tavsiye vermeyi/öneri iletmeyi sağlar.',
    usage: 'tavsiye [bildiri]'
}