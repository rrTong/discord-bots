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
    if ((userID != bot.id) && (message.match(bot.id) || message.match(/lyndon/i) || message.match(/lyndy/i) || message.match(/lyndo/i) || message.match(/lynda/i) || message.match(/lindon/i) || message.match(/lindy/i) || message.match(/lindo/i) || message.match(/linda/i) || message.match(/baines/i) || message.match(/johnson/i) || message.match(/john/i) || message.match(/jon/i) || message.match(/lb/i) || message.match(/bj/i) || message.match(/lj/i) || message.match(/b./i) || message.match(/l.b/i) || message.match(/l.j/i) || message.match(/leblanc/i) || message.match(/林登/i) || message.match(/貝恩斯/i) || message.match(/約翰遜/i) || message.match(/贝恩斯/i) || message.match(/约翰逊/i) || message.match(/リンドン/i) || message.match(/ジョンソン/i) || message.match(/린든/i) || message.match(/존슨/i) || message.match(/Ли́ндон/i) || message.match(/Бэйнс/i) || message.match(/Джо́нсон/i))) {
        let quoteRandom = quotes[parseInt(Math.random() * quotes.length)];
        bot.sendMessage({
            to: channelID,
            message: quoteRandom
        });
     }
});