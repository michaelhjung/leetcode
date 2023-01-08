// 2. ADD TWO NUMBERS
const addTwoNumbers = (l1, l2) => {
    let n1 = "";
    let n2 = "";

    let curr = l1;
    while (curr) {
        n1 = curr.val + n1;
        curr = curr.next;
    }
    curr = l2;
    while (curr) {
        n2 = curr.val + n2;
        curr = curr.next;
    }

    const sum = BigInt(n1) + BigInt(n2);
    const sumStr = sum.toString();

    const head = new ListNode(Number(sumStr[sumStr.length - 1]));
    let currNode = head;
    for (let i = sumStr.length - 2; i >= 0; i--) {
        currNode.next = new ListNode(Number(sumStr[i]));
        currNode = currNode.next;
    }
    return head;
};


// 15. 3Sum
const threeSum = nums => {
    const res = [];
    nums.sort((a, b) => a - b);
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            if (curr + nums[left] + nums[right] === 0) {
                if (!set.has([curr, nums[left], nums[right]].toString())) res.push([curr, nums[left], nums[right]]);
                set.add([curr, nums[left], nums[right]].toString());
                left++;
                right--;
            }
            else if (curr + nums[left] + nums[right] > 0) right--;
            else if (curr + nums[left] + nums[right] < 0) left++;
        }
    }

    return res;
};


// 48. Rotate Image
const rotate = matrix => {
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


// 91. Decode Ways
const numDecodings = s => {
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
const rob = nums => {
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


// 204. Count Primes
// const countPrimes = n => {
//     const seen = new Set();
//     let primeCount = 0;
//     for (let i = 2; i < n; i++) {
//         if (seen.has(i)) continue;
//         primeCount++;
//         for (let j = i ** 2; j < n; j += i) {
//             seen.add(j);
//         }
//     }
//     return primeCount;
// };
const countPrimes = n => {
    const table = new Array(n).fill(true);
    table[0] = false;
    table[1] = false;
    for (let i = 2; i < n; i++) {
        if (!table[i]) continue;
        for (let j = i ** 2; j < n; j += i) {
            table[j] = false;
        }
    }
    return table.filter(el => el === true).length;
};


// 443. String Compression
const compress = chars => {
    if (!chars.length) return 0;
    let letter = chars[0], count = 1, pointer = 0;
    for (let i = 1; i <= chars.length; i++) {
        if (chars[i] !== letter) {
            if (count > 1) {
                const numStr = count.toString();
                for (let d = 0; d < numStr.length; d++) chars[++pointer] = numStr[d];
            }
            pointer++;
            letter = chars[i];
            count = 1;
        }
        else count++;
    }
    return pointer;
};


// 518. Coin Change II
const change = (amount, coins) => {
    if (amount === 0) return 1;
    if (coins.length === 0) return 0;

    const dp = Array(amount + 1).fill(0);
    dp[0] = 1;

    for (let coin of coins) {
        for (let j = coin; j <= amount; j++) {
            dp[j] += dp[j - coin];
        }
    }

    return dp[amount];
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


// 809. Expressive Words
const expressiveWords = (S, words) => {
    const isExpressive = (word) => {
        let wI = 0;
        let sI = 0;

        while (wI < word.length || sI < S.length) {
            let countW = 1;
            let countS = 1;

            if (word[wI] !== S[sI]) return false;

            while (word[wI] === word[wI++ + 1]) countW++;
            while (S[sI] === S[sI++ + 1]) countS++;

            if (countS < countW || (countS !== countW && countS < 3)) return false;
        }

        return true;
    }

    return words.filter(isExpressive).length;
}
// // WORK IN PROGRESS ALTERNATIVE WAY:
// const expressiveWords = (s, words) => {
//     let res = 0;

//     // step 1: get normalized data of s character counts
//     const sChars = {};
//     let sPointer = 1, sCount = 1, currChar = s[0], idx = 0;
//     while (sPointer < s.length) {
//         if (s[sPointer] !== currChar) {
//             sChars[idx] = { val: currChar, count: sCount };

//             // reset:
//             sCount = 1;
//             currChar = s[sPointer];
//             idx++;
//         } else {
//             sCount++;
//         }

//         if (sPointer === s.length - 1) sChars[idx] = { val: currChar, count: sCount };

//         sPointer++;
//     }

//     // step 2: compare letter counts of each word and don't count any where difference is exactly 1


//     return res;
// };


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


// 1010. Pairs of Songs With Total Durations Divisible by 60
const numPairsDivisibleBy60 = time => {
    let count = 0;
    const map = {};
    for (let t of time) {
        const remainder = t % 60;
        const needed = (60 - remainder) % 60;
        count += map[needed] ? map[needed] : 0;
        map[remainder] = map[remainder] ? map[remainder] + 1 : 1;
    }
    return count;
};


// 1492. The kth Factor of n
const kthFactor = (n, k) => {
    const factors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) factors.push(i);
    }

    if (factors[k - 1]) return factors[k - 1];
    else return -1;
};
