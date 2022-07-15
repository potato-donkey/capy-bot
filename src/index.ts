require('dotenv').config();
const tb = require('node-telegram-bot-api');
const token = process.env.TOKEN;
const client = new tb(token, { polling: true });

const commands = require('./commands');
const imagelist = require('./imagedata');

console.log(`Loaded ${imagelist.length} images`);

client.on('message', async (msg) => {
    console.log(`Received message: ${msg.text} from @${msg.from.username}`);

    switch (msg.text) {
        case '/capy': case '/capybara':
            commands.capy(msg, client);
            break;
        case '/help':
            commands.help(msg, client);
            break;
        case '/start':
            commands.start(msg, client);
            break;
        default: return;
    }
});

client.on('polling_error', (err) => {
    console.log("\x1b[31m", err);
    console.log("\x1b[0m");
});