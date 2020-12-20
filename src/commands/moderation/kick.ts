import { Command, Member, GeneratorFunctionReturn } from "eris";

async function kick_func(msg, args) {//,user:Member,reason?:string) {
    const user: Member = msg.mentions[0]
    let reason: string = args.slice(1).join(" ")
    if (!reason) reason = `[${msg.author.username}#${msg.author.discriminator}] No reason provided.`

    await msg.channel.guild.kickMember(user.id, 7, `[${msg.author.username}#${msg.author.discriminator}] ` + reason);
    await msg.channel.createMessage(`(!) ${user.username}#${user.discriminator} has kicked. (${reason})`);
}

const kick = new Command(
    "kick",
    kick_func,
    {
        caseInsensitive: true,
        guildOnly: true
    }
)

module.exports.command = {
    "label": "kick",
    "func": kick
}