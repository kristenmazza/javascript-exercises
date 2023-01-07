const fibonacci = function(item) {
    if (item < 0) return "OOPS";
    if (item === 0) return 0;

    let a = 0;
    let b = 1;

    for (let i=1; i<item; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

// const fibonacci = function(item) {
//     const sequence = [0, 1];

//     if (item < 0) return "OOPS";

//     let nextNum = 0;
//     for (let i=1; i<item; i++) {
//         nextNum = sequence[i] + sequence[i-1];
//         sequence.push(nextNum);
//     }

//     return sequence[item];
// };

// Do not edit below this line
module.exports = fibonacci;
