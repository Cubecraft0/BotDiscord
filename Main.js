const Discord = require("discord.js");
const Config = require("./config/Config.json");
const Client = new Discord.Client({ intents: [] });

Client.on("ready", () => {
  console.log("ready");
});

Client.on(Config.token);
