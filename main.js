const Discord = require("discord.js");
const intents = new Discord.Intents();
const client = new Discord.Client({ intents: 32767 });

client.on("messageCreate", (message) => {
    var Mensajes = ["Toi xikita", "Mucho gusto", "Qué tal nwn", "Hola care bola"];
    var Aleatorio = Math.floor(Math.random()*(Mensajes.length));
    var msg= message.content.toLowerCase();

   if(message.author.bot){return;}; if(msg.startsWith( 'hola')){
        message.channel.send(Mensajes[Aleatorio]);

    }

    if (message.mentions.has(client.user)) {
        var Mensajes = ["¿Necesitas algo? nwn", "No, gracias", "¿Cómo estás?", "Todo muy bien por aquí.", "Tranquilo.", "Está bien."];
        var Aleatorio = Math.floor(Math.random()*(Mensajes.length));
        var msg = message.content.toLowerCase();
        message.channel.send(Mensajes[Aleatorio]);

    }
    
});

client.on("messageCreate", (message) => {
        var Mensajes = ["Recuerda nunca inhalar veneno para cucarachas!", "Recuerda no usar demasiado picante en tus empanadas!", "Recuerda tener cuidado en twitter, funan por todo :'!"];
        var Aleatorio = Math.floor(Math.random() * (Mensajes.length));
        var msg = message.content.toLowerCase();

        if(message.author.bot){return;}; if(msg.startsWith( 'consejo')){
        message.channel.send(Mensajes[Aleatorio]);
        

    }


});

client.on("messageCreate", (message) => {
    var msg= message.content.toLowerCase();
   if(message.author.bot){return;}; 
if(msg.startsWith( 'comes')){
        message.channel.send('verga');
    }
if(msg.startsWith( 'verga')){
        message.channel.send('comes');
    }

});

client.on("ready", () => {
    console.log("¡PauBot entró al juego!");
    client.user.setActivity('p! | twitch.tv/Paugamer31')
    type: "WATCHING"
});

const fs = require("fs")
let { readdirSync } = require ("fs")

client.commands = new Discord.Collection();
const commandsFiles = fs.readdirSync("./comandos").filter(file => file.endsWith(".js"))

for (const file of commandsFiles){
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

client.on ("messageCreate", (message) => {

    let prefix  = "p!"

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    if(!message.content.startsWith(prefix)) return;
    

    let usuario = message.mentions.members.first() || message.member;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes (command));
    
    if(cmd){
        cmd.execute(client, message, args)
    }
    if(!cmd){
        if(message.content === prefix) return;
        const embed = new Discord.MessageEmbed()
        .setTitle("Éste comando no existe o no puedo encontrarlo! | <:4216zerotwofacepalm:932130637492654080>")
        .setDescription(`El comando "${command}" no existe. `)
        .setColor("RED")
        .setTimestamp()

        message.channel.send({ embeds: [embed] })
    }

});

client.login("OTMxMzE1OTg3ODg4ODczNTM0.YeCpmg.7iinLf3-14UVjdbzZmnUVt7Jur0");