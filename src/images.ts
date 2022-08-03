/*
    Convenience method to get a random image from the array
*/
const allImages = require('./imagedata'); // Array of image data
const random = () => {
    const index = Math.floor(Math.random() * allImages.length); // Get a random index
    return allImages[index]; // Return the image at that index
}

module.exports = { random };