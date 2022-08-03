/*
    Module containing all command methods.
*/

const {Message, User} = require('node-telegram-bot-api');
const images = require('./images');

/*
    'capy' command
    - Gets a random image from the list of images
    - Sends the image to the chat
*/
const capy = (msg: typeof Message, client: typeof User) => {
    const image = images.random(); // Get a random image
    const imageURL = image.url; // Get the URL of the image
    const attribution = image.attribution; // Get the attribution of the image
    client.sendPhoto(msg.chat.id, imageURL, { caption: `© ${attribution}` }); // Sends the image
}

/*
    'help' command
    - Sends a message to the chat containing the possible commands
*/
const help = (msg: typeof Message, client: typeof User) => { 
    client.sendMessage(msg.chat.id, 'Commands:\n/capy\n/capybara');
}

/*
    'start' command
    - Sends a message to the chat welcoming the user
*/
const start = (msg: typeof Message, client: typeof User) => {
    client.sendMessage(msg.chat.id, 'Hi there! Use the /capy command to receive a capybara!');
}

module.exports = { capy, help, start }