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
    if ((userID != bot.id) && (message.match(bot.id) || message.match(/vincent/i) || message.match(/shinntokub/i) || message.match(/cutefrog/i) || message.match(/lifer/i))) {
        let quoteRandom = quotes[parseInt(Math.random() * quotes.length)];
        bot.sendMessage({
            to: channelID,
            message: quoteRandom
        });
     }
});