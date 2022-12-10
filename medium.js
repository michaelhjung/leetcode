// 2. ADD TWO NUMBERS
    // You are given two non-empty linked lists representing two non-negative integers.
    // The digits are stored in reverse order, and each of their nodes contains
    //   a single digit.
    // Add the two numbers and return the sum as a linked list.

    // You may assume the two numbers do not contain any leading zero,
    //   except the number 0 itself.


// // 809. Expressive Words
// const expressiveWords = (s, words) => {
//     /* PSEUDOCODE:
//         1. compare each word with a copy of s.
//         2. splice every letter that are in both
//         3. the word should have nothing left
//         4. the s should only have letters that are 2 or more left
//     */
//     let res = 0;

//     for (let word of words) {
//         const copySarr = s.split('');
//         const wordArr = word.split('');

//         let wrongLetter = false;
//         const set = new Set();
//         for (let letter of wordArr) set.add(letter);
//         for (let letter of copySarr) {
//             if (!set.has(letter)) wrongLetter = true;
//         }
//         if (wrongLetter) break;

//         for (let i = wordArr.length - 1; i >= 0; i--) {
//             let letter = wordArr[i];
//             let sIndex = copySarr.indexOf(letter);
//             if (sIndex !== -1) {
//                 copySarr.splice(sIndex, 1);
//                 wordArr.splice(i, 1);
//             }
//         }

//         if (wordArr.length === 0 && copySarr.length !== 1) {
//             let onlyOneLetter = false;
//             for (let i = 0; i < copySarr.length; i++) {
//                 const prevLetter = copySarr[i - 1];
//                 const currLetter = copySarr[i];
//                 const nextLetter = copySarr[i + 1];

//                 if ((prevLetter && prevLetter !== currLetter) && (nextLetter && nextLetter !== currLetter)) {
//                     onlyOneLetter = true;
//                 }
//             }
//             if (!onlyOneLetter) res++;
//         }
//     }

//     return res;
// };
// // const s = "heeellooo";
// // const words = ["hello", "hi", "helo"];
// const s = "abcd";
// const words = ["abc"];
// console.log(expressiveWords(s, words));
