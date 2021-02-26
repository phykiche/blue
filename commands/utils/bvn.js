const {
    MessageEmbed
} = require('discord.js');
const {
    Command
} = require('discord-akairo');


class stCommand extends Command {
    constructor() {
        super("bvn", {
            aliases: ["bvn", "Bienvenu", "Bienvenue", "welcome"],
            description: {
                content: "Description..",
                usage: "Usages..",
                examples: ["$si"],
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
        const testembed = new MessageEmbed()
            .setColor(`#de8500`)
            .setAuthor(message.author.username + " vous souhaites bienvenu(e) ! ", message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();
            message.delete()
            return message.channel.send(testembed)
        
        }
    }
module.exports = stCommand; 
