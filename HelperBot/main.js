const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });


// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Bot is online!');
});


client.on('interactionCreate', async interaction => {

	if (!interaction.isCommand()) return;

	const { commandName } = interaction;


	if (commandName === 'ping') {
		await interaction.reply('I am alive!!!');
	}

	else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	}

	else if (commandName === 'user') {
		await interaction.reply(`Your name is ${interaction.user.username}`);
	}

	else if (commandName === 'valname') {
		await interaction.reply('https://account.riotgames.com');
	}

	else if (commandName === 'cat') {
		await interaction.reply('https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop');
	}

});


client.login(token);
