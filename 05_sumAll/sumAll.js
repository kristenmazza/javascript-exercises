let firstNum;
let lastNum;

const sumAll = function(firstNum, lastNum) {
    let finalSum = 0;
    if (firstNum < 0 || lastNum < 0) {
        return "ERROR";
    } else if (typeof firstNum != "number" || typeof lastNum != "number") {
        return "ERROR";
    } else if (firstNum < lastNum) {
        for (let i = firstNum; i <= lastNum; i++) {
            finalSum += i;
        }
    } else {
        for (let i = firstNum; i >= lastNum; i--) {
            finalSum += i;
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
