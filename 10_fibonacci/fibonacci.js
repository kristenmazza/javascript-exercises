const fibonacci = function(item) {
    const sequence = [0, 1];

    if (item < 0) return "OOPS";

    let nextNum = 0;
    for (i=1; i<item; i++) {
        nextNum = sequence[i] + sequence[i-1];
        sequence.push(nextNum);
    }

    return sequence[item];
};

// Do not edit below this line
module.exports = fibonacci;
