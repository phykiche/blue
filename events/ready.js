const {

    Listener

} = require("discord-akairo");

class ReadyEvent extends Listener {

    constructor() {

        super("ready", {

            emitter: "client",

            event: "ready",

        });

    }

    async exec() {

        const statues = [

            ` gohra • .help`,

            ` Sur ${this.client.guilds.cache.size} serveurs ! `,

            " https://www.lidl.fr/ "

        ]

        let i = 0

        setInterval(() => {

            this.client.user.setActivity(statues[i], {

                url: 'https://twitch.tv/your/stream/here',

                type: 'STREAMING'

            });

            i = ++i % statues.length

        }, 1e4)

        console.log(`La connection au compte ${this.client.user.tag} à été faite ✅`)

        console.log(`Je suis actuellement sur ${this.client.guilds.cache.size} serveur(s).`)

        console.log(`Je suis ${this.client.user.tag} `)

    };

}

module.exports = ReadyEvent;
