# discordBots

## List of Discord Bots

- [Bruce Lee](https://github.com/rrTong/discordBots#bruce-lee)
- [Mumu](https://github.com/rrTong/discordBots#mumu)
- [Momo](https://github.com/rrTong/discordBots#momo)
- [Lyndon B. Johnson](https://github.com/rrTong/discordBots#lyndon-b-johnson)
- [Vincent](https://github.com/rrTong/discordBots#vincent)

## Bruce Lee

[Link to add bot](https://discordapp.com/api/oauth2/authorize?client_id=689744021660237885&permissions=67584&scope=bot)

Bruce Lee responds with a random quote from `quotes.json` directly after any message that includes: 

- `@Bruce Lee`
- bruce
- siulung
- xiaolong
- junfan
- 小龍
- 小龙
- 振藩
- ブルース
- 소룡
- Tiểu Long
- Chấn Phiên
- Брюс

## Mumu

[Link to add bot](https://discordapp.com/api/oauth2/authorize?client_id=690054643207635018&permissions=67584&scope=bot)

Mumu responds to any message containing:

- `@むむ`, mumu, むむ, ムム
- momo, モモ
- もも, 桃

## Momo

[Link to add bot](https://discordapp.com/api/oauth2/authorize?client_id=690388158918950923&permissions=67584&scope=bot)

TWICE MOMO responds to any message containing:

- `@MOMO`, momo, 모모, モモ, もも, 桃
- twice
- once
- like ooh ahh
  - ooh ahh
  - 예쁘죠
  - 사랑
- cheer up
  - real man
  - 조르지마 얼마
- TT
  - 아닌 것 같애
- knock knock
  - playboy
  - bad boy
- signal
- one more time
  - gimme gimme
  - one more time
  - 君もおんなじ
- likey
  - 설렌다
  - bb cream
  - lipstick
  - 카메라에
- heart shaker
  - my love
  - yeah yeah yeah yeah
- candy pop
  - candy
  - honey
  - heartbeat
  - きら, キラ
- what is love
  - 만일 언젠가 진짜로 내게
- wake me up
  - wake
  - shine
  - 泣
  - love, 愛
- dance the night away
  - 이 느낌 정말 딱야
- bdz
- yes or yes
  - heart burn
- fancy
  - take my hand
  - 위험할거야
- happy happy
  - with you
  - 居場所
  - ドキドキすること
- breakthrough
  - give up
  - 時間は無限にあっても
- feel special
  - everything's alright
- fake and true
  - 憧, 夢
- more & more
  - more
- fanfare
  - わかった, わかって
  - 雨, 虹
  - 夢
  - 諦
  - 希望, リズム
- i can't stop me
  - stop
  - 눈
  - light, 모른
  - 답
  - 가고
- better
- cry for me
  - cry
  - bad boy
  - real love
  - heartbreak, break heart
  - 모르는
  - 기회
- kura kura
  - kura, kula, くら, クラ, 쿠라
  - yura, yula, ゆら, ユラ, 유라
  - sowa, そわ, ソワ, 소와
  - fura, fula, ふら, フラ, 프라
  - control
  - 視線
  - 呆れ
  - passion
- aki
- responds only to aki when:
  - gross, disgusting, eww, puke, きも
  - :nauseated_face:
  - :face_vomiting:
- heechul

## Lyndon B. Johnson

[Link to add bot](https://discord.com/api/oauth2/authorize?client_id=760785092951408651&permissions=67584&scope=bot)

Lyndon B. Johnson responds with a random quote from `quotes.json` directly after any message that includes: 

- `@Lyndon B. Johnson`
- lyndon
- lyndy
- lyndo
- lynda
- lindon
- lindy
- lindo
- linda
- baines
- johnson
- john
- jon
- lb
- bj
- lj
- leblanc
- 林登
- 貝恩斯
- 約翰遜
- 贝恩斯
- 约翰逊
- リンドン
- ジョンソン
- 린든
- 존슨
- Ли́ндон
- Бэйнс
- Джо́нсон

## Vincent

[Link to add bot](https://discord.com/api/oauth2/authorize?client_id=772193516146262027&permissions=67584&scope=bot)

Vincent responds with a random quote from `quotes.json` directly after any message that includes: 

- `@Vincent`
- vincent
- shinntokub
- cutefrog
- lifer

## Navigating DigitalOcean

#### installation

https://discordpy.readthedocs.io/en/latest/discord.html

After auth.json, package.json, bot.js:
```
npm install
```

If `node bot.js` doesn't work:

```
npm uninstall discord.io --save .
npm install woor/discord.io#gateway_v6 --save
```

#### screen

install screen
```
sudo apt-get install screen
```

start new screen
```
screen
```

view all screens
```
screen -ls
```

reconnect to existing screen
```
screen -r <screenid>
```

#### forever

install forever
```
npm install forever -g
```

start running a bot forever
```
forever start --spinSleepTime 10000 bot.js
```

view all running forever
```
forever list
```

stop running forever by index
```
forever stop 0
```

#### kill

remove all instances of all bots running
```
killall node
```

#### user

Create user:
```
adduser <username>
```

Read user:
```
id <username>
```

Add sudo privileges:
```
usermod -aG sudo <username>
```

Change to user:
```
sudo su - <username>
```

## Steps to Update Bot

Log into DigitalOcean via PuTTY

Change directory to bot folder
```
cd brucelee
```

List running instances
```
forever list
```

Kill specific bot (number corresponds to bot)
```
forever stop 0
```

Update js file
```
rm bruce.js
vim bruce.js
```

Start up bot
```
forever start --spinSleepTime 10000 bruce.js
```
