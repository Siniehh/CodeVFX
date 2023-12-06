import { SapphireClient } from "@sapphire/framework";
import { parse } from './Parser.mjs'
import { GatewayIntentBits } from 'discord.js';
import { token } from './BotToken.mjs'

var messageList = ["kys", "loser", "i hope you die", "coding"];

export default {
    main() {
        const client = new SapphireClient({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })
        client.on('ready', () => {
            console.log("ready");
        })

        client.on('messageCreate', message => {
            if (message.member.id == client.id) {return;}
            message.reply(parse(message.content));
        }) 

        client.login(token)
    }
}