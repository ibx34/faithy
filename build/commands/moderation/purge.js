"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eris_1 = require("eris");
async function purgeFunc(msg, args) {
    let amount = args[0];
    if (!amount)
        amount = -1;
    try {
        msg.channel.purge(amount).then(purge => {
            msg.channel.createMessage(`:ok_hand: I purged ${purge} messages.`);
        });
    }
    catch (e) {
        return await msg.channel.createMessage(`Something happened that caused me to fail...\`\`\`${e}\`\`\``);
    }
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
    "label": "purge",
    "func": new eris_1.Command("purge", purgeFunc, {
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
    })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsiY29tbWFuZHMvbW9kZXJhdGlvbi9wdXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QztBQUc5QyxLQUFLLFVBQVUsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJO0lBQzlCLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUU1QixJQUFJLENBQUMsTUFBTTtRQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUV4QixJQUFJO1FBQ0EsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHNCQUFzQixLQUFLLFlBQVksQ0FBQyxDQUFBO1FBQ3RFLENBQUMsQ0FBQyxDQUFBO0tBQ0w7SUFBQyxPQUFNLENBQUMsRUFBRTtRQUNQLE9BQU8sTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxREFBcUQsQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUN6RztBQUNMLENBQUM7QUFBQSxDQUFDO0FBRUYsU0FBUyxrQkFBa0IsQ0FBQyxHQUFHO0lBQzNCLE9BQU8sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sd0RBQXdELENBQUE7QUFDM0YsQ0FBQztBQUFBLENBQUM7QUFDRixTQUFTLFlBQVksQ0FBQyxHQUFHO0lBQ3JCLE9BQU8sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sa0NBQWtDLENBQUE7QUFDckUsQ0FBQztBQUFBLENBQUM7QUFDRixTQUFTLGFBQWEsQ0FBQyxHQUFHO0lBQ3RCLE9BQU8sTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sa0RBQWtELENBQUE7QUFDckYsQ0FBQztBQUFBLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRztJQUNyQixPQUFPLEVBQUUsT0FBTztJQUNoQixNQUFNLEVBQUUsSUFBSSxjQUFPLENBQ2YsT0FBTyxFQUNQLFNBQVMsRUFDVDtRQUNJLGlCQUFpQixFQUFFLGtCQUFrQjtRQUNyQyxtQkFBbUIsRUFBRSxZQUFZO1FBQ2pDLFlBQVksRUFBRSxhQUFhO1FBQzNCLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsWUFBWSxFQUFFO1lBQ1YsYUFBYSxFQUFFO2dCQUNYLGdCQUFnQixFQUFFLElBQUk7YUFDekI7U0FDSjtLQUNKLENBQ0o7Q0FDSixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCwgTWVtYmVyLCBFbWJlZCB9IGZyb20gXCJlcmlzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy5qc29uXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwdXJnZUZ1bmMobXNnLCBhcmdzKSB7XHJcbiAgICBsZXQgYW1vdW50OiBudW1iZXIgPSBhcmdzWzBdXHJcblxyXG4gICAgaWYgKCFhbW91bnQpIGFtb3VudCA9IC0xXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBtc2cuY2hhbm5lbC5wdXJnZShhbW91bnQpLnRoZW4ocHVyZ2UgPT4ge1xyXG4gICAgICAgICAgICBtc2cuY2hhbm5lbC5jcmVhdGVNZXNzYWdlKGA6b2tfaGFuZDogSSBwdXJnZWQgJHtwdXJnZX0gbWVzc2FnZXMuYClcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IG1zZy5jaGFubmVsLmNyZWF0ZU1lc3NhZ2UoYFNvbWV0aGluZyBoYXBwZW5lZCB0aGF0IGNhdXNlZCBtZSB0byBmYWlsLi4uXFxgXFxgXFxgJHtlfVxcYFxcYFxcYGApXHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtaXNzaW5nUGVybWlzc2lvbnMobXNnKTpzdHJpbmcge1xyXG4gICAgcmV0dXJuIGDihLnvuI8gJHttc2cuYXV0aG9yLm1lbnRpb259LCB5b3UncmUgbWlzc2luZyBzb21lIHBlcm1pc3Npb25zIHRvIHJ1biB0aGlzIGNvbW1hbmQuYFxyXG59O1xyXG5mdW5jdGlvbiBpbnZhbGlkVXNhZ2UobXNnKTpzdHJpbmcge1xyXG4gICAgcmV0dXJuIGDihLnvuI8gJHttc2cuYXV0aG9yLm1lbnRpb259LCB5b3UncmUgbWlzc2luZyBzb21lIGFyZ3VtZW50cy5gXHJcbn07XHJcbmZ1bmN0aW9uIGVycm9yUmVzcG9uc2UobXNnKTpzdHJpbmcge1xyXG4gICAgcmV0dXJuIGDihLnvuI8gJHttc2cuYXV0aG9yLm1lbnRpb259LCB0aGVyZSB3YXMgYW4gZXJyb3Igd2hpbHN0IHJ1bm5pbmcgdGhlIGNvbW1hbmQuYFxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuY29tbWFuZCA9IHtcclxuICAgIFwibGFiZWxcIjogXCJwdXJnZVwiLFxyXG4gICAgXCJmdW5jXCI6IG5ldyBDb21tYW5kKFxyXG4gICAgICAgIFwicHVyZ2VcIixcclxuICAgICAgICBwdXJnZUZ1bmMsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwZXJtaXNzaW9uTWVzc2FnZTogbWlzc2luZ1Blcm1pc3Npb25zLFxyXG4gICAgICAgICAgICBpbnZhbGlkVXNhZ2VNZXNzYWdlOiBpbnZhbGlkVXNhZ2UsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JSZXNwb25zZSxcclxuICAgICAgICAgICAgY2FzZUluc2Vuc2l0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBndWlsZE9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmVtZW50czoge1xyXG4gICAgICAgICAgICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYW5hZ2VNZXNzYWdlc1wiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSJdfQ==