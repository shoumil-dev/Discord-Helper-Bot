# HELPERBOT
#### Video Demo:  https://youtu.be/GyIFYkyc2mU
#### Description:

This project is a discord bot with multiple features which are useful and/or amusing to me. It has only a few commands as getting these few up and
running took me forever to figure out. With help from youtube, stackoverflow and the discord.js documentation, I managed to get it working.

This bot is coded using discord.js v13 which is relatively new and slightly different from the old one, so older videos did not work. I had to issues with the new flags
feature, without which the bot simply refused to run. Messages are also now called interactions and so the syntax is different. I initially planned to make the project using
python, but stopped a little way through due to lack of resources.

config.json contains the multiple environment variables needed to make main.js work. It contains the serverid, botid and tokens for the bot. These variables are required
to specify what bot are we using exactly.

deploy-commands.js is needed to register the commands to a server along with its description. It shows the description when you type '/' to enter a command. It should
be run before main.js. This is required to make sure that the commands appear as suggested when you type it out. If this file doesn't exist, none of the commands work.

main.js is the heart of the program. It contains all the code that makes the bot do what it does. It was difficult to get this to work as discord.js
is frequently updated making months old solutions on the internet outdated. It was hard to find solutions where the code was not deprecated.

package-lock.json and package.json are just used to document dependencies and libraries that I got off the internet. I used node package manager to get these libraries.

The main libraries I used were discordjs/builders, discordjs/rest, discord-api-types and node. Some, like opus, ffmpeg and music-player were for functionality I intended to add,
but as I found out, it is actually really complicated to play music through discord and I wasn't all that familiar with javascript.

I omitted uploading the node_modules folder as it was 300mb and was taking too long to upload. Everything you need to download should be listed in the package.json and
package-lock files.

My IDE of choice was VSCode as I needed the bot to run natively.

To use the project, you need to enter your token, guildID(serverID) and clientID(botID) in config.json. Then, you need to register the commands to the guild using
"node deploy-commands.js". Once you do that, all you need to do is run the main file using "node main.js" and the bot should come online. You can check if it is working
as intended with the "/ping" command.
