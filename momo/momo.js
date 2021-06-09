var Discord = require("discord.io");
var logger = require("winston");
var auth = require("./auth.json");
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console(), {
  colorize: true,
});
logger.level = "debug";
// Initialize Discord Bot
var bot = new Discord.Client({
  token: auth.token,
  autorun: true,
});

let random = 0;
let output = "モモです！";

bot.on("ready", function (evt) {
  logger.info("Connected");
  logger.info("Logged in as: ");
  logger.info(bot.username + " - (" + bot.id + ")");
});

bot.on("message", function (user, userID, channelID, message, evt) {
  // TWICE
  if (
    userID != bot.id &&
    (message.match(/twice/i) ||
      message.match(/2ice/i) ||
      message.match(/two\s*times/i) ||
      message.match(/2\s*times/i) ||
      message.match(/towaisu/i) ||
      message.match(/touwaisu/i))
  ) {
    output = [
      "TWICE!",
      "トゥワイス！",
      "トゥワイス！",
      "빡!",
      "https://tenor.com/view/twice-kpop-bang-momo-cute-gif-14680446",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // ONCE
  else if (
    userID != bot.id &&
    (message.match(/once/i) ||
      message.match(/1ce/i) ||
      message.match(/one\s*time/i) ||
      message.match(/1\s*time/i))
  ) {
    output = [
      "ONCE!",
      "ワンス！",
      "원스!",
      "트와이스 ❤ 원스 ❤ 영원하라!",
      "TWICE!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // LIKE OOH-AHH
  else if (
    userID != bot.id &&
    (message.match(/ooh\s*ahh/i) || message.match(/0rtV5esQT6I/i))
  ) {
    output = [
      "Ooh-ahh 하게!",
      "Ooh ahh ooh ahh～",
      "I just wanna fall in love!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/예쁘죠/i)) {
    output = ["내가 너무 예쁘죠", "나 때문에 다 힘들죠"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/사랑/i)) {
    bot.sendMessage({
      to: channelID,
      message: "이제는 나도 누군가 하고 사랑에",
    });
  }

  // CHEER UP
  else if (
    userID != bot.id &&
    (message.match(/cheer\s*up/i) || message.match(/c7rCyll5AeY/i))
  ) {
    output = [
      "Cheer up baby! Cheer up baby!",
      "Just get it together! And then baby cheer up!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/real\s*man/i)) {
    output = [
      "Be a man, a real man～",
      "Gotta see you love me like a real man ♡",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/조르지마 얼마/i)) {
    bot.sendMessage({
      to: channelID,
      message: "가지 않아 부르게 해줄게 Baby～",
    });
  }

  // TT
  else if (
    userID != bot.id &&
    !message.match(/http/i) &&
    (message.match(/^T_*-*T$/i) ||
      message.match(/\s+T_*-*T\s*/i) ||
      message.match(/\s*T_*-*T\s+/i) ||
      message.match(/ePpPVE-GGJw/i))
  ) {
    output = ["I'm like TT!", "TT!"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/아닌 것 같애/i)) {
    output = [
      "아닌 것 같애 내가 아닌 것 같애",
      "I love you so much!",
      "짜증날 것 같애 화날 것 같애 이런 애가 아닌데",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // KNOCK KNOCK
  else if (
    userID != bot.id &&
    (message.match(/knock\s*knock/i) || message.match(/8A2t_tAjMz8/i))
  ) {
    output = [
      "Knock knock knock knock knock",
      "Baby, knock knock knock knock knock on my door",
      "Knock knock!",
      "Knock on my door～!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/play\s*boy/i)) {
    bot.sendMessage({
      to: channelID,
      message: "보나마나 또 playboy",
    });
  } else if (userID != bot.id && message.match(/bad\s*boy/i)) {
    bot.sendMessage({
      to: channelID,
      message: "떠보나마나 bad boy",
    });
  }

  // SIGNAL
  else if (
    userID != bot.id &&
    (message.match(/signal/i) || message.match(/VQtonf1fv_s/i))
  ) {
    output = [
      "찌릿 찌릿 찌릿 찌릿",
      "sign을 보내 signal 보내",
      "근데 전혀 안 통해",
      "Signal 보내 signal 보내",
      "뚜루루뚜뚜 뚜루루뚜뚜",
      "왜 반응이 없니",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // ONE MORE TIME
  else if (
    userID != bot.id &&
    (message.match(/gimme\s*gimme/i) || message.match(/HuoOEry-Yc4/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "One more time!",
    });
  } else if (
    userID != bot.id &&
    (message.match(/one\s*more/i) || message.match(/1\s*more/i))
  ) {
    output = ["ギミギミ～", "One more time～!"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/君もおんなじ/i)) {
    bot.sendMessage({
      to: channelID,
      message: "気持ちでいたら！　あお！ ❤",
    });
  }

  // LIKEY
  else if (
    userID != bot.id &&
    (message.match(/likey/i) || message.match(/V2hlQkVJZhE/i))
  ) {
    output = [
      "두근두근두근",
      "두근두근두근 ❤ ❤",
      "Me likey likey likey ❤",
      "ドキドキドキ",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (
    userID != bot.id &&
    (message.match(/두근/i) || message.match(/ドキ/i))
  ) {
    output = [
      "두근두근두근",
      "두근두근두근 ❤ ❤",
      "ハート ハート",
      "ドキドキドキ",
      "ドキドキ HEARTBEAT 止まらない",
      "❤ ❤",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (
    userID != bot.id &&
    (message.match(/설렌다/i) || message.match(/seollenda/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "Me likey, me likey likey likey～",
    });
  } else if (
    userID != bot.id &&
    (message.match(/bb\s*cream/i) || message.match(/BB\s*크림/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "BB크림 파파파",
    });
  } else if (
    userID != bot.id &&
    (message.match(/lipstick/i) || message.match(/립스틱을/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "립스틱을 맘맘마",
    });
  } else if (userID != bot.id && message.match(/카메라에/i)) {
    bot.sendMessage({
      to: channelID,
      message: "카메라에 담아볼까 예쁘게",
    });
  }

  // HEART SHAKER
  else if (
    userID != bot.id &&
    (message.match(/heart\s*shake/i) || message.match(/rRzxEiBLQCA/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "You're my heart shaker, shaker～",
    });
  } else if (userID != bot.id && message.match(/my\s*love/i)) {
    output = ["Come and be my love～", "Come and be my love, baby～❤"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/yeah\s*yeah\s/i)) {
    bot.sendMessage({
      to: channelID,
      message: "No no, no noo～",
    });
  }

  // CANDY POP
  else if (
    userID != bot.id &&
    (message.match(/candy/i) || message.match(/wQ_POfToaVY/i))
  ) {
    output = [
      "You're my candy candy pop pop!",
      "You're my candy candy pop pop :candy: :candy:",
      "CANDY CANDY POP POP 君の!",
      "CANDY CANDY POP POP 君と!",
      "君は CANDY POP!",
      "You're my candy pop! :candy:",
      "YOU'RE MY CANDY POP!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/honey/i)) {
    output = ["君の HONEY HONEY な笑顔！", "君の HONEY HONEY な甘い声！"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/heartbeat/i)) {
    bot.sendMessage({
      to: channelID,
      message: "ドキドキ HEARTBEAT 止まらない",
    });
  } else if (
    userID != bot.id &&
    (message.match(/きら/i) || message.match(/キラ/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "君とキラキラ輝く日々を過ごせたなら最高",
    });
  } else if (userID != bot.id && message.match(/秘密/i)) {
    bot.sendMessage({
      to: channelID,
      message: "君がくれた秘密の味",
    });
  } else if (userID != bot.id && message.match(/飽き/i)) {
    bot.sendMessage({
      to: channelID,
      message: "飽きない もう一回",
    });
  }

  // WHAT IS LOVE
  else if (
    userID != bot.id &&
    (message.match(/wanna\s*know/i) ||
      message.match(/want\s*to\s*know/i) ||
      message.match(/is\s*love/i) ||
      message.match(/i0p1bmr0EmE/i))
  ) {
    output = [
      "What is love?",
      "What is love? :woman_shrugging:",
      "I wanna know know know know",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/만일 언젠가 진짜로 내게/i)) {
    bot.sendMessage({
      to: channelID,
      message:
        "사랑이 올 때 난 울어버릴지도 몰라 Mmm～ 정말 궁금해 미칠 것만 같아",
    });
  }

  // WAKE ME UP
  else if (
    userID != bot.id &&
    (message.match(/wake/i) || message.match(/DdLYSziSXII/i))
  ) {
    output = [
      "Wake me up!",
      "Up! Up! Baby, don't give up!",
      "We can work it out, yo!",
      "Wow wow! Wow wow!",
      "Say パンパカパーン！ パンパカパーン！",
      "Up up! Wake me up!",
      "Up up! Step up!",
      "Are you ready? ❤",
      "Hey!!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/shine/i)) {
    bot.sendMessage({
      to: channelID,
      message: "Shine いつか廻り逢う 大切な人に 優しくなれる",
    });
  } else if (userID != bot.id && message.match(/泣/i)) {
    bot.sendMessage({
      to: channelID,
      message: "泣いてもいい 立ち上がる。そうして来たように！　❤",
    });
  } else if (
    userID != bot.id &&
    (message.match(/love/i) || message.match(/愛/i))
  ) {
    output = [
      "Love 同じ空の下 愛する誰かが",
      "心！",
      "綺麗！",
      "What is love?",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // DANCE THE NIGHT AWAY
  else if (
    userID != bot.id &&
    ((message.match(/dance/i) && message.match(/night/i)) ||
      message.match(/Fm5iP0S1z9w/i))
  ) {
    output = ["Dance the night away!", "Let's dance the night away～"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/이 느낌 정말 딱야/i)) {
    bot.sendMessage({
      to: channelID,
      message: "바다야 우리와 같이 놀아, ah～",
    });
  }

  // BDZ
  else if (
    userID != bot.id &&
    (message.match(/bdz/i) ||
      message.match(/bulldozer/i) ||
      message.match(/CMNahhgR_ss/i))
  ) {
    output = [
      "Like a tank, like a soldier～",
      "Let's go! Let's go!",
      "こんな気持ちは はじめて! 大事件だよ!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // YES OR YES
  else if (
    userID != bot.id &&
    (message.match(/yes\?/i) ||
      message.match(/yes\s*or/i) ||
      message.match(/or\s*yes/i) ||
      message.match(/mAKsZ26SabQ/i))
  ) {
    output = [
      "You better tell me yes! ❤",
      "둘 중에 하나만 골라 yes or yes?",
      "하나만 선택해 어서 yes or yes?",
      "나 아니면 우리?",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/heart\s*burn/i)) {
    bot.sendMessage({
      to: channelID,
      message: "My heart burn burn burn～",
    });
  }

  // FANCY
  else if (
    userID != bot.id &&
    (message.match(/fancy/i) || message.match(/kOHB85vDuow/i))
  ) {
    output = ["Youuuu～", "Fancy! Youu!～", "지금 너에게로 갈래"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/take\s*my\s*hand/i)) {
    bot.sendMessage({
      to: channelID,
      message: "더 세게 꼭 잡아 take my hand",
    });
  } else if (userID != bot.id && message.match(/위험할거야/i)) {
    bot.sendMessage({
      to: channelID,
      message: "좀 위험할거야 더 위험할거야 baby～",
    });
  }

  // HAPPY HAPPY
  else if (
    userID != bot.id &&
    (message.match(/happy\s*happy/i) || message.match(/3n9rDwpa6QA/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "You you you!",
    });
  } else if (
    userID != bot.id &&
    (message.match(/with\s*you/i) || message.match(/oh\s*yeah/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "I wanna be with you!",
    });
  } else if (userID != bot.id && message.match(/居場所/i)) {
    bot.sendMessage({
      to: channelID,
      message: "やっぱ really, really like you～",
    });
  } else if (userID != bot.id && message.match(/ドキドキすること/i)) {
    bot.sendMessage({
      to: channelID,
      message: "やめられないからね～",
    });
  }

  // BREAKTHROUGH
  else if (
    userID != bot.id &&
    (message.match(/break/i) || message.match(/ZdKYi5ekshM/i))
  ) {
    output = [
      "Breakthrough breakthrough breakthrough breakthrough",
      "Break, break, breakthrough",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/give\s*up/i)) {
    bot.sendMessage({
      to: channelID,
      message: "Say say, Don't give up!",
    });
  } else if (
    userID != bot.id &&
    (message.match(/時間/i) || message.match(/じかん/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "巻き戻しはできない",
    });
  }

  // FEEL SPECIAL
  else if (
    userID != bot.id &&
    (message.match(/special/i) || message.match(/3ymwOvzhwHs/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "You make me feel special～❤",
    });
  } else if (userID != bot.id && message.match(/everything'*s\s*alright/i)) {
    bot.sendMessage({
      to: channelID,
      message: "초라한 nobody에서 다시 somebody",
    });
  }

  // FAKE & TRUE
  else if (
    userID != bot.id &&
    (message.match(/fake/i) || message.match(/zQELp93xxfo/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "Fake &... fake & true!",
    });
  } else if (userID != bot.id && message.match(/true/i)) {
    bot.sendMessage({
      to: channelID,
      message: "True, true, truee～",
    });
  } else if (
    userID != bot.id &&
    (message.match(/憧/i) || message.match(/夢/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "憧れや夢だと そう 胸を張って語れば～",
    });
  }

  // MORE & MORE
  else if (
    userID != bot.id &&
    (message.match(/more/i) || message.match(/mH0_XpSHkZo/i))
  ) {
    output = [
      "You're gonna say more more more more more and more",
      "멈추지 못해 more more more and more",
      "I wanna have more more more more more and more",
      "멈추기 싫어 more more more and more",
      "More and more!",
      "그러니 한 번 더",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // FANFARE
  else if (
    userID != bot.id &&
    (message.match(/fanfare/i) || message.match(/kRT174IdxuM/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "鳴らせ fanfare 高らかに！",
    });
  } else if (
    userID != bot.id &&
    (message.match(/わかった/i) || message.match(/わかって/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "心配しなくていいよ全部わかってるから",
    });
  } else if (
    userID != bot.id &&
    (message.match(/雨/i) || message.match(/虹/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "ナミダ 雨のあとは 虹が見えるはず",
    });
  } else if (userID != bot.id && message.match(/夢/i)) {
    bot.sendMessage({
      to: channelID,
      message: "夢じゃまだ 終われないなら",
    });
  } else if (userID != bot.id && message.match(/諦/i)) {
    bot.sendMessage({
      to: channelID,
      message: "諦めないで さぁ",
    });
  } else if (
    userID != bot.id &&
    (message.match(/希望/i) || message.match(/リズム/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "希望溢れる 胸のリズム",
    });
  }

  // I CAN'T STOP ME
  else if (
    userID != bot.id &&
    (message.match(/stop/i) || message.match(/CM4CkVFmTds/i))
  ) {
    output = [
      "I can't stop me, can't stop me",
      "Ooh, ooh, ooh～",
      "Can't stop me, can't stop me～",
      "Can't stop me ❤",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/눈/i)) {
    bot.sendMessage({
      to: channelID,
      message: "눈감아 달라구",
    });
  } else if (
    userID != bot.id &&
    (message.match(/light/i) || message.match(/모른/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "모른 척해 줘 lights off tonight",
    });
  } else if (userID != bot.id && message.match(/답/i)) {
    output = ["답은 알고 있잖아 근데 가고 있잖아", "답은 알고 있잖아"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/가고/i)) {
    bot.sendMessage({
      to: channelID,
      message: "근데 가고 있잖아",
    });
  }

  // BETTER
  else if (
    userID != bot.id &&
    (message.match(/better/i) || message.match(/sLmLwgxnPUE/i))
  ) {
    output = [
      "Cause you make it better!",
      "君だから better ❤",
      "待ち焦がれ better",
      "いつだって better",
      "Ooh la la la~",
      "踊る my heart",
      "Oh better, oh better~",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // CRY FOR ME
  else if (
    userID != bot.id &&
    (message.match(/cry/i) || message.match(/FF50-LY2Kro/i))
  ) {
    output = [
      "I want you to cry, cry for me!",
      "I want you to cry",
      "Cry for me :cry:",
      "내가 울었던 것처럼, cry for me",
      "Make your rain fall, cry for me~",
      "I want you to, I want you to, I want you to cry for me",
      "I want you to, I want you to, I want you to die for me :broken_heart:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/bad\s*boy/i)) {
    output = [
      "Bad boy, bad boy",
      "Yeah, you really make me a mad girl, mad girl",
      "Yeah, you really make me a sad girl, sad girl",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/real\s*love/i)) {
    bot.sendMessage({
      to: channelID,
      message: "Baby, no more real love~",
    });
  } else if (
    userID != bot.id &&
    (message.match(/heartbreak/i) ||
      (message.match(/break/i) && message.match(/heart/i)))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "마지막엔 break your heart",
    });
  } else if (userID != bot.id && message.match(/모르는/i)) {
    bot.sendMessage({
      to: channelID,
      message: "아무것도 모르는 척",
    });
  } else if (userID != bot.id && message.match(/기회/i)) {
    bot.sendMessage({
      to: channelID,
      message: "마지막 기회야 어서",
    });
  }

  // KURA KURA
  else if (
    userID != bot.id &&
    (message.match(/kura/i) ||
      message.match(/kula/i) ||
      message.match(/くら/i) ||
      message.match(/クラ/i) ||
      message.match(/쿠라/i) ||
      message.match(/BSS8Y-0hOlY/i))
  ) {
    output = [
      "クラ クラ クラ クラ",
      "クラ クラ クラ クラ!",
      "クラ クラ クラ クラ TWICE!!",
      "クラ クラ クラ クラ ❤",
      "KURA KURA KURA KURA",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (
    userID != bot.id &&
    (message.match(/yura/i) ||
      message.match(/yula/i) ||
      message.match(/ゆら/i) ||
      message.match(/ユラ/i) ||
      message.match(/유라/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "ユラ ユラ ユラ ユラ",
    });
  } else if (
    userID != bot.id &&
    (message.match(/sowa/i) ||
      message.match(/そわ/i) ||
      message.match(/ソワ/i) ||
      message.match(/소와/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "ソワ ソワ ソワ ソワ",
    });
  } else if (
    userID != bot.id &&
    (message.match(/fura/i) ||
      message.match(/fula/i) ||
      message.match(/ふら/i) ||
      message.match(/フラ/i) ||
      message.match(/프라/i))
  ) {
    output = ["クラ クラ クラ クラ", "フラ フラ フラ フラ all night"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/control/i)) {
    output = [
      "Ooh, lose control~",
      "All my heart and soul",
      "君に出逢って lose control",
      "Lose control~ All my heart and soul",
      "Magic :sparkles:",
      "Lose my control",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/視線/i)) {
    bot.sendMessage({
      to: channelID,
      message: "視線重なり合うたび 鼓動も時間もストップして ❤",
    });
  } else if (userID != bot.id && message.match(/呆れ/i)) {
    bot.sendMessage({
      to: channelID,
      message: "呆れちゃうほど",
    });
  } else if (userID != bot.id && message.match(/passion/i)) {
    bot.sendMessage({
      to: channelID,
      message: "無我夢中の passion",
    });
  }

  // ALCOHOL-FREE
  else if (
    userID != bot.id &&
    (message.match(/alcohol/i) || message.match(/XA2YEHn-A8Q/i))
  ) {
    output = [
      "나는 alcohol-free 근데 취해",
      "That's what you do to me",
      "Mojito with lime, sweet mimosa, piña colada",
      "I'm drunk in you ~",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (
    userID != bot.id &&
    (message.match(/mojito/i) ||
      message.match(/mimosa/i) ||
      message.match(/colada/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: "Mojito with lime, sweet mimosa, piña colada",
    });
  }

  // AKI
  else if (
    userID != bot.id &&
    (message.match(/aki/i) ||
      message.match(/arki/i) ||
      message.match(/あき/i) ||
      message.match(/あるき/i) ||
      message.match(/아키/i))
  ) {
    output = [
      "あきくん～～❤",
      "大好き！！　❤",
      "あーきーちゃん～ :wink:",
      "あきくん～ :smirk:",
      "あきくん、会いたいよ！ :heart_eyes:",
      "あきさん！結婚しよう！",
      "あきちゃん。あたしファンシーユ！",
      "사랑해 아키！❤",
      "아키쿤 사랑해! :drooling_face:",
      "아키 멋있어! ❤",
      "아키 나 좋아하지?　❤",
      "아키쿤 왔구낭!",
      "https://tenor.com/view/momo-twice-kpop-gif-11162509",
      "https://tenor.com/view/momo-with-dog-animal-twice-hirai-dog-gif-13567291",
      "https://tenor.com/view/kpop-twice-momo-girls-hirai-gif-13715150",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (
    userID == "270431140056268800" &&
    (message.match(/gross/i) ||
      message.match(/disgusting/i) ||
      message.match(/eww/i) ||
      message.match(/puke/i) ||
      message.match(/きも/i))
  ) {
    output = [
      "可愛いです！",
      "モモは可愛いです！　❤",
      "大好き～！あきくん～　❤",
      "違う～　あきはあたしを大好きですよ～！",
      "また違う、あきくん～",
      "나는 귀여워!",
      "https://tenor.com/view/momo-sad-hirai-momo-twice-gif-11710885",
      "https://tenor.com/view/momo-sad-twice-pout-gif-9441992",
      "https://tenor.com/view/twicemomo-gif-9263131",
      "https://tenor.com/view/twice-momo-eyeglasses-bangs-gif-15504311",
      "https://tenor.com/view/momoyeoeedo-gif-9805151",
      "https://tenor.com/view/momo-twice-de-tears-cry-gif-12841050",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID == "270431140056268800" && message.match(/🤢/i)) {
    output = [
      ":flushed:",
      "待ってください！！",
      "あき、待ってよ！",
      "ちょっとー",
      "ちょー　あき！ :flushed:",
      "あき、やめて！ :persevere:",
      "あきちゃん、駄目よ！",
      "あきくん～　ごめんね！",
      "どうして Sweetie～❤",
      "잠깐! 아키!",
      "기다려 아키! :persevere:",
      "그러면 안돼 아키",
      "내가 아무리 좋아도 그러지 마 아키 :persevere:",
      "또 토하려고, 아키?",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID == "270431140056268800" && message.match(/🤮/i)) {
    output = [
      ":cry: :broken_heart:",
      ":sob:",
      "なぜ？？　:broken_heart:",
      "何故？～　:weary:",
      "どうして？？",
      "あきくん～　愛してる～ ❤",
      "あきくん～　いいよ～ ❤",
      "예쁜애 옆에 예쁜애 트와이스에요!",
      "실은 좋아하는거 알아 :smirk:",
      "그래도 좋아! :wink:",
      "부끄러워하긴 아키쿤",
      "츤데레네, 아키쿤",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // HEECHUL
  else if (
    userID != bot.id &&
    (message.match(/heechul/i) || message.match(/희철/i))
  ) {
    bot.sendMessage({
      to: channelID,
      message: ":black_heart:",
    });
  }

  // MOMO
  else if (
    userID != bot.id &&
    (message.match(bot.id) ||
      message.match(/momo/i) ||
      message.match(/모모/i) ||
      message.match(/모구리/i) ||
      message.match(/モモ/i) ||
      message.match(/もも/i) ||
      message.match(/桃/i) ||
      message.match(/🍑/i))
  ) {
    output = [
      "モモです！",
      "平井モモです！",
      "トゥワイスのモモです！",
      "しもしも～",
      "今日は！",
      "はい～！",
      "모모에요!",
      "히라이 모모이에요",
      "트와이스 모모에요!",
      "나는 음식을 좋아해!",
      "모구리에요!",
      "안녕!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }
});
