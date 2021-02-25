const {
    MessageEmbed
} = require("discord.js");
const {
    Command
} = require('discord-akairo');

class kickCommand extends Command {
    constructor() {
        super("kick", {
            aliases: ["kick"],
            description: {
                content: "Description..",
                usage: "Usages..",
                examples: ["help"],
            },
            clientPermissions: ["Envoyer des embeds"],
            args: [{
                id: "args",
                type: "string",
                match: "content"
            }, ],
            category: "tools",
        })
    }
    async exec(message, {
        args
    }) {


        const member = message.mentions.members.first();
        const reason = message.content.split(" " || 'aucune raison specifiée.' ).slice(2);

        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send("Vous n'avez pas la permission d'exécuter cette commande.")
        } else {
            if (!member) {
                return message.channel.send(" Vous devez préciser un utilisateur à exclure.")
            } else {
                if (member.id === message.guild.ownerID) {
                    return message.channel.send(" Vous ne pouvez pas exclure le propriétaire du serveur.")
                } else {
                    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) {
                        return message.channel.send(" Vous ne pouvez pas exclure cet utilisateur.")
                    } else {
                        if (!member.kickable) {
                            return message.channel.send("Le bot ne peut pas exclure cet utilisateur.")
                        }
                    }
                }
            }
        }

        if (member.kickable) {
            const bEmbed = new MessageEmbed()
                .setColor('RED')
                .setDescription(`bonjour, tu viens de te faire kick du serveur ${message.guild.name} pour : ${reason}`)
                .setTimestamp()
            member.send(bEmbed)
            await member.kick()
            message.channel.send(`${member} a etait exclu avec succes !`)


            const logs = message.guild.channels.cache.find(
                (c) => c.name === "blue-logs")

            if (!logs)
                return
            const bbEmbed = new MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .setColor('RED')
                .setAuthor(`${member.user.username}`, member.user.displayAvatarURL({ dynamic: true }))
                .setDescription(`rien`)
                .setFooter('logs mako')

                .setTimestamp()
            logs.send(bbEmbed)
        }

    }

}
module.exports = kickCommand;