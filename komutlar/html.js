const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.name === "✦─Web Script─✦"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send(":no_entry: Zaten bu role sahipsin :/")
  message.member.addRole(role);
  message.channel.send(`:white_check_mark: WebScript rolü başarıyla verildi :)`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['webscript','html'],
  permLevel: 0
};

exports.help = {
  name: 'html',
  description: 'Web Script kanallarına erişim sağlar.',
  usage: 'html'
};