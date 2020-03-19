var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var quotesData = require('./quotes.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

const quotes = Object.values(quotesData);

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.match(bot.id) || message.match(/bruce/i) || message.match(/junfan/i) || message.match(/jun fan/i) || message.match(/小龍/i) || message.match(/小龙/i) || message.match(/振藩/i) || message.match(/ブルース/i) || message.match(/소룡/i) || message.match(/Tiểu Long/i) || message.match(/Chấn Phiên/i) || message.match(/Брюс/i)) {
        let quoteRandom = quotes[parseInt(Math.random() * quotes.length)];
        bot.sendMessage({
            to: channelID,
            message: quoteRandom
        });
     }
});