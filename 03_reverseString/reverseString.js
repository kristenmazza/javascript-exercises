let text;

const reverseString = function(text) {
    let newString = "";

    let i = 1;
    while (i <= text.length) {
        newString = newString + text.charAt(text.length-i);
        i++;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;


//length of "hello" is 5
// i = 1 < 5 return o
// i = 2 < 5 return l
// i = 3 < 5 return l
// i = 4 < 5 return e
