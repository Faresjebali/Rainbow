const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  client.user.setActivity('BlazePVP');
});
client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('456895943175045142').roles.find('name', 'Rainbow').edit({color: 'RANDOM'})
    },10000);
});


client.login('NDU5MTQ1OTM5NDA0NDU1OTM2.Dgx81A.9mbw-PW90ftxjEhBgxZgh4c1BTE');
