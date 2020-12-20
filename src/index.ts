import { Command, CommandClient } from "eris";
import { readdirSync } from 'fs';
import { platform } from "os";
import { sep } from "path";
import config from "./config.json";

const eris = new CommandClient(config.token, null, {
    prefix: config.prefix,
    defaultHelpCommand: true
})

let list_commands = {};
readdirSync(`./build/${config.commands_path}`).forEach(dirs => {
    const commands = readdirSync(`./build/${config.commands_path}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));
    for (const file of commands) {
        const pull = require(`./${config.commands_path}/${dirs}/${file}`);
        list_commands[pull.command.label] = pull.command.func;
    };
});

const commands = list_commands;
eris.commands = commands;

eris.on("ready", () => {
    console.log("(!) Bot Online.");
});
eris.connect();

console.log("(!) Bot connected.");
