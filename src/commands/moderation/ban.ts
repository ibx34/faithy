import { Command, Member, Embed } from "eris";
import config from "../../config.json";

async function banFunc(msg, args) {
    const user: Member = msg.mentions[0]
    let reason: string = args.slice(1).join(" ")
    if (!reason) reason = `[${msg.author.username}#${msg.author.discriminator}] No reason provided.`

    await msg.channel.guild.kickMember(user.id, 7, `[${msg.author.username}#${msg.author.discriminator}] ` + reason);
    await msg.channel.createMessage({
        "embed": {
            title: "User Banned",
            description: `User: ${user.username}#${user.discriminator} (${user.id})\nReason: ${reason}`,
            color: config.colors.blurple
        },
    })
};

function missingPermissions(msg):string {
    return `ℹ️ ${msg.author.mention}, you're missing some permissions to run this command.`
};
function invalidUsage(msg):string {
    return `ℹ️ ${msg.author.mention}, you're missing some arguments.`
};
function errorResponse(msg):string {
    return `ℹ️ ${msg.author.mention}, there was an error whilst running the command.`
};

module.exports.command = {
    "label": "ban",
    "func": new Command(
        "ban",
        banFunc,
        {
            permissionMessage: missingPermissions,
            invalidUsageMessage: invalidUsage,
            errorMessage: errorResponse,
            caseInsensitive: true,
            argsRequired: true,
            guildOnly: true,
            requirements: {
                "permissions": {
                    "banMembers": true
                },
            },
        }
    )
}