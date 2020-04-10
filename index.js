// const botgram = require("botgram")
const TelegramBot = require('node-telegram-bot-api');
const motivation = require('./motivation');
const TOKEN = "1193533462:AAEod-HUkaDeWfHg-FnVTclL1izlVInfv4o";
// const bot = botgram(TOKEN)
const bot = new TelegramBot(TOKEN, {polling: true});

const rendomazer = (max)=>{
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

const randomLink = (category)=>{
    switch (category) {
        case "grust":
           return motivation.grust[rendomazer(motivation.grust.length)]
            break;
        case "podderjat":
            return motivation.podderjat[rendomazer(motivation.podderjat.length)]
            break;
        case "osudit":
            return motivation.osudit[rendomazer(motivation.osudit.length)]
            break;
        case "ocenit_fu":
            return motivation.ocenit_fu[rendomazer(motivation.ocenit_fu.length)]
            break;
        case "ocenit_ok":
            return motivation.ocenit_ok[rendomazer(motivation.ocenit_ok.length)]
            break;
        default:
            return 'NET NAKOI BUKVI'
    }
}

// bot.command("grust", function (msg, reply, next) {
//     reply.text(`не грусти`);
//     reply.text(randomLink(msg.command));
//     console.log("test", randomLink(msg.command));
// });

bot.onText(/\/grust/, (msg, match)=>{
  const chatId = msg.chat.id
    const resp = randomLink(msg.command) ;
    console.log("test", match);
  bot.sendMessage(chatId, resp)
});

// bot.command("podderjat", function (msg, reply, next) {
//     reply.text(`Все будет зашибись`);
//     reply.text(randomLink(msg.command));
//     console.log("test ", randomLink(msg.command));
// });
//
// bot.command("osudit", function (msg, reply, next) {
//     reply.text(`Я тоже порицаю эту дичь`);
//     reply.text(randomLink(msg.command));
//     console.log("test ", randomLink(msg.command));
// });
//
// bot.command("ocenit_fu", function (msg, reply, next) {
//     reply.text(`Согласен кал`);
//     reply.text(randomLink(msg.command));
//     console.log("test ", randomLink(msg.command));
// });
//
// bot.command("ocenit_ok", function (msg, reply, next) {
//     reply.text(`Годнота`);
//     reply.text(randomLink(msg.command));
//     console.log("test ", randomLink(msg.command));
// });
//
// bot.command("start", function (msg, reply, next) {
//     console.log("Received a /start command from", msg);
//     reply.text(` I want sex with you`)
// });
//
// bot.command("fart", function (msg, reply, next) {
//     console.log("Received a /fart command from", msg);
//     reply.text(`https://www.youtube.com/watch?v=qYODdZUahxA`)
// });
//
// // bot.command("ne_bzdy", function (msg, reply, next) {
// //     reply.text(`не бзди`)
// //     reply.text(`https://youtu.be/EzqsZA9h9gI`)
// //
// // });
// bot.text(function (msg, reply, next) {
//     console.log("Received a text message  :", msg.text);
//     reply.text(`"${msg.text}" - От этого сообщения у меня встал`)
// });
//
// bot.command((msg, reply) =>
//     reply.text(`Invalid command.`))
