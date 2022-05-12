// Supports ES6
const venom = require("venom-bot");
const { Whatsapp } = require("venom-bot");
// import { sendReply } from "./helpers/venomFunctions";
// Create the client
venom
  .create({
    session: "session-name", //name of session
    multidevice: true, // for version not multidevice use false.(default: true)
  })
  .then((client: any) => {
    start(client);
  })
  .catch((error: any) => {
    console.log(error);
    console.log("ERROR OCCURED");
  });
let RecievedMsgPermission = false;
// Start the client
function start(client: any) {
  // This function executes whenever a message is sent or recieved
  client.onAnyMessage(
    (message: { body: any; chatId: any; id: { toString: () => any } }) => {
      // variables and constants required to make the data readable
      const data = message.body;
      const botQuery = data.split(" ");
      botQuery[0] = botQuery[0].toLowerCase();
      const queryCutter = botQuery[0] + " ";
      const queryWithDesc = data.substring(queryCutter.length).split("\n"); // Get everything written after the command
      let query = queryWithDesc[0]; // This is used as the option people type after the command
      const queryPart = query.split("-"); // This is used as extra options that people type after the above query

      switch (botQuery[0]) {
        //////////////////////////////////////HI BOT//////////////////////////////////////
        case ".hi":
        case "hibot":
          RecievedMsgPermission = true;
          console.log("in hi");
          const msg =
            "No need to say hi to me, I am always here, reading every message you send to this guy.😁\nSend 'HelpBot' for commands";

          client
            .reply(message.chatId, msg, message.id.toString())
            .then(() => {
              console.log(
                "Reply sent:\n" + msg + "\n------------------------------"
              );
            })
            .catch((erro: any) => {
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
    }
  );
}
