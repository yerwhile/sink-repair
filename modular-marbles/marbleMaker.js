/*
    Define a function to create a marble. The size of the
    marble will be passed as a string argument
*/
const createMarble = (sizeString) => {
    // Define an array containing strings for all possible marble colors
    const colors = ["red", "blue", "green", "purple"]

    // Get a random number in the range of 0 - 3
    const randomIndex = Math.floor(Math.random() * 4)

    // Use that number to get a random string from the array
    const randomColor = colors[randomIndex]

    // Return a string description of the marble created
    return `A ${sizeString}, ${randomColor} marble`
}

module.exports = { createMarble }