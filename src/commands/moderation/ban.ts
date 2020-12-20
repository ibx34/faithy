import { Command, Member, GeneratorFunctionReturn } from "eris";

async function ban_func(msg, args) {//,user:Member,reason?:string) {
    const user: Member = msg.mentions[0]
    let reason: string = args.slice(1).join(" ")
    if (!reason) reason = `[${msg.author.username}#${msg.author.discriminator}] No reason provided.`

    await msg.channel.guild.banMember(user.id, 7, `[${msg.author.username}#${msg.author.discriminator}] ` + reason);
    await msg.channel.createMessage(`(!) ${user.username}#${user.discriminator} has banned. (${reason})`);
}

const ban = new Command(
    "ban",
    ban_func,
    {
        caseInsensitive: true,
        guildOnly: true
    }
)

module.exports.command = {
    "label": "ban",
    "func": ban
}