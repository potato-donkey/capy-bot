require('dotenv').config();
const tb = require('node-telegram-bot-api'); // Telegram API wrapper
const token = process.env.TOKEN; // Token received from Telegram - defined via environment vars
const client = new tb(token, { polling: true });

const commands = require('./commands'); // Module containing commands
const imagelist = require('./imagedata'); // Array of image data

console.log(`Loaded ${imagelist.length} images.`);

client.on('message', async (msg) => { // When a message is received:
    console.log(`Received message: ${msg.text} from @${msg.from.username}`); // Tell the console

    switch (msg.text) { // Check the message text
        case '/capy': case '/capybara': // If the message is '/capy' or '/capybara'
            commands.capy(msg, client); // Run the 'capy' command
            break;
        case '/help': // If the message is '/help'
            commands.help(msg, client); // Run the 'help' command
            break;
        case '/start':  // If the message is '/start'
            commands.start(msg, client); // Run the 'start' command
            break;
        default: return; // If not a valid command, return (do nothing)
    }
});

/*
    I'm not too sure what a 'polling error' entails, but this catches it
    and logs it in red.
*/

client.on('polling_error', (err) => {
    console.log("\x1b[31m", err);
    console.log("\x1b[0m");
});