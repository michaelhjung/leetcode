// 2. ADD TWO NUMBERS
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains
//   a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero,
//   except the number 0 itself.


// 48. Rotate Image
const rotate = (matrix) => {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let tmp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = tmp;
            if (row === col) break;
        }
    }
    matrix.forEach(row => row.reverse());
    return matrix;
};
// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));


// 91. Decode Ways <== UNFINISHED
// const isValidCode = (s) => {
//     if (s.length > 2) return false;
//     if (Number(s) < 1 || Number(s) > 26) return false;
//     if (s[0] === "0") return false;
//     return true;
// }
// const maxPossDecodings = (n, memo = {}) => {
//     let result;

//     if (n <= 3) return n;
//     else if (memo[n]) return memo[n];
//     else result = maxPossDecodings(n - 1, memo) + maxPossDecodings(n - 2, memo);
//     memo[n] = result;

//     return result;
// }
// const numDecodings = (s) => {
//     let count = 0;
//     if (s[0] === "0" || !s.length) return count;

//     count += maxPossDecodings(s.length);

//     for (let i = 1; i < s.length; i++) {
//         const twoDigitSubStr = s[i - 1] + s[i];
//         if (!isValidCode(twoDigitSubStr)) count--;
//         if (!isValidCode(s[i])) count -= 1 * (s.length - 1);
//     }

//     return count;
// };


// 198. House Robber
const rob = (nums) => {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    // let maxAtTwoBefore = nums[0];
    // let maxAtOneBefore = Math.max(nums[0], nums[1]);

    // for (let i = 2; i < nums.length; i++) {
    //     const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    //     maxAtTwoBefore = maxAtOneBefore;
    //     maxAtOneBefore = maxAtCurrent;
    // }

    // return maxAtOneBefore;

    const state = [];
    state[0] = nums[0];
    state[1] = Math.max(state[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        state[i] = Math.max(state[i - 1], state[i - 2] + nums[i]);
    }
    return state[nums.length - 1];
};


// 523. Continuous Subarray Sum
// BRUTE FORCE:
const checkSubarraySum = (nums, k) => {
    for (let i = 0; i < nums.length; i++) {
        let currSum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            currSum += nums[j];
            if (currSum % k === 0) return true;
        }
    }
    return false;
};


// 809. Expressive Words <== UNFINISHED
const expressiveWords = (s, words) => {
    let count = 0;
    const splitS = [];
    let tmp = { startI: 0, letter: s[0] };
    for (let i = 1; i < s.length; i++) {
        if ((tmp.letter !== null && s[i] !== tmp.letter) || i === s.length - 1) {
            const section = s.slice(tmp.startI, i);
            splitS.push(section);

            tmp.startI = i;
            tmp.letter = s[i];
        }
    }




};
// const s = "heeellooo";
// const words = ["hello", "hi", "helo"];
// const s = "abcd";
// const words = ["abc"];
// console.log(expressiveWords(s, words));
