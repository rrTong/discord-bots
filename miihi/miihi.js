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
  // NIZIU
  if (userID != bot.id && message.match(/(niziu|ニジュー|니쥬)/i)) {
    output = [
      "JYP!",
      "ジェイ!　ワイ!　ピー！",
      "JYPプロダクション",
      "with NIZIU!",
      "ウィスニジュー！ :heart:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // MAKE YOU HAPPY
  else if (
    userID != bot.id &&
    message.match(/(make\s*you|happy|嬉|QW28YKqdxe0)/i)
  ) {
    output = [
      "Ooh I just wanna make you happy あ～もう！",
      "Happy Happy!",
      "https://tenor.com/view/niziu-make-you-happy-dance-miihi-japanese-idol-gif-17705586",
      "https://tenor.com/view/niziu-miihi-wink-japanese-idol-cute-gif-17705443",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/笑/i)) {
    output = [
      "笑ってほしい～",
      "忘れちゃった笑顔も 大丈夫 ちゃんと取り戻して :slight_smile:",
      "その笑顔見てるとき ほんと幸せ",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/what\s*do\s*you/i)) {
    output = [
      "What do you want?",
      "What do you need?",
      "What do you want? What do you need?",
      "Anything~",
      "Everything~",
      "You tell me :heart:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // STEP AND A STEP
  else if (userID != bot.id && message.match(/(step|歩|a6QT0acJFQE)/i)) {
    output = [
      "Step and a step!",
      "Step and a step 私の歩幅で",
      "Step and a step 私だけのペースで",
      "ゆっくり行ってもいい休んでみてもいい",
      "歩いていく自分らしく Just believe yourself!",
      "Step and a step 私は私で",
      "Step and a step 私だけの形で",
      "回り道でいい自分のペースでいい",
      "笑っていく好きになる Just believe yourself!",
      "Let's go!!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/everything\s*will/i)) {
    output = [
      "Everything will be fine~",
      "Everything will be okay!",
      "Be fine!",
      "Be OKAY!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(頬|触|風)/i)) {
    output = ["頬に触れてく風感じてみて", "頬に触れてく風感じてみて :heart:"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // TAKE A PICTURE
  else if (
    userID != bot.id &&
    message.match(/(take\s*a|picture|OlHb1qH-zS4)/i)
  ) {
    output = [
      "WANNA WANNA WANNA",
      "Wanna wanna wanna, take a picture now",
      "Wanna wanna wanna, take a picture now, take a picture now",
      "Take a picture now!",
      "Take a picture now, take a picture now ~",
      "GONNA GONNA GONNA",
      "Gonna gonna gonna 焼き付けるよ",
      "Gonna gonna gonna 覚えてよう",
      "Wanna wanna!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/wanna/i)) {
    output = [
      "WANNA WANNA WANNA",
      "Wanna wanna wanna, take a picture now",
      "Wanna wanna wanna, take a picture now, take a picture now",
      "Wanna wanna!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/gonna/i)) {
    output = [
      "GONNA GONNA GONNA",
      "Gonna gonna gonna 焼き付けるよ",
      "Gonna gonna gonna 覚えてよう",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/心/i)) {
    output = [
      "I got this feeling 今 心トキメキ",
      "I got this feeling 今 心トキメキ 全身をかけめぐり",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/^(1|one|一)$/i)) {
    output = [
      "ONE! for our love!",
      "ONE! For our love :heart:",
      "ONE! For our love :couple_with_heart:",
      "ONE! For our love :smiling_face_with_3_hearts:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/^(2|two|二)$/i)) {
    output = ["TWO! 若さと", "TWO! 若さと！", "TWO! 若さと :child:"];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/^(3|three|三)$/i)) {
    output = [
      "THREE! こんなに大切な思い出",
      "THREE! こんなに大切な思い出～",
      "THREE! こんなに大切な思い出 :thought_balloon:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/^(4|four|四)$/i)) {
    output = [
      "FOUR! 君の smile",
      "FOUR! 君のスマイル　:slight_smile:",
      "FOUR! 君の smile :upside_down:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/^(5|five|五)$/i)) {
    output = [
      "FIVE! 今は young and wild",
      "FIVE! 今は YOUNG AND WIIILD ~",
      "FIVE! 今は young and wild!! :partying_face:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(辛|悲)/i)) {
    output = [
      "辛い時悲しい時 そばにいるよ",
      "辛い時悲しい時 そばにいるよ :fire:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(worry|lonely)/i)) {
    output = [
      "Never worry and believe me I won't leave you lonely",
      "Never worry! And believe me! I won't leave you lonely :heart:",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // POPPIN' SHAKIN'
  else if (userID != bot.id && message.match(/(pop|shak|mgYnKfgx6tI)/i)) {
    output = [
      "Poppin' Shakin'!",
      "La la~ poppin' shakin'!",
      "Pop! Pop! Pop!",
      "It's time to GO!",
      "Oh just have FUN!",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (
    userID != bot.id &&
    message.match(/la\s*la|ラララ｜ラーラー|ららら|らーらー/i)
  ) {
    output = [
      "La la la la la la la la la la la la la la la la la la la la la la la la la la",
      "La la la la la la la la la la la la la la la la la",
      "La la la la la la la la la",
      "ラーラーラーラーラーラーラーラーラーラーラーラーラーラーラーラーラーラーラーラーラーラーラーラー",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/new\s*world/i)) {
    output = [
      "キミの前に広がるのは New world キラ キラ Future Oh baby",
      "キミの前に広がるのは New world",
      "キラ キラ Future Oh baby",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/holiday/i)) {
    output = [
      "Everyday's a holiday",
      "Everydays Holidays!",
      "特別な日だって 思えるなら creative",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  } else if (userID != bot.id && message.match(/(出会|誘)/i)) {
    output = [
      "出会って 誘って誰だって 一人じゃない Yes, Always be",
      "出会って 誘って 誰だって",
      "一人じゃない Yes, always be",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // MIIHI
  else if (
    userID != bot.id &&
    (message.match(bot.id) ||
      message.match(/(miihi|未光|ミイヒ|みいひ|미이히)/i))
  ) {
    output = [
      "未光です！",
      "今日は！鈴野未光です！",
      "ミイヒです！",
      "ニジューのミイヒです！",
      "안녕하세요! 미이히입니다.",
      "https://tenor.com/view/miihi-niziu-gif-21646749",
      "https://tenor.com/view/niziu-niziumiihi-miihi-gif-18675061",
      "https://tenor.com/view/niziu-nizi-umiihi-miihi-gif-18565320",
      "https://tenor.com/view/niziu-miihi-niziuミイヒ-niziu-みいひ-ミイヒ-gif-19027525",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }

  // DOGGO
  else if (userID != bot.id && message.match(/(dog|🐶|🐕|🦮|🐕‍🦺)/i)) {
    output = [
      "ワンワン！",
      "ワンワン :dog:",
      "ワン!",
      "ワンワンワンワン",
      "バウ！バウ！",
      "バウバウバウ",
      "https://tenor.com/view/niziu-nizi-niziu-miihi-jyp-kawaii-gif-17673824",
      "https://tenor.com/view/ミイヒ-虹プロ-歌う-ヒトカラ-部屋-gif-17987181",
      "https://tenor.com/view/niziu-nizi-project-clap-mako-rio-gif-21464001",
      "https://tenor.com/view/miihi-nizi-project-niziu-niziu-miihi-cute-gif-17747283",
    ];
    random = [parseInt(Math.random() * output.length)];

    bot.sendMessage({
      to: channelID,
      message: output[random],
    });
  }
});