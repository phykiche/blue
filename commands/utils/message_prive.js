const {
    Command
} = require('discord-akairo');

const {
    MessageEmbed
} = require('discord.js');

class mpCommand extends Command {
    constructor() {
        super("mp", {
            aliases: ["mp", "mprive", "dm"],
            description: {
                content: "Description..",
                usage: "Usages..",
                examples: ["b.mp"],
            },
            clientPermissions: ["Envoyer des embeds"],
            args: [{
                id: "text",
                type: "string",
                match: "content",
            }, ],
            category: "utils",
        });
    }

    async exec(message, {
        text
    }) {

        const args = message.content.split(" ").slice(3);
        const member = message.mentions.members.first();
        const logss = message.guild.channels.cache.find(
            (c) => c.name === "blue-logs")

        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
            message.channel.send(`**Vous n'avez pas la permission d'exécuter cette commande !**`)
        }
        if (!member) {
            message.channel.send("b.mp <membre> <votre_message>")
        }
        if (!args) {
            message.channel.send("b.mp <membre> <votre_message>")
        } else {
            member.send(args.join(" ").replace(member, " "))
        }
        if (!logss) {
        } else {
            let embed = new MessageEmbed()
                .setDescription(`**:information_source: ${message.author.username} a envoyé un messages privé a ${member} depuis le salon ${message.channel} .**`)
                .setFooter("BLUΞS", message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor("#2F3136")
                .setTimestamp();
            logss.send(embed)
        }

        message.channel.send(`Message envoyer avec succés à ${member} !`)
    }
}
module.exports = mpCommand;