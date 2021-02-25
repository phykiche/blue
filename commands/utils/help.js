const {
    Command
} = require('discord-akairo');
const {
    MessageEmbed
} = require('discord.js');

class helpCommand extends Command {
    constructor() {
        super("help", {
            aliases: ["help", "aide"],
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
        let embed = new MessageEmbed()
        .setTitle(`Commandes de ${this.client.user.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`[inviter le bot](https://discord.com/api/oauth2/authorize?client_id=811667347718799360&permissions=8&scope=bot) • [bio](https://discord.bio/p/phyki)\n __**Admin :**__\nsetup : creer un salon logs.  \n __**Modération :**__\nmprive : Envoie un message privé à l'utilisateur(e) mentionné(e). \n __**Utiles :**__\n clear : supprime les messages (entre 1 à 100).\nsay : Communique via le bot discord.\navatar : affiche de la photo de profil de l'utilisateur mentionné. \n __**Fun :**__\n rien`)
        .setColor("#75b1ff")
        .setFooter(`prefix de ${this.client.user.username} : b.`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
      message.channel.send(embed)
    }
}
module.exports = helpCommand;