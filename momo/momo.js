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
    message.match(/(twice|2ice|two\s*times|2\s*times|towaisu|touwaisu)/i)
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
    message.match(/(once|1ce|one\s*time|1\s*time)/i)
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
  else if (userID != bot.id && message.match(/(ooh|ahh|0rtV5esQT6I)/i)) {
    output = [
      "Ooh-ahh 하게!",
      "Ooh ahh ooh ahh～",
      "I just wanna fall in love!",
      "https://media.giphy.com/media/ME9XpELgl8HvrmszAc/giphy.gif",
      "https://media.giphy.com/media/gh66ZPwydyfkRJEQPT/giphy.gif",
      "https://media.giphy.com/media/VzfZuXH9iUcBd8hEFv/giphy.gif",
      "https://gph.is/g/EJex8wx",
      "https://gph.is/g/Z2XQKo8",
      "https://tenor.com/bdcH8.gif",
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
  else if (userID != bot.id && message.match(/(cheer\s*up|c7rCyll5AeY)/i)) {
    output = [
      "Cheer up baby! Cheer up baby!",
      "Just get it together! And then baby cheer up!",
      "https://media.giphy.com/media/duQigq3rRhlka7IUsa/giphy.gif",
      "https://media.giphy.com/media/ZaiP0md2QCxIH0rw9n/giphy.gif",
      "https://gph.is/g/4oNXWy0",
      "https://gph.is/g/Z7rGjzR",
      "https://gph.is/g/Zy6gWwe",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/real\s*man/i)) {
    output = [
      "Be a man, a real man～",
      "Gotta see you love me like a real man ❤",
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
  } else if (userID != bot.id && message.match(/shy/i)) {
    output = ["Shy shy shy～", "샤샤샤❤", "https://tenor.com/7c46.gif"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // TT
  else if (
    userID != bot.id &&
    !message.match(/http/i) &&
    message.match(/(^T_*-*T$|\s+T_*-*T\s*|\s*T_*-*T\s+|ePpPVE-GGJw)/i)
  ) {
    output = [
      "I'm like TT!",
      "TT!",
      "https://media.giphy.com/media/cKyfYWrHVvhxDC6oEW/giphy.gif",
      "https://gph.is/g/aXj8LYV",
      "https://gph.is/g/Z2Vzexm",
      "https://tenor.com/Afvr.gif",
    ];
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
  else if (userID != bot.id && message.match(/(knock\s*knock|8A2t_tAjMz8)/i)) {
    output = [
      "Knock knock knock knock knock",
      "Baby, knock knock knock knock knock on my door",
      "Knock knock!",
      "Knock on my door～!",
      "https://media.giphy.com/media/SvvDxnOsle0KG8xGdo/giphy.gif",
      "http://gph.is/2maeFJi",
      "http://gph.is/2lEayY1",
      "https://tenor.com/K6a2.gif",
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
  else if (userID != bot.id && message.match(/(signal|VQtonf1fv_s)/i)) {
    output = [
      "찌릿 찌릿 찌릿 찌릿",
      "sign을 보내 signal 보내",
      "근데 전혀 안 통해",
      "Signal 보내 signal 보내",
      "뚜루루뚜뚜 뚜루루뚜뚜",
      "왜 반응이 없니",
      "https://media.giphy.com/media/UtJr33mDeOM9PaALce/giphy.gif",
      "https://gph.is/g/ZOQ02nv",
      "https://gph.is/g/4gVwrJ9",
      "https://gph.is/2qkMUle",
      "https://gph.is/2qkQvzI",
      "https://tenor.com/VRHH.gif",
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
    message.match(/(gimme|give\s*me|one\s*more|1\s*more|HuoOEry-Yc4)/i)
  ) {
    output = [
      "One more time!",
      "ギミギミ～",
      "One more time～!",
      "https://tenor.com/7ODv.gif",
      "https://tenor.com/7NG0.gif",
    ];
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
  else if (userID != bot.id && message.match(/(likey|V2hlQkVJZhE)/i)) {
    output = [
      "두근두근두근",
      "두근두근두근 ❤ ❤",
      "Me likey likey likey ❤",
      "ドキドキドキ",
      "https://media.giphy.com/media/hqlN57qVkSUr91xLS7/giphy.gif",
      "https://media.giphy.com/media/UrtHHewWnAHk3BZvnq/giphy.gif",
      "https://gph.is/g/am715AQ",
      "https://gph.is/g/ZYx5Q7A",
      "https://tenor.com/byCZf.gif",
      "https://tenor.com/byCZt.gif",
      "https://tenor.com/ZxdT.gif",
      "https://tenor.com/bqATX.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(두근|ドキ)/i)) {
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
  } else if (userID != bot.id && message.match(/(설렌다|seollenda)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "Me likey, me likey likey likey～",
    });
  } else if (userID != bot.id && message.match(/(bb\s*cream|BB\s*크림)/i)) {
    output = ["BB크림 파파파", "https://gph.is/g/ZYx5Q7A"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(lipstick|립스틱을)/i)) {
    output = ["립스틱을 맘맘마", "https://gph.is/g/ZYx5Q7A"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/카메라에/i)) {
    bot.sendMessage({
      to: channelID,
      message: "카메라에 담아볼까 예쁘게",
    });
  }

  // HEART SHAKER
  else if (userID != bot.id && message.match(/(heart|shake|rRzxEiBLQCA)/i)) {
    output = [
      "You're my heart shaker, shaker～",
      "https://media.giphy.com/media/TISC6N843LGN9zAJJ2/giphy.gif",
      "https://media.giphy.com/media/Vdt3LQnSO9jYaaNSxj/giphy.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
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

  // MERRY & HAPPY
  else if (
    userID != bot.id &&
    message.match(/(merry|christmas|zi_6oaQyckM)/i)
  ) {
    output = [
      "이제는 나도 크리스마스가 좋아!",
      "이제는 내 크리스마스도 Merry야",
      "New year는 Happy야",
      "https://media.giphy.com/media/L3uKcZpFi9Mw8HtyHi/giphy.gif",
      "https://media.giphy.com/media/VgfQUcSUGhPqEyBdsu/giphy.gif",
      "https://gph.is/g/Zy6WNVv",
      "https://tenor.com/buc4g.gif",
      "https://tenor.com/bhtyS.gif",
      "https://tenor.com/3Uer.gif",
      "https://tenor.com/buc4U.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/santa/i)) {
    output = [
      "Thank you Santa",
      "Thank you Santa :santa:",
      "Thank you thank you Santa Claus",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(손을|빛들)/i)) {
    output = [
      "네 손을 잡고 거니는",
      "거리의 불빛들까지도",
      "네 손을 잡고 거니는 거리의 불빛들까지도",
      "모두 다르잖아 너무 예쁘잖아 미쳤나봐",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // CANDY POP
  else if (userID != bot.id && message.match(/(candy|wQ_POfToaVY)/i)) {
    output = [
      "You're my candy candy pop pop!",
      "You're my candy candy pop pop :candy: :candy:",
      "CANDY CANDY POP POP 君の!",
      "CANDY CANDY POP POP 君と!",
      "君は CANDY POP!",
      "You're my candy pop! :candy:",
      "YOU'RE MY CANDY POP!",
      "https://tenor.com/blktf.gif",
      "https://tenor.com/ULJQ.gif",
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
  } else if (userID != bot.id && message.match(/(きら|キラ)/i)) {
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
    message.match(/(wanna\s*know|want\s*to\s*know|is\s*love|i0p1bmr0EmE)/i)
  ) {
    output = [
      "What is love?",
      "What is love? :woman_shrugging:",
      "I wanna know know know know",
      "https://media.giphy.com/media/dzD81GNMNKp2DnU3yS/giphy.gif",
      "https://gph.is/g/EGN3RrM",
      "https://gph.is/g/Z50OnQO",
      "https://tenor.com/bDRSV.gif",
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
  else if (userID != bot.id && message.match(/(wake|DdLYSziSXII)/i)) {
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
      "https://tenor.com/bi86q.gif",
      "https://tenor.com/7czb.gif",
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
  } else if (userID != bot.id && message.match(/(love|愛)/i)) {
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
  else if (userID != bot.id && message.match(/(dance.*night|Fm5iP0S1z9w)/i)) {
    output = [
      "Dance the night away!",
      "Let's dance the night away～",
      "https://media.giphy.com/media/W1Yc2SXEYfkS3TAhJA/giphy.gif",
      "https://media.giphy.com/media/jsNo9VAXkHD8IxZT8D/giphy.gif",
      "https://gph.is/g/Z7rODmw",
      "https://tenor.com/ZbpF.gif",
    ];
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
  else if (userID != bot.id && message.match(/(bdz|bulldozer|CMNahhgR_ss)/i)) {
    output = [
      "Like a tank, like a soldier～",
      "Let's go! Let's go!",
      "こんな気持ちは はじめて! 大事件だよ!",
      "https://tenor.com/view/twice-momo-singing-cute-kpop-gif-14203990",
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
    message.match(/(yes\s*or|or\s*yes|mAKsZ26SabQ)/i)
  ) {
    output = [
      "You better tell me yes! ❤",
      "둘 중에 하나만 골라 yes or yes?",
      "하나만 선택해 어서 yes or yes?",
      "나 아니면 우리?",
      "https://gph.is/g/Zxz8236",
      "https://gph.is/g/Evx63QY",
      "https://tenor.com/bqq7U.gif",
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

  // THE BEST THING I EVER DID
  else if (userID != bot.id && message.match(/(best|CfUGjK6gGgs)/i)) {
    output = [
      "Yeah, the best thing I ever did ❤",
      "The best thing I ever did~",
      "내가 올해 안한 일 중에...",
      "내가 올해 안한 일 중에? ❤",
      "내가 올해 제일 잘한 일 너를 만난 것",
      "내가 올해 안한 일 중에 제일 잘한 일 너와 헤어지지 않은 것 함께 있는 것",
      "https://gph.is/g/ZPXeJ2p",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(말이|떨리)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "너를 위해 남겨둔 수많은 말이 맴돌아 떨리는 걸",
    });
  }

  // FANCY
  else if (userID != bot.id && message.match(/(fancy|kOHB85vDuow)/i)) {
    output = [
      "Youuuu～",
      "Fancy! Youu!～",
      "지금 너에게로 갈래",
      "https://media.giphy.com/media/dXXg7CVpPVkdsqWH78/giphy.gif",
      "https://gph.is/g/aNneMG9",
      "https://gph.is/g/aQKeWd2",
      "https://tenor.com/6PXx.gif",
      "https://tenor.com/6PZD.gif",
    ];
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
  else if (userID != bot.id && message.match(/(happy\s*happy|3n9rDwpa6QA)/i)) {
    output = [
      "You you you!",
      "https://tenor.com/8sKX.gif",
      "https://tenor.com/8fO0.gif",
      "https://tenor.com/8fP7.gif",
      "https://tenor.com/bckei.gif",
      "https://tenor.com/8sKD.gif",
      "https://tenor.com/8f9m.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(with\s*you|oh\s*yeah)/i)) {
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
  else if (userID != bot.id && message.match(/(break|ZdKYi5ekshM)/i)) {
    output = [
      "Breakthrough breakthrough breakthrough breakthrough",
      "Break, break, breakthrough",
      "https://tenor.com/8hL2.gif",
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
  } else if (userID != bot.id && message.match(/(時間|じかん)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "巻き戻しはできない",
    });
  }

  // FEEL SPECIAL
  else if (userID != bot.id && message.match(/(special|3ymwOvzhwHs)/i)) {
    output = [
      "You make me feel special～❤",
      "https://gph.is/g/ZPXeJ9X",
      "https://gph.is/g/ae1DB8N",
      "https://tenor.com/bdvyk.gif",
      "https://tenor.com/boMRq.gif",
      "https://tenor.com/boMQP.gif",
      "https://tenor.com/boMQO.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/everything'*s\s*alright/i)) {
    bot.sendMessage({
      to: channelID,
      message: "초라한 nobody에서 다시 somebody",
    });
  }

  // FAKE & TRUE
  else if (userID != bot.id && message.match(/(fake|zQELp93xxfo)/i)) {
    output = [
      "Fake &... fake & true!",
      "https://tenor.com/be5dc.gif",
      "https://tenor.com/bcVuo.gif",
      "https://tenor.com/bcDLU.gif",
      "https://tenor.com/bcGdX.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/true/i)) {
    bot.sendMessage({
      to: channelID,
      message: "True, true, truee～",
    });
  } else if (userID != bot.id && message.match(/(憧|夢)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "憧れや夢だと そう 胸を張って語れば～",
    });
  }

  // MORE & MORE
  else if (userID != bot.id && message.match(/(more|mH0_XpSHkZo)/i)) {
    output = [
      "You're gonna say more more more more more and more",
      "멈추지 못해 more more more and more",
      "I wanna have more more more more more and more",
      "멈추기 싫어 more more more and more",
      "More and more!",
      "그러니 한 번 더",
      "https://media.giphy.com/media/ehIt8o7ZFeyZc7J0dv/giphy.gif",
      "https://gph.is/g/aRLegkP",
      "https://gph.is/g/E0WvlKb",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // FANFARE
  else if (userID != bot.id && message.match(/(fanfare|kRT174IdxuM)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "鳴らせ fanfare 高らかに！",
    });
  } else if (userID != bot.id && message.match(/(わかった|わかって)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "心配しなくていいよ全部わかってるから",
    });
  } else if (userID != bot.id && message.match(/(雨|虹)/i)) {
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
  } else if (userID != bot.id && message.match(/(希望|リズム)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "希望溢れる 胸のリズム",
    });
  }

  // I CAN'T STOP ME
  else if (userID != bot.id && message.match(/(stop|CM4CkVFmTds)/i)) {
    output = [
      "I can't stop me, can't stop me",
      "Ooh, ooh, ooh～",
      "Can't stop me, can't stop me～",
      "Can't stop me ❤",
      "https://media.giphy.com/media/ZTJfPhUM9Efbngngbt/giphy.gif",
      "https://media.giphy.com/media/SACqYBdsNdXp0nVLE0/giphy.gif",
      "https://media.giphy.com/media/RFUuzTBucFbBSdmpLY/giphy.gif",
      "https://media.giphy.com/media/RzgBac2eWuid49VX52/giphy.gif",
      "https://tenor.com/brHvr.gif",
      "https://tenor.com/brGvW.gif",
      "https://tenor.com/brXmw.gif",
      "https://tenor.com/bsf5D.gif",
      "https://tenor.com/bttFH.gif",
      "https://tenor.com/bshaq.gif",
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
  } else if (userID != bot.id && message.match(/(light|모른)/i)) {
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
  else if (userID != bot.id && message.match(/(better|sLmLwgxnPUE)/i)) {
    output = [
      "Cause you make it better!",
      "君だから better ❤",
      "待ち焦がれ better",
      "いつだって better",
      "Ooh la la la~",
      "踊る my heart",
      "Oh better, oh better~",
      "https://tenor.com/bw4dd.gif",
      "https://tenor.com/bsqT8.gif",
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
    message.match(/(cry|FF50-LY2Kro|bkQw-F1QTq4)/i)
  ) {
    output = [
      "I want you to cry, cry for me!",
      "I want you to cry",
      "Cry for me :cry:",
      "내가 울었던 것처럼, cry for me",
      "Make your rain fall, cry for me~",
      "I want you to, I want you to, I want you to cry for me",
      "I want you to, I want you to, I want you to die for me :broken_heart:",
      "https://tenor.com/btRIG.gif",
      "https://tenor.com/bvq48.gif",
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
    message.match(/(heartbreak|break.*heart|heart.*break)/i)
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
    message.match(/(kura|kula|くら|クラ|쿠라|BSS8Y-0hOlY)/i)
  ) {
    output = [
      "クラ クラ クラ クラ",
      "クラ クラ クラ クラ!",
      "クラ クラ クラ クラ TWICE!!",
      "クラ クラ クラ クラ ❤",
      "KURA KURA KURA KURA",
      "https://tenor.com/bBCyY.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(yura|yula|ゆら|ユラ|유라)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "ユラ ユラ ユラ ユラ",
    });
  } else if (userID != bot.id && message.match(/(sowa|そわ|ソワ|소와)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "ソワ ソワ ソワ ソワ",
    });
  } else if (userID != bot.id && message.match(/(fura|fula|ふら|フラ|프라)/i)) {
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
  else if (userID != bot.id && message.match(/(alcohol|XA2YEHn-A8Q)/i)) {
    output = [
      "나는 alcohol-free 근데 취해",
      "That's what you do to me",
      "Mojito with lime, sweet mimosa, piña colada",
      "I'm drunk in you ~",
      "https://gph.is/g/4D9eOwB",
      "https://gph.is/g/4AgR2Y7",
      "https://gph.is/g/aRYVABd",
      "https://gph.is/g/aXNLreD",
      "https://tenor.com/bDPle.gif",
      "https://tenor.com/bEkGr.gif",
      "https://tenor.com/bEfi6.gif",
      "https://tenor.com/bD5LO.gif",
      "https://tenor.com/bEblY.gif",
      "https://tenor.com/bEiQW.gif",
      "https://tenor.com/bD1Jo.gif",
      "https://tenor.com/bDU4M.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(mojito|mimosa|colada)/i)) {
    bot.sendMessage({
      to: channelID,
      message: "Mojito with lime, sweet mimosa, piña colada",
    });
  }

  // PERFECT WORLD
  else if (userID != bot.id && message.match(/(perfect|world|fmOEKOjyDxU)/i)) {
    output = [
      "音もなく崩れてく Perfect world",
      "砂の城みたい",
      "Perfect world~",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/get\s*(out|lost|back)/i)) {
    output = [
      "Get out! Get lost!",
      "Get out!",
      "Get lost!",
      "Get back, and gooo!!",
      "Get back! And go!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/away/i)) {
    output = [
      "I just want you to keep away!",
      "Wanna keep away!!",
      "I just wanna be far away!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(言い訳|いいわけ)/i)) {
    output = ["言い訳やめて No", "Yeah yeah yeah yeah~"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(機嫌|きげん)/i)) {
    output = ["機嫌取りなら Stop", "Yeah yeah yeah yeah"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // THE FEELS
  else if (userID != bot.id && message.match(/(feel|f5_wn8mexmM)/i)) {
    output = [
      "I got the feels for you! :heart:",
      "I got the feels for you yea yea yea yeaah~",
      "I got all the feels, for sure",
      "I got all the feels for ya~",
      "Boy I boy I boy I know. I know I got the feels~",
      "Boy I boy I boy I know~ I know you feel it too :two_hearts:",
      "You have stolen my heart! :heartbeat:",
      "Lightning straight to my heart! :zap:",
      "https://media.giphy.com/media/LdBKAnOUCzWwKtMhOY/giphy.gif",
      "https://media.giphy.com/media/Y6VxLIi2alkKu76mcf/giphy.gif",
      "https://media.giphy.com/media/VWm2eH2t2JSc4OhKif/giphy.gif",
      "https://media.giphy.com/media/XyFCHjb1vSCHElhEaM/giphy.gif",
      "https://media.giphy.com/media/s31Y1Z4rEx6Taciutd/giphy.gif",
      "https://media.giphy.com/media/xCYDt00ip6nAnIxLMQ/giphy.gif",
      "https://media.giphy.com/media/kkeQ3vstdq0byidylY/giphy.gif",
      "https://media.giphy.com/media/apP7opQlUKa8VywJ2s/giphy.gif",
      "https://media.giphy.com/media/5SCTx1uxoE3g35RA1L/giphy.gif",
      "https://media.giphy.com/media/Zu3kioMdHluwcWbZXl/giphy.gif",
      "https://tenor.com/bJMz5.gif",
      "https://tenor.com/bJETy.gif",
      "https://tenor.com/bJMAm.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/shy|obvious/i)) {
    output = [
      "Get! So shy it's obvious",
      "Get—so shy it's obvious~",
      "I get, so shy it's obvious",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/boy/i)) {
    output = [
      "Boy I boy I boy I know!",
      "Boy I boy I boy I know. :boy:",
      "Boy I boy I boy I know. I know I got the feels!",
      "Boy I boy I boy I know~ I know you feel it too",
      "https://media.giphy.com/media/Zu3kioMdHluwcWbZXl/giphy.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // SCIENTIST
  else if (userID != bot.id && message.match(/(scien|vPwaXytZcgI)/i)) {
    output = [
      "Love ain't a science, don't need no license~",
      "Love ain't a science :heart:",
      "Need no license.",
      "머리 싸매고 고민할수록 minus",
      "Don't try to be a genius, why so serious?",
      "Don't try to be a genius :wink:",
      "맘이 가는 대로, 맘이 시킨 대로",
      "What you, what you waiting for?",
      "다음 과목은 뭐야? So what's the next class, then?",
      "https://media.giphy.com/media/HbfI5YgXCbbh1W5Mij/giphy.gif",
      "https://media.giphy.com/media/Nl9zy9HrEKShQdaViO/giphy.gif",
      "https://media.giphy.com/media/SKpqU6kP71uLTfexOz/giphy.gif",
      "https://media.giphy.com/media/vrAozhbg1t63h3lYQa/giphy.gif",
      "https://media.giphy.com/media/dK0pZrrran6exhuS98/giphy.gif",
      "https://tenor.com/bLRD7.gif",
      "https://tenor.com/bLJan.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/과목|class/i)) {
    output = [
      "다음 과목은 뭐야? So what's the next class, then?",
      "다음 과목은 뭐야?",
      "So what's the next class, then?",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/답|몰라/i)) {
    output = [
      "답이 없어 재미있는 걸 넌 왜 몰라?",
      "답을 몰라 설레었던 걸 넌 왜 몰라?",
      "https://media.giphy.com/media/HbfI5YgXCbbh1W5Mij/giphy.gif",
      "https://media.giphy.com/media/Nl9zy9HrEKShQdaViO/giphy.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // DOUGHNUT
  else if (userID != bot.id && message.match(/(dough|VcOSUOpACq0)/i)) {
    output = [
      "Just like a doughnut 迷い込んだ恋のループ",
      "Just like a doughnut 迷い込んだ恋のループ :doughnut:",
      "Just like a doughnut~",
      "迷い込んだ恋のループ",
      "2人のlove loop :doughnut:",
      "2人のlove loop",
      "2人のlove loop yeah yeah yeah",
      "Love loop :heart:",
      "心には君型の穴が空いてるの",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(loop)/i)) {
    output = [
      "2人のlove loop :doughnut:",
      "2人のlove loop",
      "2人のlove loop yeah yeah yeah",
      "Love loop :heart:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(穴)/i)) {
    output = [
      "心には君型の穴が空いてるの :doughnut:",
      "心には君型の穴が空いてるの :heart:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // AKI
  else if (userID != bot.id && message.match(/(aki|arki|あき|あるき|아키)/i)) {
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
      "https://tenor.com/view/kpop-twice-momo-girls-hirai-gif-13715150",
      "https://tenor.com/bEt95.gif",
      "https://tenor.com/bqdKe.gif",
      "https://tenor.com/bgvYV.gif",
      "https://tenor.com/WpFQ.gif",
      "https://tenor.com/view/momo-with-dog-animal-twice-hirai-dog-gif-13567291",
      "https://tenor.com/bD1nn.gif",
      "https://tenor.com/bDtdR.gif",
      "https://tenor.com/bBOL2.gif",
      "https://tenor.com/buQEx.gif",
      "https://tenor.com/bwgrz.gif",
      "https://tenor.com/bwgrs.gif",
      "https://tenor.com/bANOS.gif",
      "https://tenor.com/buQEt.gif",
      "https://tenor.com/bJMz5.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (
    userID == "270431140056268800" &&
    message.match(/(gros|disgust|vile|ew|puk|きも)/i)
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
      "https://tenor.com/2bv6.gif",
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
      "https://tenor.com/bzXDI.gif",
      "https://tenor.com/bspMD.gif",
      "https://tenor.com/39cC.gif",
      "https://tenor.com/ba5MV.gif",
      "https://tenor.com/ba9XI.gif",
      "https://tenor.com/baejk.gif",
      "https://tenor.com/biqNS.gif",
      "https://tenor.com/12HL.gif",
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
      "https://tenor.com/bigxp.gif",
      "https://tenor.com/bwTEc.gif",
      "https://tenor.com/bvj8Z.gif",
      "https://tenor.com/bzXDJ.gif",
      "https://tenor.com/bzIUe.gif",
      "https://tenor.com/bqAcv.gif",
      "https://tenor.com/bcJUr.gif",
      "https://tenor.com/bqAcw.gif",
      "https://tenor.com/bbLGk.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (
    userID == "270431140056268800" &&
    message.match(
      /(fk|fck|fuk|fuc|fu*k|fu*c|fa*k|fo*k|fe*k|fi*k|f0*k|wtf|wth|se*x|s3*x|ふあ*ぁ*っ*く|フア*ァ*ッ*ク|セッ*クス)/i
    )
  ) {
    output = [
      "https://tenor.com/2bXt.gif",
      "https://tenor.com/babhJ.gif",
      "https://tenor.com/MbQ2.gif",
      "https://tenor.com/bEtkx.gif",
      "https://tenor.com/PPiV.gif",
      "https://tenor.com/MbQ1.gif",
      "https://tenor.com/bvXUx.gif",
      "https://tenor.com/brXiZ.gif",
      "https://tenor.com/bx4ot.gif",
      "https://tenor.com/bx4ow.gif",
      "https://tenor.com/8oDi.gif",
      "https://tenor.com/bf4Pk.gif",
      "https://tenor.com/bx8AO.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // HEECHUL
  else if (userID != bot.id && message.match(/(heechul|희철)/i)) {
    bot.sendMessage({
      to: channelID,
      message: ":black_heart:",
    });
  }

  // MOMO
  else if (
    userID != bot.id &&
    (message.match(bot.id) ||
      message.match(
        /(m(o|0)+m(o|0)+|m(o|0)+x|m(o|0)+\+|m(o|0)+\*|m(o|0)+^|모모|모구리|モモ|もも|桃|peach|🍑)/i
      ))
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
      "https://media.giphy.com/media/J4gEDouaHgAgc109md/giphy.gif",
      "https://media.giphy.com/media/fYMOVT9LQT5OYat5mA/giphy.gif",
      "http://gph.is/2k4ud3n",
      "https://tenor.com/YChl.gif",
      "https://tenor.com/WAtC.gif",
      "https://tenor.com/bzd6B.gif",
      "https://tenor.com/bEHn8.gif",
      "https://tenor.com/X4XB.gif",
      "https://tenor.com/bspMj.gif",
      "https://tenor.com/bA0lB.gif",
      "https://tenor.com/7pIP.gif",
      "https://tenor.com/brXmF.gif",
      "https://tenor.com/bwgq1.gif",
      "https://tenor.com/bzdWo.gif",
      "https://tenor.com/YxvY.gif",
      "https://tenor.com/buA1H.gif",
      "https://tenor.com/bspMB.gif",
      "https://tenor.com/bspMp.gif",
      "https://tenor.com/bspLP.gif",
      "https://tenor.com/YxvZ.gif",
      "https://tenor.com/bBc3D.gif",
      "https://tenor.com/bc3te.gif",
      "https://tenor.com/8sln.gif",
      "https://tenor.com/Nfzh.gif",
      "https://tenor.com/bqXa4.gif",
      "https://tenor.com/bvuVe.gif",
      "https://tenor.com/bejjt.gif",
      "https://tenor.com/7cOj.gif",
      "https://tenor.com/bsXZs.gif",
      "https://tenor.com/bvnkm.gif",
      "https://tenor.com/bspMF.gif",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }
});
