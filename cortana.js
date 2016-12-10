const Discord = require("discord.js");
const bot = new Discord.Client();
var web = 1

function search(input) {
var bingPrefix = 'HEY CORTANA, '
var bing = input.substr(bingPrefix.length);
var bingDown = bing.toLowerCase();
var bingDownUrl = bingDown.split(' ').join('+');
return bingUrl = 'http://www.bing.com/search?q=' + bingDownUrl;
}

function sV(input) {
  var url = search(input)
  return 'Ergebnisse auf Bing.com | ' + bingUrl
}

function instagram(input) {
  var instaPrefix = 'Hey Cortana, insta '
  var instaprofile = input.toLowerCase().substr(instaPrefix.toLowerCase().length);
  return url = 'https://instagram.com/' + instaprofile
}

function twitter(input) {
  var twitterPrefix = 'Hey Cortana, twitter '
  var twitterprofile = input.toLowerCase().substr(twitterPrefix.toLowerCase().length);
  return url = 'https://instagram.com/' + twitterprofile
}

function trans(input) {
  var transPrefix = 'Hey Cortana, trans '
  var translate = input.toLowerCase().substr(transPrefix.toLowerCase().length);
  return transUrl = 'https://www.bing.com/translator?to=de&text=' + translate
}
function image(input) {
  var imagePrefix = 'Hey Cortana, showme '
  var image = input.toLowerCase().substr(imagePrefix.toLowerCase().length);
  return transUrl = 'http://www.bing.com/images/search?q=' + image
}
bot.on('guildCreate', (guild) => {
  guild.defaultChannel.sendMessage(`Hi, I am Cortana, your super Assistant.\n\nHere are some of the things I can do for you.\n*Tell you jokes*\n*Sing a song.*\n\nYour name is now: **${guild.name}**\nYou´re all set! Now, lets see what I can get started for you.`);
  guild.defaultChannel.sendMessage(`----------------------------------`);
  guild.defaultChannel.sendMessage(`Hallo, ich bin Cortana.\nWie wär´s mit einer Assistentin? Ich unterstütze dich gerne.\n\nHier sind einige Dinge, die ich für dich erledigen kann.\n*Bing-Websuche.*\n*Lieder singen, Geschichten erzählen, Spaß haben.*\n\nDein Name lautet nun: **${guild.name}**\n\n*Bitte warten..*\nDu bist startklar! Mal sehen, was ich als erstes für dich tun kann.`);
  console.log(`Betreten -> Name: ${guild.name} -> Owner: ${guild.owner.username} -> ID des Owners: ${guild.ownerID}`);
});
//message.function.beginning
bot.on('message', message => {

  if (message.author === bot.user) {
  message.delete(12000000)
 }

  var random = Math.floor((Math.random() * 5) + 1);
  var status = ['hey cortana, help', 'by beta#0922 and TomCreeper#1954 and Mel#2760', 'Hi, I am Cortana', 'http://bot.discord.io/cortana'];
  var randStatus = status[Math.floor(Math.random() * status.length)];

  bot.user.setGame(randStatus);

var cortanaCommands = {
  'HEY CORTANA, DU BIST GEFEUERT': 'Gut, ich bin dann mal weg. Aber nicht rufen, Ok? [https://youtu.be/mLm2Kc0DZUc]',
  'HEY CORTANA, DU BIST DUMM': 'Entspann dich bitte. [https://youtu.be/GgqW_fTkth0]',
  'WHAT DOES THE FOX SAY': 'Wa-pa-pa-pa-pa-pa-pow! [https://youtu.be/VYrmnKn-rqk]',
  "HEY CORTANA, PING": "Pong!",
  "HEY CORTANA, SERVER": "If you would like to join the offical server for Cortana join this! **Server Invite Link:** http://discord.gg/S2W4enp",
  "HEY CORTANA, WHORE THE DEVELOPERS": "**Cortana Development Team:** **beta#0922** `( Cortana's Founder )` **,** **TomCreeper#1954** `( Cortana's Coder )` **,** **Weihnachtlicher Me!#2760** `( Cortana's Coder )`**!** **Support Server:** http://discord.gg/S2W4enp",
  "HEY CORTANA, WHAT DO YOU THINK OF YAHOO": "Impressive achievement. Still, I get everything I know from Bing. Yahoo sucks, Bing Rules!",
  "HEY CORTANA, WHAT DO YOU THINK OF GOOGLE": "Impressive achievement. Still, I get everything I know from Bing. [https://youtu.be/7vkl-D2JjGk]",
  "HEY CORTANA, WHAT DO YOU THINK OF WINDOWS 10": "I´m excited to be a part of it. [https://youtu.be/rWKfyQVUwfM]",
  "HEY CORTANA, DISCORD": ":arrow_right: In ${bot.channels.size} Channels\n:arrow_right: On ${bot.guilds.size} Servers\n:arrow_right: With a total of ${bot.users.size} Users\nEinladungs-Link: http://bot.discord.io/cortana\nNeed help with Cortana? Join our Help/Support Server. http://discord.gg/S2W4enp`",
  "HEY CORTANA, WHOS BETTER YOU OR SIRI": "That´s a tought one. It`s like comparing apples with windows. [https://youtu.be/ZKFuZPQY8_0]"
};
//14365491=red
//3447003=blue
//3201849=green
//1381670=darkblue
//13577435=pink
//7089371=violet
//14383916=orange
var colors = [14365491, 3447003, 3201849, 1381670, 13577435, 7089371, 14383916];
var randColor = Math.random();
randColor *= colors.length;
randColor = Math.floor(randColor);

if(message.content.startsWith(cortanaCommands[message.content.toUpperCase()])) {
  web = 0
  var bingPrefix = 'HEY CORTANA, '
  var bing = message.content.substr(bingPrefix.length);
  var bingDown = bing.toLowerCase();
  var bingDownUrl = bingDown.split(' ').join('+');
  var bingUrl = 'http://www.bing.com/search?q=' + bingDownUrl;
  message.channel.sendMessage('', {embed : {
    color : colors[randColor],
    author : {
      name: 'Cortana',
      icon_url: 'https://cdn.discordapp.com/emojis/256805527563141120.png'
    },
    fields: [
      {
        name: cortanaCommands[message.content.toUpperCase()],
        value: sV(message.content.toUpperCase())
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: 'https://images-ext-2.discordapp.net/.eJwNxc0OgiAAAOB38a6mZQ1vWm3OCWatqd1AnSH-BYhp693ru3wfbeKt5mpPKUfhmibtcF0JvXpL3TZKKoqBl3gcjb6SZrWEVtHNNKbhUAbXuVgHFdmIEeownKGGbEOWZ_4cdUiRG2hJCl44gwo2dzs-JQ5sagetye7_Cle2RL0_PZYQGOckP6S9YkocJbeIt9_wSxAAEHue9v0BOmg4MQ.f6fnhHOQQO1ThrV4YKJMn-GevxY',
      text: 'Cortana'
    }
    }
  })};

      if(message.content.toUpperCase() === "HEY CORTANA, HELP")
  	{
      message.channel.sendMessage("**-=-** Cortana - by beta#0922 **-=-**\n\n**Deutsche Hilfe?** ``hey cortana, hilfe``\n\n**New:**\nChristmas Profilepicture and Christmaslogo\n\n**Commands:**\n**Prefix:** ``hey cortana, ``\n**Starter:**\n``help`` - Shows this little text.\n``discord`` - Shows the server-count and the Invite-Link :smile:\n``link`` - Shows only the Invite-Link\n\n**Search:**\n``trans TEXT`` - Translates the text into German (You must click the Link)\n``insta TEXT`` - Shows the Link to your searched Instagram Profile\n``showme TEXT`` - Shows you your searched Text in Bing Pictures (You must click the link)\n``TEXT`` - Searches your text, just click the Link. And ignore the German Text :smile:\n\n**Cortana-Commands:**\n``sing me a song``\n``tell me a joke``\n``what does the fox say``\n``what do you think of windows 10``\n``what do you think of google``\n``whos better you or siri``\n\nPlease Note, that this Bot is made for German-User, but I also want to do something for you English one! So, there are comming other commands, but not soon.\n\n\nSee you later, Cortana Development Team.")
  		message.channel.sendFile("https://cdn.discordapp.com/attachments/234274282283204611/252369401477726208/cortana-03_christmas.jpg");
  	}

    if (message.content.toUpperCase().startsWith('HEY CORTANA, INSTA ')) {
      web = 0
      message.channel.sendMessage('', {embed : {
        color : 7089371,
        author : {
          name: 'Cortana',
          icon_url: 'https://cdn.discordapp.com/emojis/256805527563141120.png'
        },
        fields: [
          {
            name: instagram(message.cleanContent),
            value: sV(message.content.toUpperCase())
          },
        ],
        timestamp: new Date(),
        footer: {
          icon_url: 'https://images-ext-2.discordapp.net/.eJwNxc0OgiAAAOB38a6mZQ1vWm3OCWatqd1AnSH-BYhp693ru3wfbeKt5mpPKUfhmibtcF0JvXpL3TZKKoqBl3gcjb6SZrWEVtHNNKbhUAbXuVgHFdmIEeownKGGbEOWZ_4cdUiRG2hJCl44gwo2dzs-JQ5sagetye7_Cle2RL0_PZYQGOckP6S9YkocJbeIt9_wSxAAEHue9v0BOmg4MQ.f6fnhHOQQO1ThrV4YKJMn-GevxY',
          text: 'Cortana'
        }
        }
      })};


      if (message.content.toUpperCase().startsWith('HEY CORTANA, TWITTER ')) {
        web = 0
        message.channel.sendMessage('', {embed : {
          color : 3447003,
          author : {
            name: 'Cortana',
            icon_url: 'https://cdn.discordapp.com/emojis/256805527563141120.png'
          },
          fields: [
            {
              name: twitter(message.cleanContent),
              value: sV(message.content.toUpperCase())
            },
          ],
          timestamp: new Date(),
          footer: {
            icon_url: 'https://images-ext-2.discordapp.net/.eJwNxc0OgiAAAOB38a6mZQ1vWm3OCWatqd1AnSH-BYhp693ru3wfbeKt5mpPKUfhmibtcF0JvXpL3TZKKoqBl3gcjb6SZrWEVtHNNKbhUAbXuVgHFdmIEeownKGGbEOWZ_4cdUiRG2hJCl44gwo2dzs-JQ5sagetye7_Cle2RL0_PZYQGOckP6S9YkocJbeIt9_wSxAAEHue9v0BOmg4MQ.f6fnhHOQQO1ThrV4YKJMn-GevxY',
            text: 'Cortana'
          }
          }
        })};


        if (message.content.toUpperCase().startsWith('HEY CORTANA, TRANS ')) {
          web = 0
          message.channel.sendMessage('', {embed : {
            color : 14383916,
            author : {
              name: 'Cortana',
              icon_url: 'https://cdn.discordapp.com/emojis/256805527563141120.png'
            },
            fields: [
              {
                name: trans(message.cleanContent),
                value: sV(message.content.toUpperCase())
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: 'https://images-ext-2.discordapp.net/.eJwNxc0OgiAAAOB38a6mZQ1vWm3OCWatqd1AnSH-BYhp693ru3wfbeKt5mpPKUfhmibtcF0JvXpL3TZKKoqBl3gcjb6SZrWEVtHNNKbhUAbXuVgHFdmIEeownKGGbEOWZ_4cdUiRG2hJCl44gwo2dzs-JQ5sagetye7_Cle2RL0_PZYQGOckP6S9YkocJbeIt9_wSxAAEHue9v0BOmg4MQ.f6fnhHOQQO1ThrV4YKJMn-GevxY',
              text: 'Cortana'
            }
            }
          })};


            if(message.content.toUpperCase().startsWith('HEY CORTANA, SHOWME ')) {
              web = 0
              message.channel.sendMessage('', {embed : {
                color : 3201849,
                author : {
                  name: 'Cortana',
                  icon_url: 'https://cdn.discordapp.com/emojis/256805527563141120.png'
                },
                fields: [
                  {
                    name: image(message.content.toUpperCase()),
                    value: sV(message.content.toUpperCase())
                  },
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: 'https://images-ext-2.discordapp.net/.eJwNxc0OgiAAAOB38a6mZQ1vWm3OCWatqd1AnSH-BYhp693ru3wfbeKt5mpPKUfhmibtcF0JvXpL3TZKKoqBl3gcjb6SZrWEVtHNNKbhUAbXuVgHFdmIEeownKGGbEOWZ_4cdUiRG2hJCl44gwo2dzs-JQ5sagetye7_Cle2RL0_PZYQGOckP6S9YkocJbeIt9_wSxAAEHue9v0BOmg4MQ.f6fnhHOQQO1ThrV4YKJMn-GevxY',
                  text: 'Cortana'
                }
                }


              })};
              if(message.content.toUpperCase().startsWith('HEY CORTANA, ') && web === 1) {
                message.channel.sendMessage('', {embed : {
                  color : 14383916,
                  author : {
                    name: 'Cortana',
                    icon_url: 'https://cdn.discordapp.com/emojis/256805527563141120.png'
                  },
                  fields: [
                    {
                      name: sV(message.content.toUpperCase()),
                      value: 'ᅟᅟ'
                    },
                  ],
                  timestamp: new Date(),
                  footer: {
                    icon_url: 'https://images-ext-2.discordapp.net/.eJwNxc0OgiAAAOB38a6mZQ1vWm3OCWatqd1AnSH-BYhp693ru3wfbeKt5mpPKUfhmibtcF0JvXpL3TZKKoqBl3gcjb6SZrWEVtHNNKbhUAbXuVgHFdmIEeownKGGbEOWZ_4cdUiRG2hJCl44gwo2dzs-JQ5sagetye7_Cle2RL0_PZYQGOckP6S9YkocJbeIt9_wSxAAEHue9v0BOmg4MQ.f6fnhHOQQO1ThrV4YKJMn-GevxY',
                    text: 'Cortana'
                  }
                  }
                })};

});


bot.login(Insert.token.here);
