import { Command, Member, Embed } from "eris";
import config from "../../config.json";

async function purgeFunc(msg, args) {
    let amount: number = args[0]

    if (!amount) amount = -1

    try {
        msg.channel.purge(amount).then(purge => {
            msg.channel.createMessage(`:ok_hand: I purged ${purge} messages.`)
        })
    } catch(e) {
        return await msg.channel.createMessage(`Something happened that caused me to fail...\`\`\`${e}\`\`\``)
    }
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
    "label": "purge",
    "func": new Command(
        "purge",
        purgeFunc,
        {
            permissionMessage: missingPermissions,
            invalidUsageMessage: invalidUsage,
            errorMessage: errorResponse,
            caseInsensitive: true,
            guildOnly: true,
            requirements: {
                "permissions": {
                    "manageMessages": true
                },
            },
        }
    )
}