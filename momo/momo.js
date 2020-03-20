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

let random = 0;
let output = "モモです！";

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if ((userID != bot.id) && (message.match(bot.id) || message.match(/momo/i) || message.match(/モモ/i) || message.match(/もも/i) || message.match(/桃/i))) {
        random = [parseInt(Math.random() * 8)];
        output = "モモです！";

        if (random == 1) {
            output = "平井モモです！";
        } else if (random == 2) {
            output = "トゥワイスのモモです！";
        } else if (random == 3) {
            output = "모모에요!";
        } else if (random == 4) {
            output = "히라이 모모이에요"
        } else if (random == 5) {
            output = "트와이스 모모에요!";
        } else if (random == 6) {
            output = "나는 음식을 좋아해!"
        } else if (random == 7) {
            output = "모구리에요!";
        }
    
        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/special/i))) {
        bot.sendMessage({
            to: channelID,
            message: "You make me feel special～♡"
        })
    }

    else if ((userID != bot.id) && (message.match(/fancy/i))) {
        bot.sendMessage({
            to: channelID,
            message: "Youuuu～"
        })
    }

    else if ((userID != bot.id) && (message.match(/T_*-*T/i))) {
        bot.sendMessage({
            to: channelID,
            message: "Just like TT!"
        })
    }

    else if ((userID != bot.id) && (message.match(/dance\s*the\s*night/i))) {
        bot.sendMessage({
            to: channelID,
            message: "Let's dance the night away～"
        })
    }

    else if ((userID != bot.id) && (message.match(/likey/i))) {
        random = [parseInt(Math.random() * 3)];
        output = "두근두근두근";

        if (random == 1) {
            output = "두근두근두근 :heart: :heart:";
        } else if (random == 2) {
            output = "Me likey likey likey :heart:";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/wanna\s*know/i) || message.match(/want\s*to\s*know/i))) {
        random = [parseInt(Math.random() * 2)];
        output = "What is love?";

        if (random == 1) {
            output = "What is love? :woman_shrugging:";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/yes\\?/i))) {
        random = [parseInt(Math.random() * 4)];
        output = "You better tell me yes! :heart:";

        if (random == 1) {
            output = "둘 중에 하나만 골라 yes or yes?";
        } else if (random == 2) {
            output = "하나만 선택해 어서 yes or yes?";
        } else if (random == 3) {
            output = "나 아니면 우리?"
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/heart\s*burn/i))) { // yes or yes
        bot.sendMessage({
            to: channelID,
            message: "My heart burn burn burn～"
        })
    }

    else if ((userID != bot.id) && (message.match(/bdz/i) || message.match(/bulldozer/i))) {
        random = [parseInt(Math.random() * 3)];
        output = "Let's go! Let's go!";

        if (random == 1) {
            output = "Like a tank, like a soldier～";
        } else if (random == 2) {
            output = "こんな気持ちは はじめて! 大事件だよ!";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/break/i))) {
        random = [parseInt(Math.random() * 2)];
        output = "Breakthrough breakthrough breakthrough breakthrough";

        if (random == 1) {
            output = "Break, break, breakthrough";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/give\s*up/i))) {
        bot.sendMessage({
            to: channelID,
            message: "Say say, Don't give up!"
        })
    }

    else if ((userID != bot.id) && (message.match(/時間/i) || message.match(/じかん/i))) {
        bot.sendMessage({
            to: channelID,
            message: "巻き戻しはできない"
        })
    }

    else if ((userID != bot.id) && (message.match(/aki/i) || message.match(/arki/i) || message.match(/あき/i) || message.match(/あるき/i))) {
        bot.sendMessage({
            to: channelID,
            message: "あきくん～～:heart:"
        })
    }

    else if ((userID != bot.id) && (message.match(/heechul/i) || message.match(/희철/i))) {
        bot.sendMessage({
            to: channelID,
            message: ":black_heart:"
        })
    }


});