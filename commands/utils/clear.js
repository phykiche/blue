const {
    Command
} = require('discord-akairo');
const {
    MessageEmbed
} = require('discord.js');

class clearCommand extends Command {
    constructor() {
        super("clear", {
            aliases: ["clear", "purge", "delete"],
            description: {
                content: "Supprimer des messages.",
                usage: "clear <0-100>",
                examples: ["clear 5"],
            },
            clientPermissions: ["Supprimer des messages."],
            args: [{
                id: "args",
                type: "string",
                match: "content"
            }, ],
            category: "utils",
        });
    }

    async exec(message, {
        command
    }) {

        const logss = message.guild.channels.cache.find(
            (c) => c.name === "blue-logs")

        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(`**Vous n'avez pas la permission d'exécuter cette commande !**`);
        } else {
            const args = message.content.split(" ").slice(1);
            if (!args[0]) {
                return message.channel.send(`**Vous n'avez pas précisé le nombre de messages à supprimés**`)
            }
            message.channel.bulkDelete(args[0]).then(() => {
                return message.channel.send(`**:information_source: ${message.author.username} a supprimés ${args[0]} messages !**`);
            })
            if (!logss)
                return
            let embedd = new MessageEmbed()
                .setDescription(`**:information_source: ${message.author.username} a supprimés ${args[0]} messages dans le salon ${message.channel}  !**`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor("#2F3136")
                .setFooter("BLUΞS", message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setTimestamp();
            logss.send(embedd)

        }
    }
}
module.exports = clearCommand;