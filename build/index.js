"use strict";
// Supports ES6
var venom = require("venom-bot");
var Whatsapp = require("venom-bot").Whatsapp;
// import { sendReply } from "./helpers/venomFunctions";
// Create the client
venom
    .create({
    session: "session-name",
    multidevice: true, // for version not multidevice use false.(default: true)
})
    .then(function (client) {
    start(client);
})
    .catch(function (error) {
    console.log(error);
    console.log("ERROR OCCURED");
});
var RecievedMsgPermission = false;
// Start the client
function start(client) {
    // This function executes whenever a message is sent or recieved
    client.onAnyMessage(function (message) {
        // variables and constants required to make the data readable
        var data = message.body;
        var botQuery = data.split(" ");
        botQuery[0] = botQuery[0].toLowerCase();
        var queryCutter = botQuery[0] + " ";
        var queryWithDesc = data.substring(queryCutter.length).split("\n"); // Get everything written after the command
        var query = queryWithDesc[0]; // This is used as the option people type after the command
        var queryPart = query.split("-"); // This is used as extra options that people type after the above query
        switch (botQuery[0]) {
            //////////////////////////////////////HI BOT//////////////////////////////////////
            case ".hi":
            case "hibot":
                RecievedMsgPermission = true;
                console.log("in hi");
                var msg_1 = "No need to say hi to me, I am always here, reading every message you send to this guy.😁\nSend 'HelpBot' for commands";
                client
                    .reply(message.chatId, msg_1, message.id.toString())
                    .then(function () {
                    console.log("Reply sent:\n" + msg_1 + "\n------------------------------");
                })
                    .catch(function (erro) {
                    console.error(erro);
                });
                // sendReply(
                //   client,
                //   message.chatId,
                //   "No need to say hi to me, I am always here, reading every message you send to this guy.😁\nSend 'HelpBot' for commands",
                //   message.id.toString(),
                //   "Error when sending: "
                // );
                break;
        }
    });
}
