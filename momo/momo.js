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
    if ((userID != bot.id) && (message.match(bot.id) || message.match(/momo/i) || message.match (/모모/i) || message.match(/モモ/i) || message.match(/もも/i) || message.match(/桃/i))) {
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

    else if ((userID != bot.id) && (message.match(/twice/i) || message.match(/2ice/i) || message.match(/towaisu/i) || message.match(/touwaisu/i))) {
        random = [parseInt(Math.random() * 4)];
        output = "TWICE!";

        if (random == 1) {
            output = "トゥワイス！";
        } else if (random == 2) {
            output = "트와이스!";
        } else if (random == 3) {
            output = "빡!"
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    // LIKE OOH-AHH
    else if ((userID != bot.id) && (message.match(/ooh\s*ahh/i))) {
        random = [parseInt(Math.random() * 3)];
        output = "Ooh-ahh 하게!";

        if (random == 1) {
            output = "Ooh ahh ooh ahh～";
        } else if (random == 2) {
            output = "I just wanna fall in love!";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    // CHEER UP
    else if ((userID != bot.id) && (message.match(/cheer\s*up/i))) {
        random = [parseInt(Math.random() * 2)];
        output = "Cheer up baby! Cheer up baby!";

        if (random == 1) {
            output = "Just get it together! And then baby cheer up!";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/real\s*man/i))) {
        random = [parseInt(Math.random() * 2)];
        output = "Be a man, a real man～";

        if (random == 1) {
            output = "Gotta see you love me like a real man ♡";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/조르지마 얼마/i))) {
        bot.sendMessage({
            to: channelID,
            message: "가지 않아 부르게 해줄게 Baby～"
        })
    }

    // TT
    else if ((userID != bot.id && !message.match(/http/i)) && (message.match(/T_*-*T/i))) {
        random = [parseInt(Math.random() * 2)];
        output = "I'm like TT!";

        if (random == 1) {
            output = "Just like TT!";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/아닌 것 같애/i))) {
        random = [parseInt(Math.random() * 3)];
        output = "아닌 것 같애 내가 아닌 것 같애";
        
        if (random == 1) {
            output = "I love you so much!";
        } else if (random == 2) {
            output = "짜증날 것 같애 화날 것 같애 이런 애가 아닌데";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    // KNOCK KNOCK
    else if ((userID != bot.id) && (message.match(/knock\s*knock/i))) {
        random = [parseInt(Math.random() * 4)];
        output = "Knock knock knock knock knock";

        if (random == 1) {
            output = "Baby, knock knock knock knock knock on my door";
        } else if (random == 2) {
            output = "Knock knock!";
        } else if (random == 3) {
            output = "Knock on my door～!";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/play\s*boy/i))) {
        bot.sendMessage({
            to: channelID,
            message: "보나마나 또 playboy"
        })
    }

    else if ((userID != bot.id) && (message.match(/bad\s*boy/i))) {
        bot.sendMessage({
            to: channelID,
            message: "떠보나마나 bad boy"
        })
    }

    // SIGNAL
    else if ((userID != bot.id) && (message.match(/signal/i))) {
        random = [parseInt(Math.random() * 5)];
        output = "찌릿 찌릿 찌릿 찌릿";

        if (random == 1) {
            output = "sign을 보내 signal 보내";
        } else if (random == 2) {
            output = "근데 전혀 안 통해";
        } else if (random == 3) {
            output = "Signal 보내 signal 보내";
        } else if (random == 4) {
            output = "드르르드드 드르르드드"
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    // ONE MORE TIME
    else if ((userID != bot.id) && (message.match(/gimme\s*gimme/i))) {
        bot.sendMessage({
            to: channelID,
            message: "One more time!"
        })
    }

    else if ((userID != bot.id) && (message.match(/one\s*more\s*time/i))) {
        random = [parseInt(Math.random() * 2)];
        output = "ギミギミ～";

        if (random == 1) {
            output = "One more time～!";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/君もおんなじ/i))) {
        bot.sendMessage({
            to: channelID,
            message: "気持ちでいたら！　あお！ ❤"
        })
    }

    // LIKEY
    else if ((userID != bot.id) && (message.match(/likey/i))) {
        random = [parseInt(Math.random() * 4)];
        output = "두근두근두근";

        if (random == 1) {
            output = "두근두근두근 ❤ ❤";
        } else if (random == 2) {
            output = "Me likey likey likey ❤";
        } else if (random == 3) {
            output = "ドキドキドキ";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/설렌다/i) || message.match(/seollenda/i))) {
        bot.sendMessage({
            to: channelID,
            message: "Me likey, me likey likey likey～"
        })
    }

    else if ((userID != bot.id) && (message.match(/bb\s*cream/i) || message.match(/BB\s*크림/i))) {
        bot.sendMessage({
            to: channelID,
            message: "BB크림 파파파"
        })
    }

    else if ((userID != bot.id) && (message.match(/lipstick/i) || message.match(/립스틱을/i))) {
        bot.sendMessage({
            to: channelID,
            message: "립스틱을 맘맘마"
        })
    }

    else if ((userID != bot.id) && (message.match(/카메라에/i))) {
        bot.sendMessage({
            to: channelID,
            message: "카메라에 담아볼까 예쁘게"
        })
    }

    // HEART SHAKER
    else if ((userID != bot.id) && (message.match(/heart\s*shake/i))) {
        bot.sendMessage({
            to: channelID,
            message: "You're my heart shaker, shaker～"
        })
    }

    else if ((userID != bot.id) && (message.match(/my\s*love/i))) {
        random = [parseInt(Math.random() * 2)];
        output = "Come and be my love～";

        if (random == 1) {
            output = "Come and be my love, baby～❤";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/yeah\s*yeah\s/i))) {
        bot.sendMessage({
            to: channelID,
            message: "No no, no noo～"
        })
    }

    // WHAT IS LOVE
    else if ((userID != bot.id) && (message.match(/wanna\s*know/i) || message.match(/want\s*to\s*know/i) || message.match(/what\s*is\s*love/i))) {
        random = [parseInt(Math.random() * 3)];
        output = "What is love?";

        if (random == 1) {
            output = "What is love? :woman_shrugging:";
        } else if (random == 2) {
            output = "I wanna know know know know";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/만일 언젠가 진짜로 내게/i))) {
        bot.sendMessage({
            to: channelID,
            message: "사랑이 올 때 난 울어버릴지도 몰라 Mmm～ 정말 궁금해 미칠 것만 같아"
        })
    }

    // DANCE THE NIGHT AWAY
    else if ((userID != bot.id) && (message.match(/dance/i) && message.match(/night/i))) {
        random = [parseInt(Math.random() * 2)];
        output = "Dance the night away!";

        if (random == 1) {
            output = "Let's dance the night away～";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/이 느낌 정말 딱야/i))) {
        bot.sendMessage({
            to: channelID,
            message: "바다야 우리와 같이 놀아, ah～"
        })
    }

    // BDZ
    else if ((userID != bot.id) && (message.match(/bdz/i) || message.match(/bulldozer/i))) {
        random = [parseInt(Math.random() * 3)];
        output = "Like a tank, like a soldier～";
        
        if (random == 1) {
            output = "Let's go! Let's go!";
        } else if (random == 2) {
            output = "こんな気持ちは はじめて! 大事件だよ!";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    // YES OR YES
    else if ((userID != bot.id) && (message.match(/yes\?/i) || message.match(/yes\s*or/i) || message.match(/or\s*yes/i))) {
        random = [parseInt(Math.random() * 4)];
        output = "You better tell me yes! ❤";

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

    else if ((userID != bot.id) && (message.match(/heart\s*burn/i))) {
        bot.sendMessage({
            to: channelID,
            message: "My heart burn burn burn～"
        })
    }

    // FANCY
    else if ((userID != bot.id) && (message.match(/fancy/i))) {
        random = [parseInt(Math.random() * 3)];
        output = "Youuuu～";

        if (random == 1) {
            output = "Fancy! Youu!～";
        } else if (random == 2) {
            output = "지금 너에게로 갈래";
        }

        bot.sendMessage({
            to: channelID,
            message: output
        })
    }

    else if ((userID != bot.id) && (message.match(/take\s*my\s*hand/i))) {
        bot.sendMessage({
            to: channelID,
            message: "더 세게 꼭 잡아 take my hand"
        })
    }

    else if ((userID != bot.id) && (message.match(/위험할거야/i))) {
        bot.sendMessage({
            to: channelID,
            message: "좀 위험할거야 더 위험할거야 baby～"
        })
    }

    // HAPPY HAPPY
    else if ((userID != bot.id) && (message.match(/happy\s*happy/i))) {
        bot.sendMessage({
            to: channelID,
            message: "You you you!"
        })
    }

    else if ((userID != bot.id) && (message.match(/with\s*you/i) || message.match(/oh\s*yeah/i))) {
        bot.sendMessage({
            to: channelID,
            message: "I wanna be with you!"
        })
    }
    
    else if ((userID != bot.id) && (message.match(/居場所/i))) {
        bot.sendMessage({
            to: channelID,
            message: "やっぱ really, really like you～"
        })
    }

    else if ((userID != bot.id) && (message.match(/ドキドキすること/i))) {
        bot.sendMessage({
            to: channelID,
            message: "やめられないからね～"
        })
    }
    
    // BREAKTHROUGH
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

    // FEEL SPECIAL
    else if ((userID != bot.id) && (message.match(/special/i))) {
        bot.sendMessage({
            to: channelID,
            message: "You make me feel special～❤"
        })
    }

    else if ((userID != bot.id) && (message.match(/everything'*s\s*alright/i))) {
        bot.sendMessage({
            to: channelID,
            message: "초라한 nobody에서 다시 somebody"
        })
    }

    // FAKE & TRUE
    else if ((userID != bot.id) && (message.match(/fake/i))) {
        bot.sendMessage({
            to: channelID,
            message: "Fake &... fake & true!"
        })
    }

    else if ((userID != bot.id) && (message.match(/true/i))) {
        bot.sendMessage({
            to: channelID,
            message: "True, true, truee～"
        })
    }

    else if ((userID != bot.id) && (message.match(/憧/i) || message.match(/夢/i))) {
        bot.sendMessage({
            to: channelID,
            message: "憧れや夢だと そう 胸を張って語れば～"
        })
    }

    // AKI
    else if ((userID != bot.id) && (message.match(/aki/i) || message.match(/arki/i) || message.match(/あき/i) || message.match(/あるき/i))) {
        bot.sendMessage({
            to: channelID,
            message: "あきくん～～❤"
        })
    }

    // HEECHUL
    else if ((userID != bot.id) && (message.match(/heechul/i) || message.match(/희철/i))) {
        bot.sendMessage({
            to: channelID,
            message: ":black_heart:"
        })
    }
});
