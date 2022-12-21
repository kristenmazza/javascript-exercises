let item;

// First, have the function look at all arguments, including [1, 2, 3, 4] 
// and the additional items to remove
const removeFromArray = function(...args) {
    // Make the array equal the first argument - all of [1, 2, 3, 4]
    const array = args[0];
    // Create a new empty array to add items to
    const newArray = [];
    
    // Look at each item in the arguments
    array.forEach((item) => {
        // Only add items that do not match any arguments to the newArray.
        // For example, does 1 === [1, 2, 3, 4] or 2 or 3? 
        // Nope, include it in the newArray.
        if (args.includes(item) === false) {
            newArray.push(item);
        }
    });
    return newArray;
};


// let numbers;
// let position;
// let itemRemoved;

// const removeFromArray = function(numbers, position) {

//     numbers.splice(numbers.indexOf(position), 1);
//     return numbers;
// };


// Do not edit below this line
module.exports = removeFromArray;
