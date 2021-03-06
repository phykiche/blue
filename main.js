const {
    AkairoClient,
    CommandHandler,
    InhibitorHandler,
    ListenerHandler,
} = require("discord-akairo");
const {
    join
} = require("path");
const {
    MessageEmbed
} = require("discord.js");


class blues extends AkairoClient {
    constructor() {
        super({
            ownerID: "577878187535761418",
        }, {
            disableEveryone: true,
        });

        this.Commands = new CommandHandler(this, {
            prefix: ".",
            directory: join(__dirname, "./", "commands"),
            aliasReplacement: /-/g,
            allowMention: true,
            defaultCooldown: 5000,
        });
        this.eventHandler = new ListenerHandler(this, {
            directory: "./events/",
        });
        this.eventHandler.loadAll();
        this.Commands.loadAll();

    }
}


const client = new blues();

const moment = require("moment");
require('moment/locale/fr.js');

client.on("guildMemberAdd", async member => {
    let logs2 = member.guild.channels.cache.find(c => c.name == "gohra")
    let embed2 = new MessageEmbed()
        .setThumbnail(member.guild.iconURL())
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL({
            dynamic: true
        }))
        .setTitle(`${member.displayName} vient de rejoindre le serveur !\nNous sommes désormais ${member.guild.memberCount} !`, member.user.displayAvatarURL({
            dynamic: true
        }))
        .setFooter(`Compte crée le : ${moment(member.user.createdTimestamp).format('LLLL')} soit ${moment(member.user.createdTimestamp).startOf('Do').fromNow()}`, member.user.displayAvatarURL({
            dynamic: true
        }))
        .setColor("RED")
        .setTimestamp()
    logs2.send(embed2)
})

client.on("guildMemberRemove", async member => {
    let logs3 = member.guild.channels.cache.find(c => c.name == "gohra")

    let embed3 = new MessageEmbed()
    .setThumbnail(member.guild.iconURL())
    .setColor("#2F3136")
    .setAuthor(`${member.displayName}`, member.user.displayAvatarURL({
        dynamic: true
    }))
    .setTitle(`${member.displayName} vient de nous quitter !\nNous sommes désormais ${member.guild.memberCount} !`, member.user.displayAvatarURL({
        dynamic: true
    }))
    .setFooter(`Gohra`, member.user.displayAvatarURL({
        dynamic: true
    }))
    .setTimestamp()
    logs3.send(embed3)
})

client.on("guildMemberAdd", async member => {
    let logs222 = member.guild.channels.cache.find(c => c.name == "🌍・général")
    let embeddddd = new MessageEmbed()
    .setColor("RED")
    .setDescription(`**Bienvenu(e) ${member.displayName} !**`, member.user.displayAvatarURL({
            dynamic: true
        }))
    .setFooter(`Nous sommes ${member.guild.memberCount} membres `)
    logs222.send(embeddddd)
})

client.once("guildCreate", (guild) => {
    const embed = new MessageEmbed()
    .setTitle("Merci d'avoir ajouté Gohra à votre serveur !")
    .setColor("RED")
    .setDescription("**prefix actuel est ```.``` vous pouvez aussi mentionner le bot pour executer des commandes, exemple : \n```@BLUΞS help```\nN'oubliez pas d'executer la commande b.setup qui activera les logs, cela vous permettera d'être au courant de plusieur chose commme l'arriver ou le depart de membre sur le serveur, Merci d'utilisé BLUΞS !**")
    .setImage("https://discordapp.com/assets/c7d26cb2902f21277d32ad03e7a21139.gif")
    .setFooter("Gohra", client.user.avatarURL());
    guild.owner.send(embed);
})


client.on("guildMemberAdd", async member => {
    let logs222 = member.guild.channels.cache.find(c => c.name == "💬・général")
    let embedddddddddd = new MessageEmbed()
    .setColor("RED")
    .setDescription(`**Bienvenu(e) ${member.displayName} !**`, member.user.displayAvatarURL({
            dynamic: true
        }))
    logs222.send(embedddddddddd)
})


const PORT = process.env.PORT || 5001;
client.on(PORT, () => console.log(`Server is listening on port ${PORT}...`));

client.login(process.env.TOKEN);
