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


// 91. Decode Ways
const numDecodings = (s) => {
    if (!s || s.length === 0) return 0;
    if (s[0] === '0') return 0;

    const table = new Array(s.length + 1).fill(0);

    table[0] = 1;
    table[1] = 1;

    for (let i = 2; i <= s.length; i++) {
        const lastOneDigit = Number(s.slice(i - 1, i));
        if (lastOneDigit >= 1 && lastOneDigit <= 9) {
            table[i] += table[i - 1];
        }

        const lastTwoDigits = Number(s.slice(i - 2, i));
        if (lastTwoDigits >= 10 && lastTwoDigits <= 26) {
            table[i] += table[i - 2];
        }
    }

    return table[s.length];
};


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


// 881. Boats to Save People
const numRescueBoats = (people, limit) => {
    let count = 0;
    people.sort((a, b) => b - a);
    let left = 0, right = people.length - 1;
    while (left <= right) {
        if (people[left] + people[right] <= limit) right--;
        left++;
        count++
    }
    return count;
};
