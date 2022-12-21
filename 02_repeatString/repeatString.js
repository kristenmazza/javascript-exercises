let text;
let n;

const repeatString = function(text, n) {
    let output = "";

    if (n < 0 ) return "ERROR";

    for (let i = 0; i < n; i++) {
        output = output + text;
    }
    return output;
}

// Do not edit below this line
module.exports = repeatString;
