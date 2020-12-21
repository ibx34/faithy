"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eris_1 = require("eris");
const config_json_1 = __importDefault(require("../../config.json"));
async function banFunc(msg, args) {
    const user = msg.mentions[0];
    let reason = args.slice(1).join(" ");
    if (!reason)
        reason = `[${msg.author.username}#${msg.author.discriminator}] No reason provided.`;
    await msg.channel.guild.kickMember(user.id, 7, `[${msg.author.username}#${msg.author.discriminator}] ` + reason);
    await msg.channel.createMessage({
        "embed": {
            title: "User Banned",
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
    "label": "ban",
    "func": new eris_1.Command("ban", banFunc, {
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
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFuLmpzIiwic291cmNlUm9vdCI6InNyYy8iLCJzb3VyY2VzIjpbImNvbW1hbmRzL21vZGVyYXRpb24vYmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQThDO0FBQzlDLG9FQUF1QztBQUV2QyxLQUFLLFVBQVUsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJO0lBQzVCLE1BQU0sSUFBSSxHQUFXLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDcEMsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDNUMsSUFBSSxDQUFDLE1BQU07UUFBRSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsdUJBQXVCLENBQUE7SUFFaEcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ2pILE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDNUIsT0FBTyxFQUFFO1lBQ0wsS0FBSyxFQUFFLGFBQWE7WUFDcEIsV0FBVyxFQUFFLFNBQVMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLElBQUksQ0FBQyxFQUFFLGNBQWMsTUFBTSxFQUFFO1lBQzNGLEtBQUssRUFBRSxxQkFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1NBQy9CO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQUFBLENBQUM7QUFFRixTQUFTLGtCQUFrQixDQUFDLEdBQUc7SUFDM0IsT0FBTyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyx3REFBd0QsQ0FBQTtBQUMzRixDQUFDO0FBQUEsQ0FBQztBQUNGLFNBQVMsWUFBWSxDQUFDLEdBQUc7SUFDckIsT0FBTyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxrQ0FBa0MsQ0FBQTtBQUNyRSxDQUFDO0FBQUEsQ0FBQztBQUNGLFNBQVMsYUFBYSxDQUFDLEdBQUc7SUFDdEIsT0FBTyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxrREFBa0QsQ0FBQTtBQUNyRixDQUFDO0FBQUEsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHO0lBQ3JCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsTUFBTSxFQUFFLElBQUksY0FBTyxDQUNmLEtBQUssRUFDTCxPQUFPLEVBQ1A7UUFDSSxpQkFBaUIsRUFBRSxrQkFBa0I7UUFDckMsbUJBQW1CLEVBQUUsWUFBWTtRQUNqQyxZQUFZLEVBQUUsYUFBYTtRQUMzQixlQUFlLEVBQUUsSUFBSTtRQUNyQixZQUFZLEVBQUUsSUFBSTtRQUNsQixTQUFTLEVBQUUsSUFBSTtRQUNmLFlBQVksRUFBRTtZQUNWLGFBQWEsRUFBRTtnQkFDWCxZQUFZLEVBQUUsSUFBSTthQUNyQjtTQUNKO0tBQ0osQ0FDSjtDQUNKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kLCBNZW1iZXIsIEVtYmVkIH0gZnJvbSBcImVyaXNcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnLmpzb25cIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGJhbkZ1bmMobXNnLCBhcmdzKSB7XHJcbiAgICBjb25zdCB1c2VyOiBNZW1iZXIgPSBtc2cubWVudGlvbnNbMF1cclxuICAgIGxldCByZWFzb246IHN0cmluZyA9IGFyZ3Muc2xpY2UoMSkuam9pbihcIiBcIilcclxuICAgIGlmICghcmVhc29uKSByZWFzb24gPSBgWyR7bXNnLmF1dGhvci51c2VybmFtZX0jJHttc2cuYXV0aG9yLmRpc2NyaW1pbmF0b3J9XSBObyByZWFzb24gcHJvdmlkZWQuYFxyXG5cclxuICAgIGF3YWl0IG1zZy5jaGFubmVsLmd1aWxkLmtpY2tNZW1iZXIodXNlci5pZCwgNywgYFske21zZy5hdXRob3IudXNlcm5hbWV9IyR7bXNnLmF1dGhvci5kaXNjcmltaW5hdG9yfV0gYCArIHJlYXNvbik7XHJcbiAgICBhd2FpdCBtc2cuY2hhbm5lbC5jcmVhdGVNZXNzYWdlKHtcclxuICAgICAgICBcImVtYmVkXCI6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVXNlciBCYW5uZWRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGBVc2VyOiAke3VzZXIudXNlcm5hbWV9IyR7dXNlci5kaXNjcmltaW5hdG9yfSAoJHt1c2VyLmlkfSlcXG5SZWFzb246ICR7cmVhc29ufWAsXHJcbiAgICAgICAgICAgIGNvbG9yOiBjb25maWcuY29sb3JzLmJsdXJwbGVcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1pc3NpbmdQZXJtaXNzaW9ucyhtc2cpOnN0cmluZyB7XHJcbiAgICByZXR1cm4gYOKEue+4jyAke21zZy5hdXRob3IubWVudGlvbn0sIHlvdSdyZSBtaXNzaW5nIHNvbWUgcGVybWlzc2lvbnMgdG8gcnVuIHRoaXMgY29tbWFuZC5gXHJcbn07XHJcbmZ1bmN0aW9uIGludmFsaWRVc2FnZShtc2cpOnN0cmluZyB7XHJcbiAgICByZXR1cm4gYOKEue+4jyAke21zZy5hdXRob3IubWVudGlvbn0sIHlvdSdyZSBtaXNzaW5nIHNvbWUgYXJndW1lbnRzLmBcclxufTtcclxuZnVuY3Rpb24gZXJyb3JSZXNwb25zZShtc2cpOnN0cmluZyB7XHJcbiAgICByZXR1cm4gYOKEue+4jyAke21zZy5hdXRob3IubWVudGlvbn0sIHRoZXJlIHdhcyBhbiBlcnJvciB3aGlsc3QgcnVubmluZyB0aGUgY29tbWFuZC5gXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5jb21tYW5kID0ge1xyXG4gICAgXCJsYWJlbFwiOiBcImJhblwiLFxyXG4gICAgXCJmdW5jXCI6IG5ldyBDb21tYW5kKFxyXG4gICAgICAgIFwiYmFuXCIsXHJcbiAgICAgICAgYmFuRnVuYyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBlcm1pc3Npb25NZXNzYWdlOiBtaXNzaW5nUGVybWlzc2lvbnMsXHJcbiAgICAgICAgICAgIGludmFsaWRVc2FnZU1lc3NhZ2U6IGludmFsaWRVc2FnZSxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvclJlc3BvbnNlLFxyXG4gICAgICAgICAgICBjYXNlSW5zZW5zaXRpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIGFyZ3NSZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZ3VpbGRPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICByZXF1aXJlbWVudHM6IHtcclxuICAgICAgICAgICAgICAgIFwicGVybWlzc2lvbnNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYmFuTWVtYmVyc1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSJdfQ==