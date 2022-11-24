// ----- WEEK 11/21/22 ----- //
function breakPalindrome(palindromeStr) {
    // Write your code here
    if (palindromeStr.length === 1 && palindromeStr[0] === "a") return "IMPOSSIBLE";
    const alphas = "abcdefghijklmnopqrstuvwxyz";

    let newStr = "";

    for (let i = 0; i < palindromeStr.length; i++) {
        const alphaIndex = alphas.indexOf(palindromeStr[i]);

        if (alphaIndex > 0 && i < palindromeStr.length - 1) {
            newStr += alphas[alphaIndex - alphaIndex];
            newStr += palindromeStr.slice(i + 1);
            if (newStr.split('').reverse().join('') === newStr) return "IMPOSSIBLE";
            else return newStr;
        } else if (alphaIndex > 0 && i === palindromeStr.length - 1) {
            newStr += alphas[alphaIndex - 1];
            if (newStr.split('').reverse().join('') === newStr) return "IMPOSSIBLE";
            else return newStr;
        } else {
            newStr += palindromeStr[i];
        }
    }

    return "IMPOSSIBLE";
}

function getSearchResults(words, queries) {
    // Write your code here
    const result = [];

    queries.forEach(query => {
        const matches = [];

        const sortedStr = query.split('').sort().join('');
        words.filter(word => word.length === query.length).forEach(word => {
            const sortedWord = word.split('').sort().join('');
            if (sortedWord === sortedStr) matches.push(word);
        });

        result.push(matches.sort());
    });

    return result;
}

function findMinimumPrice(price, m) {
    // Write your code here
    let sum = price.reduce((acc, curr) => acc + curr, 0);
    let maxPrice = 0;
    for (let p of price) {
        if (p > maxPrice) maxPrice = p;
    }

    let discountedPrice = Math.floor(maxPrice / (2**m));
    return sum - maxPrice + discountedPrice;
}
console.log(findMinimumPrice([655, 800, 576, 884, 455,
418, 414, 818, 167, 495,
218, 992,  29, 457, 162,
834, 769], 87));
