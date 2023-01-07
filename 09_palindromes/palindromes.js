const palindromes = function(string) {
    const processedString = string.toLowerCase().replace(/[^a-z]/g, '');
    return (
        processedString
                .split("")
                .reverse()
                .join("") == processedString
    );
};

// const palindromes = function (text) {   
//     text = text.replace(/[^0-9a-z]/gi, '');
//     text = text.toLowerCase();
//     let chars = text.split('');
//     let newText = "";

//     for (let i = (text.length-1); i >= 0; i--) {
//         newText += text[i];
//     }

//     return newText === text;
    
// };

// Do not edit below this line
module.exports = palindromes;
