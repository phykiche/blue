const {
    Command
} = require('discord-akairo');
const {
    MessageEmbed
} = require('discord.js');

class helpCommand extends Command {
    constructor() {
        super("avatar", {
            aliases: ["avatar", "pp"],
            description: {
                content: "",
                usage: "help",
                examples: ["help"],
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

        const prefix = "b."
        const member = message.mentions.users.first();

        if (!member) {
            let embed1 = new MessageEmbed()
                .setTitle(`Votre photo de profil`)
                .setDescription(`l'Image ne s'affiche pas ? [Clique ici.](${message.author.displayAvatarURL({
                    dynamic: true,
                    size: 1024
                })})`)
                .setImage(message.author.displayAvatarURL({
                    dynamic: true,
                    size: 1024
                }))
                .setColor("RED")
                .setFooter(`Gohra`, message.author.displayAvatarURL({
                    dynamic: true,
                    size: 1024
                }))
                .setTimestamp();
            return message.channel.send(embed1)
        }


        if (member) {
        let embed = new MessageEmbed()
            .setTitle(`Photo de profil de ${member.username}`)
            .setDescription(`l'Image ne s'affiche pas ? [Clique ici.](${message.author.displayAvatarURL({
                dynamic: true,
                size: 1024
            })})`)
            .setImage(member.displayAvatarURL({
                dynamic: true,
                size: 1024
            }))
            .setColor("RED")
            .setFooter(`Gohra`, member.displayAvatarURL({
                dynamic: true,
                size: 1024
            }))
            .setTimestamp();
            return message.channel.send(embed)
        }
    }
}
module.exports = helpCommand;
