# discordBots

## Bruce Lee

[Link to add bot](https://discordapp.com/api/oauth2/authorize?client_id=689744021660237885&permissions=67584&scope=bot)

Bruce Lee responds with a random quote from `quotes.json` directly after any message that includes: 

- `@Bruce Lee`
- bruce
- junfan
- jun fan
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

- `@むむ`
- mumu, むむ, ムム
- momo, モモ
- もも, 桃

### Navigating DigitalOcean

#### installation

After auth.json, package.json, bot.js:
`npm install`

If `node bot.js` doesn't work:

`npm uninstall discord.io --save .`
`npm install woor/discord.io#gateway_v6 --save`

#### screen

install screen
`sudo apt-get install screen`

start new screen
`screen`

view all screens
`screen -ls`

reconnect to existing screen
`screen -r <screenid>`

#### kill

remove all instances of all bots running

`killall node`

#### user

Create user:
`adduser <username>`

Read user:
`id <username>`

Add sudo privileges:
`usermod -aG sudo <username>`

Change to user:
`sudo su - <username>`
