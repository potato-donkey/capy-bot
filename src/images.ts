const allImages = require('./imagedata');
const random = () => {
    const index = Math.floor(Math.random() * allImages.length);
    return allImages[index];
}

module.exports = { random };