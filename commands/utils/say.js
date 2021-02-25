const {
    Command
} = require('discord-akairo');



class pingCommand extends Command {
    constructor() {
        super("say", {
            aliases: ["say"],
            description: {
                content: "Description..",
                usage: "Usages..",
                examples: ["*say"],
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
        if(!text) {
            message.channel.send("b.say <votre message>")
         } else {
            message.channel.send(`${text}`)
        }
        message.delete()
    }}
module.exports = pingCommand;