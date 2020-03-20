# discordBots

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

screen 11874

## Mumu

[Link to add bot](https://discordapp.com/api/oauth2/authorize?client_id=690054643207635018&permissions=67584&scope=bot)

Mumu responds to any message containing:

- `@むむ`, mumu, むむ, ムム
- momo, モモ
- もも, 桃

screen 21171

## Momo

[Link to add bot](https://discordapp.com/api/oauth2/authorize?client_id=690388158918950923&permissions=67584&scope=bot)

TWICE MOMO responds to any message containing:

- `@MOMO`, momo, 모모, モモ, もも, 桃
- twice
- like ooh ahh
- cheer up
  - real man
  - 조르지마 얼마
- TT
  - 아닌 것 같애
- knock knock
  - playboy
  - bad boy
- signal
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
- what is love
  - 만일 언젠가 진짜로 내게
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
- aki
- heechul

screen 23720

## Navigating DigitalOcean

#### installation

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
