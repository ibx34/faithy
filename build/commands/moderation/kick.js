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
    return `ℹ️ ${msg.author.mention}, you're missing some arguments.`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiJzcmMvIiwic291cmNlcyI6WyJjb21tYW5kcy9tb2RlcmF0aW9uL2tpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBOEM7QUFDOUMsb0VBQXVDO0FBRXZDLEtBQUssVUFBVSxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUk7SUFDN0IsTUFBTSxJQUFJLEdBQVcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwQyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM1QyxJQUFJLENBQUMsTUFBTTtRQUFFLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSx1QkFBdUIsQ0FBQTtJQUVoRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDakgsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM1QixPQUFPLEVBQUU7WUFDTCxLQUFLLEVBQUUsYUFBYTtZQUNwQixXQUFXLEVBQUUsU0FBUyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLEVBQUUsY0FBYyxNQUFNLEVBQUU7WUFDM0YsS0FBSyxFQUFFLHFCQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87U0FDL0I7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDO0FBQUEsQ0FBQztBQUVGLFNBQVMsa0JBQWtCLENBQUMsR0FBRztJQUMzQixPQUFPLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLHdEQUF3RCxDQUFBO0FBQzNGLENBQUM7QUFBQSxDQUFDO0FBQ0YsU0FBUyxZQUFZLENBQUMsR0FBRztJQUNyQixPQUFPLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLGtDQUFrQyxDQUFBO0FBQ3JFLENBQUM7QUFBQSxDQUFDO0FBQ0YsU0FBUyxhQUFhLENBQUMsR0FBRztJQUN0QixPQUFPLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLGtEQUFrRCxDQUFBO0FBQ3JGLENBQUM7QUFBQSxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUc7SUFDckIsT0FBTyxFQUFFLE1BQU07SUFDZixNQUFNLEVBQUUsSUFBSSxjQUFPLENBQ2YsTUFBTSxFQUNOLFFBQVEsRUFDUjtRQUNJLGlCQUFpQixFQUFFLGtCQUFrQjtRQUNyQyxtQkFBbUIsRUFBRSxZQUFZO1FBQ2pDLFlBQVksRUFBRSxhQUFhO1FBQzNCLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsWUFBWSxFQUFFO1lBQ1YsYUFBYSxFQUFFO2dCQUNYLGFBQWEsRUFBRSxJQUFJO2FBQ3RCO1NBQ0o7S0FDSixDQUNKO0NBQ0osQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQsIE1lbWJlciwgRW1iZWQgfSBmcm9tIFwiZXJpc1wiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcuanNvblwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24ga2lja0Z1bmMobXNnLCBhcmdzKSB7XHJcbiAgICBjb25zdCB1c2VyOiBNZW1iZXIgPSBtc2cubWVudGlvbnNbMF1cclxuICAgIGxldCByZWFzb246IHN0cmluZyA9IGFyZ3Muc2xpY2UoMSkuam9pbihcIiBcIilcclxuICAgIGlmICghcmVhc29uKSByZWFzb24gPSBgWyR7bXNnLmF1dGhvci51c2VybmFtZX0jJHttc2cuYXV0aG9yLmRpc2NyaW1pbmF0b3J9XSBObyByZWFzb24gcHJvdmlkZWQuYFxyXG5cclxuICAgIGF3YWl0IG1zZy5jaGFubmVsLmd1aWxkLmtpY2tNZW1iZXIodXNlci5pZCwgNywgYFske21zZy5hdXRob3IudXNlcm5hbWV9IyR7bXNnLmF1dGhvci5kaXNjcmltaW5hdG9yfV0gYCArIHJlYXNvbik7XHJcbiAgICBhd2FpdCBtc2cuY2hhbm5lbC5jcmVhdGVNZXNzYWdlKHtcclxuICAgICAgICBcImVtYmVkXCI6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBraWNrZWRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBVc2VyOiAke3VzZXIudXNlcm5hbWV9IyR7dXNlci5kaXNjcmltaW5hdG9yfSAoJHt1c2VyLmlkfSlcXG5SZWFzb246ICR7cmVhc29ufWAsXHJcbiAgICAgICAgICAgIGNvbG9yOiBjb25maWcuY29sb3JzLmJsdXJwbGVcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1pc3NpbmdQZXJtaXNzaW9ucyhtc2cpOnN0cmluZyB7XHJcbiAgICByZXR1cm4gYOKEue+4jyAke21zZy5hdXRob3IubWVudGlvbn0sIHlvdSdyZSBtaXNzaW5nIHNvbWUgcGVybWlzc2lvbnMgdG8gcnVuIHRoaXMgY29tbWFuZC5gXHJcbn07XHJcbmZ1bmN0aW9uIGludmFsaWRVc2FnZShtc2cpOnN0cmluZyB7XHJcbiAgICByZXR1cm4gYOKEue+4jyAke21zZy5hdXRob3IubWVudGlvbn0sIHlvdSdyZSBtaXNzaW5nIHNvbWUgYXJndW1lbnRzLmBcclxufTtcclxuZnVuY3Rpb24gZXJyb3JSZXNwb25zZShtc2cpOnN0cmluZyB7XHJcbiAgICByZXR1cm4gYOKEue+4jyAke21zZy5hdXRob3IubWVudGlvbn0sIHRoZXJlIHdhcyBhbiBlcnJvciB3aGlsc3QgcnVubmluZyB0aGUgY29tbWFuZC5gXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5jb21tYW5kID0ge1xyXG4gICAgXCJsYWJlbFwiOiBcImtpY2tcIixcclxuICAgIFwiZnVuY1wiOiBuZXcgQ29tbWFuZChcclxuICAgICAgICBcImtpY2tcIixcclxuICAgICAgICBraWNrRnVuYyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlcm1pc3Npb25NZXNzYWdlOiBtaXNzaW5nUGVybWlzc2lvbnMsXHJcbiAgICAgICAgICAgIGludmFsaWRVc2FnZU1lc3NhZ2U6IGludmFsaWRVc2FnZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvclJlc3BvbnNlLFxyXG4gICAgICAgICAgICBjYXNlSW5zZW5zaXRpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGFyZ3NSZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZ3VpbGRPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICByZXF1aXJlbWVudHM6IHtcclxuICAgICAgICAgICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwia2lja01lbWJlcnNcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICApXHJcbn0iXX0=