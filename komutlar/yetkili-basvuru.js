const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let terfiler = guild.channels.find('name', '°•yetkili-başvuru•°');
  if (!terfiler) return message.reply('`°•yetkili-başvuru•°` kanalını bulamıyorum.');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('\n👑》İsminiz Ve Yaşınız《👑,\n👑》Istediniz Yetki《👑,\n👑》Kaç Saat Aktif Olacağiniz《👑,\n👑》Kendinizi Etiketleyin《👑.');
  if (message.mentions.users.size < 1) return message.reply('Isminizi Etiketleyin.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
	.setThumbnail("https://i.hizliresim.com/mJ20o2.jpg")
    .setTimestamp()
    .addField('Durum:', 'Bekleniyor')
    .addField('Gonderen Kisi:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Bilgiler', reason);
	
	return guild.channels.get(terfiler.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['basvuru'],
  permLevel: 0
};

exports.help = {
  name: 'başvuru',
  description: 'Kullanıcıyı terfi ettirir.',
  usage: 'başvuru [kullanıcı]'
};