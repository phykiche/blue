const {
    Listener
} = require("discord-akairo");

class messageEvent extends Listener {
    constructor() {
        super("message", {
            emitter: "client",
            event: "message",
        });
    }

    async exec(message) {
        if (message.author.bot) return;
    }
}

module.exports = messageEvent;