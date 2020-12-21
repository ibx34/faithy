"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eris_1 = require("eris");
const config_json_1 = __importDefault(require("../../config.json"));
async function kickFunc(msg, args) {
    const user = msg.mentions[0];
    let reason = args.slice(1).join(" ");
    if (!reason)
        reason = `[${msg.author.username}#${msg.author.discriminator}] No reason provided.`;
    await msg.channel.guild.kickMember(user.id, 7, `[${msg.author.username}#${msg.author.discriminator}] ` + reason);
    await msg.channel.createMessage({
        "embed": {
            title: "User kicked",
            description: `User: ${user.username}#${user.discriminator} (${user.id})\nReason: ${reason}`,
            color: config_json_1.default.colors.blurple
        },
    });
}
;
function missingPermissions(msg) {
    return `ℹ️ ${msg.author.mention}, you're missing some permissions to run this command.`;
}
;
function invalidUsage(msg) {
    return `ℹ️ ${msg.author.mention}, mother fucker add some god damn args.`;
}
;
function errorResponse(msg) {
    return `ℹ️ ${msg.author.mention}, there was an error whilst running the command.`;
}
;
module.exports.command = {
    "label": "kick",
    "func": new eris_1.Command("kick", kickFunc, {
        permissionMessage: missingPermissions,
        invalidUsageMessage: invalidUsage,
        errorMessage: errorResponse,
        caseInsensitive: true,
        argsRequired: true,
        guildOnly: true,
        requirements: {
            "permissions": {
                "kickMembers": true
            },
        },
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJjb21tYW5kcy9tb2RlcmF0aW9uL2tpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBOEM7QUFDOUMsb0VBQXVDO0FBRXZDLEtBQUssVUFBVSxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUk7SUFDN0IsTUFBTSxJQUFJLEdBQVcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwQyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM1QyxJQUFJLENBQUMsTUFBTTtRQUFFLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSx1QkFBdUIsQ0FBQTtJQUVoRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDakgsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM1QixPQUFPLEVBQUU7WUFDTCxLQUFLLEVBQUUsYUFBYTtZQUNwQixXQUFXLEVBQUUsU0FBUyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLEVBQUUsY0FBYyxNQUFNLEVBQUU7WUFDM0YsS0FBSyxFQUFFLHFCQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87U0FDL0I7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBQUEsQ0FBQztBQUVGLFNBQVMsa0JBQWtCLENBQUMsR0FBRztJQUMzQixPQUFPLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLHdEQUF3RCxDQUFBO0FBQzNGLENBQUM7QUFBQSxDQUFDO0FBQ0YsU0FBUyxZQUFZLENBQUMsR0FBRztJQUNyQixPQUFPLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLHlDQUF5QyxDQUFBO0FBQzVFLENBQUM7QUFBQSxDQUFDO0FBQ0YsU0FBUyxhQUFhLENBQUMsR0FBRztJQUN0QixPQUFPLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLGtEQUFrRCxDQUFBO0FBQ3JGLENBQUM7QUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUc7SUFDckIsT0FBTyxFQUFFLE1BQU07SUFDZixNQUFNLEVBQUUsSUFBSSxjQUFPLENBQ2YsTUFBTSxFQUNOLFFBQVEsRUFDUjtRQUNJLGlCQUFpQixFQUFFLGtCQUFrQjtRQUNyQyxtQkFBbUIsRUFBRSxZQUFZO1FBQ2pDLFlBQVksRUFBRSxhQUFhO1FBQzNCLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsWUFBWSxFQUFFO1lBQ1YsYUFBYSxFQUFFO2dCQUNYLGFBQWEsRUFBRSxJQUFJO2FBQ3RCO1NBQ0o7S0FDSixDQUNKO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQsIE1lbWJlciwgRW1iZWQgfSBmcm9tIFwiZXJpc1wiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcuanNvblwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24ga2lja0Z1bmMobXNnLCBhcmdzKSB7Ly8sdXNlcjpNZW1iZXIscmVhc29uPzpzdHJpbmcpIHtcclxuICAgIGNvbnN0IHVzZXI6IE1lbWJlciA9IG1zZy5tZW50aW9uc1swXVxyXG4gICAgbGV0IHJlYXNvbjogc3RyaW5nID0gYXJncy5zbGljZSgxKS5qb2luKFwiIFwiKVxyXG4gICAgaWYgKCFyZWFzb24pIHJlYXNvbiA9IGBbJHttc2cuYXV0aG9yLnVzZXJuYW1lfSMke21zZy5hdXRob3IuZGlzY3JpbWluYXRvcn1dIE5vIHJlYXNvbiBwcm92aWRlZC5gXHJcblxyXG4gICAgYXdhaXQgbXNnLmNoYW5uZWwuZ3VpbGQua2lja01lbWJlcih1c2VyLmlkLCA3LCBgWyR7bXNnLmF1dGhvci51c2VybmFtZX0jJHttc2cuYXV0aG9yLmRpc2NyaW1pbmF0b3J9XSBgICsgcmVhc29uKTtcclxuICAgIGF3YWl0IG1zZy5jaGFubmVsLmNyZWF0ZU1lc3NhZ2Uoe1xyXG4gICAgICAgIFwiZW1iZWRcIjoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJVc2VyIGtpY2tlZFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFVzZXI6ICR7dXNlci51c2VybmFtZX0jJHt1c2VyLmRpc2NyaW1pbmF0b3J9ICgke3VzZXIuaWR9KVxcblJlYXNvbjogJHtyZWFzb259YCxcclxuICAgICAgICAgICAgY29sb3I6IGNvbmZpZy5jb2xvcnMuYmx1cnBsZVxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWlzc2luZ1Blcm1pc3Npb25zKG1zZyk6c3RyaW5nIHtcclxuICAgIHJldHVybiBg4oS577iPICR7bXNnLmF1dGhvci5tZW50aW9ufSwgeW91J3JlIG1pc3Npbmcgc29tZSBwZXJtaXNzaW9ucyB0byBydW4gdGhpcyBjb21tYW5kLmBcclxufTtcclxuZnVuY3Rpb24gaW52YWxpZFVzYWdlKG1zZyk6c3RyaW5nIHtcclxuICAgIHJldHVybiBg4oS577iPICR7bXNnLmF1dGhvci5tZW50aW9ufSwgbW90aGVyIGZ1Y2tlciBhZGQgc29tZSBnb2QgZGFtbiBhcmdzLmBcclxufTtcclxuZnVuY3Rpb24gZXJyb3JSZXNwb25zZShtc2cpOnN0cmluZyB7XHJcbiAgICByZXR1cm4gYOKEue+4jyAke21zZy5hdXRob3IubWVudGlvbn0sIHRoZXJlIHdhcyBhbiBlcnJvciB3aGlsc3QgcnVubmluZyB0aGUgY29tbWFuZC5gXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5jb21tYW5kID0ge1xyXG4gICAgXCJsYWJlbFwiOiBcImtpY2tcIixcclxuICAgIFwiZnVuY1wiOiBuZXcgQ29tbWFuZChcclxuICAgICAgICBcImtpY2tcIixcclxuICAgICAgICBraWNrRnVuYyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlcm1pc3Npb25NZXNzYWdlOiBtaXNzaW5nUGVybWlzc2lvbnMsLy9cIuKEue+4jyBZb3UncmUgbWlzc2luZyBzb21lIHBlcm1pc3Npb25zIHRvIHJ1biB0aGlzIGNvbW1hbmQuXCIsXHJcbiAgICAgICAgICAgIGludmFsaWRVc2FnZU1lc3NhZ2U6IGludmFsaWRVc2FnZSwvL1wi4oS577iPIE9uZSBvciBtb3JlIGFyZ3VlbW50cyB5b3UgcGFzc2VkIHdlcmUgd3JvbmcuXCIsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JSZXNwb25zZSwgLy9cIuKEue+4jyBUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgcnVubmluZyB0aGUgY29tbWFuZC5cIixcclxuICAgICAgICAgICAgY2FzZUluc2Vuc2l0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBhcmdzUmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGd1aWxkT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVxdWlyZW1lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImtpY2tNZW1iZXJzXCI6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59Il19