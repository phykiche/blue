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
            prefix: "b.",
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
const config = require('./config.json')

const moment = require("moment");
require('moment/locale/fr.js');

client.on("guildMemberAdd", async member => {
    let logs2 = member.guild.channels.cache.find(c => c.name == "blue-logs")
    let embed2 = new MessageEmbed()
        .setThumbnail(member.guild.iconURL())
        .setAuthor(`${member.displayName}`, member.user.displayAvatarURL({
            dynamic: true
        }))
        .setTitle(`${member.displayName} vient de rejoindre le serveur !\nGénial !`, member.user.displayAvatarURL({
            dynamic: true
        }))
        .setFooter(`Compte crée le : ${moment(member.user.createdTimestamp).format('LLLL')} soit ${moment(member.user.createdTimestamp).startOf('Do').fromNow()}`, member.user.displayAvatarURL({
            dynamic: true
        }))
        .setColor("#75b1ff")
        .setTimestamp()
    logs2.send(embed2)
})

client.on("guildMemberRemove", async member => {
    let logs3 = member.guild.channels.cache.find(c => c.name == "blue-logs")

    let embed3 = new MessageEmbed()
    .setThumbnail(member.guild.iconURL())
    .setColor("#2F3136")
    .setAuthor(`${member.displayName}`, member.user.displayAvatarURL({
        dynamic: true
    }))
    .setTitle(`${member.displayName} vient de nous quitter ;( !\npas cool... \nsurment un idiot.. `, member.user.displayAvatarURL({
        dynamic: true
    }))
    .setFooter(`BLUΞS`, member.user.displayAvatarURL({
        dynamic: true
    }))
    .setTimestamp()
    logs3.send(embed3)
})

client.on("guildMemberAdd", async member => {
    let logs222 = member.guild.channels.cache.find(c => c.name == "🌎・général")
    logs222.send(`<a:LeT_welcomeG1:813389092145725452><a:LeT_welcomeG2:813389022985715723>** Bienvenu(e) ${member} !  N'hésite pas à aller au salon **<#811356531245056040>**, et passe un bon moment.**`)
})

client.once("guildCreate", (guild) => {
    const embed = new MessageEmbed()
    .setTitle("Merci d'avoir ajouté BLUΞS à votre serveur !")
    .setColor("#75b1ff")
    .setFooter("BLUΞS", client.user.avatarURL());
    guild.owner.send(embed);
})


client.login(process.env.TOKEN);