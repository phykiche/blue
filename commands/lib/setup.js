const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

class setupCommand extends Command {
  constructor() {
    super("setup", {
      aliases: ["setup"],
      description: {
        content: "Description..",
        usage: "Usages..",
        examples: [".setup"],
      },
      clientPermissions: ["Envoyer des embeds"],
      category: "utils",
    });
  }
  async exec(message) {
    let channel = message.guild.channels.cache.find(
      (c) => c.name === "blue-logs"
    );

    if (channel) {
      let embedd = new MessageEmbed()
        .setColor("#75b1ff")
        .setTitle("ℹ️ le bot est déja initialiser sur ce serveur ! ")
        .setFooter(`${this.client.user.username}`, this.client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp();

      return message.channel.send(embedd);
    } else {
      let embed = new MessageEmbed()
        .setColor("#75b1ff")
        .setTitle("ℹ️ bot initialiser avec succés ! ")
        .setFooter(`${this.client.user.username}`, this.client.user.displayAvatarURL({ dynamic: true}))
        .setTimestamp();

      message.guild.channels
        .create("blue-logs", {
          type: "text",
          permissionOverwrites: [
            {
              id: message.channel.guild.roles.everyone,
              deny: ["VIEW_CHANNEL"],
            },
          ],
        })
        .then(message.channel.send(embed));
    }
  }
}
module.exports = setupCommand;