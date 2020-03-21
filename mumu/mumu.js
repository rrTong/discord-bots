var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
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

let mumuCount = 0;

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if ((userID != bot.id) && (message.match(bot.id) || message.match(/mumu/i) || message.match(/むむ/i) || message.match(/ムム/i))) {
        mumuCount += 2;
        let output = "こんにちは！"
        let randomSelectMumu = [parseInt(Math.random() * 7)];

        if (mumuCount > 100) {
            output = "むむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむむ";
            mumuCount = 0;
        }
        else if (randomSelectMumu == 1) {
            output = "こんにちは～　ニャーニャー ฅ( ＞ω＜)ฅ";
        } else if (randomSelectMumu == 2) {
            output = "こんばんは！ 眠いですか、ニャー？　:cat:";
        } else if (randomSelectMumu == 3) {
            output = "もえ、もえ、キュン！！　～☆";
        } else if (randomSelectMumu == 4) {
            output = "メイド喫茶は大好きですか？？";
        } else if (randomSelectMumu == 5) {
            output = "お帰りなさいませ、ご主人様。";
        } else if (randomSelectMumu == 6) {
            output = "むむです！";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }
    else if ((userID != bot.id) && (message.match(/momo/i) || message.match(/モモ/i))) {
        let output = "モモじゃない！あたしは、むむです！！"
        let randomSelectMomo = [parseInt(Math.random() * 5)];

        if (randomSelectMomo == 1) {
            output = "モモじゃない！あたしは、むむです！！ むむむむむむむむむむむむむむ～";
        } else if (randomSelectMomo == 2) {
            output = "モモ？？　あたしはむむ！！！！　むむむむむむむむむ";
        } else if (randomSelectMomo == 3) {
            output = "違う！　むむです！！";
        } else if (randomSelectMomo == 4) {
            output = "ちがう！　モモじゃない！　むむです！";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }
    else if ((userID != bot.id) && (message.match(/もも/i) || message.match(/桃/i))) {
        let output = "美味しい！"
        let randomSelectPeach = [parseInt(Math.random() * 3)];

        if (randomSelectPeach == 1) {
            output = "ももすき！　でもあたしはむむです！";
        } else if (randomSelectPeach == 2) {
            output = "あきはももがだいすき！！　～❤";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }
});