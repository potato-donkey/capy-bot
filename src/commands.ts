const {Message, User} = require('node-telegram-bot-api');
const images = require('./images');

const capy = (msg: typeof Message, client: typeof User) => {
    const image = images.random();
    const imageURL = image.url;
    const attribution = image.attribution;
    client.sendPhoto(msg.chat.id, imageURL, { caption: `© ${attribution}` });
}

const help = (msg: typeof Message, client: typeof User) => {
    client.sendMessage(msg.chat.id, 'Commands:\n/capy\n/capybara');
}

const start = (msg: typeof Message, client: typeof User) => {
    client.sendMessage(msg.chat.id, 'Hi there! Use the /capy command to receive a capybara!');
}

module.exports = { capy, help, start }