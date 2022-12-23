// 1. TWO SUM
// Given an array of integers nums and an integer target,
//     return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
//     and you may not use the same element twice.
// You can return the answer in any order.

// // SOLUTION 1:
// function twoSum(nums, target) {
//     let output;

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 output = [i, j];
//                 return output;
//             }
//         }
//     }
// }

// SOLUTION 2:
const seen = new Set();
let neededNum;

const twoSum = (nums, target) => {
    const seen = new Set();
    let neededNum;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        neededNum = Math.abs(target - num);
        if (seen.has(neededNum)) return [i, nums.indexOf(neededNum)];

        seen.add(num);
    }
}

// const nums = [2,7,11,15];
// const target = 9;
// console.log(twoSum(nums, target));


// 9. PALINDROME NUMBER
// Given an integer x, return true if x is a palindrome, and false otherwise.
function isPalindrome(x) {
    return x.toString() === x.toString().split('').reverse().join('');
}

// const x = 121;
// console.log(isPalindrome(x));


// 10. ROMAN TO INTEGER
// Given a roman numeral, convert it to an integer.
function romanToInt(s) {
    const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let converted = 0;
    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];
        const nextChar = s[i + 1];

        if (currChar === "I") {
            if (nextChar && nextChar !== "I") {
                converted += romans[nextChar] - 1;
                i++;
            } else {
                converted += romans[currChar];
            }
        }
        else if (currChar === "X") {
            if (nextChar && (nextChar !== "I" && nextChar !== "V" && nextChar !== "X")) {
                converted += romans[nextChar] - 10;
                i++;
            } else {
                converted += romans[currChar];
            }
        }
        else if (currChar === "C") {
            if (nextChar && (nextChar === "D" || nextChar === "M")) {
                converted += romans[nextChar] - 100;
                i++;
            } else {
                converted += romans[currChar];
            }
        }
        else converted += romans[currChar];
    }

    return converted;
}

// const s = "DCXXI"; // 621
// console.log(romanToInt(s));


// 14. Longest Common Prefix
    // Write a function to find the longest common prefix string amongst an array of strings.
    // If there is no common prefix, return an empty string "".

    function longestCommonPrefix(strs) {
        if (strs.length === 1) return strs[0];
        let common = "";

        const shortestWord = strs.reduce((acc, currVal) => {
            if (currVal.length < acc.length) acc = currVal;
            return acc;
        }, strs[0]);

        for (let i = 0; i < shortestWord.length; i++) {
            let tmp = shortestWord[i];
            for (let j = 0; j < strs.length; j++) {
                if (strs[j][i] !== shortestWord[i]) return common;
                if (j === strs.length - 1 && strs[j][i] === shortestWord[i]) common += tmp;
            }
        }

        return common;
    }

    // const strs = ["flower", "flow", "flight"];
    // console.log(longestCommonPrefix(strs));


// 20. Valid Parentheses
const isValid = (s) => {
    let stack = []

    let p = {
      ')': '(',
      ']': '[',
      '}': '{'
    }

    for (let i of s) {
      if ('([{'.includes(i)) {
        stack.push(i)
      } else if (p[i] === stack[stack.length - 1]) {
        stack.pop()
      }else{
        stack.push(i)
      }
    }

    if (stack.length)return false
    return true
}
// const s = "()[]{}";
// const s = "([)]";
// const s = "(([]){})";
// console.log(isValid(s));


// 26. Remove Duplicates from Sorted Array
const removeDuplicates = nums => {
    const seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            nums.splice(i, 1);
            i--;
        } else {
            seen.add(nums[i]);
        }
    }

    return nums.length;
}


//27. Remove Element
const removeElement = (nums, val) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};


// 58. Length of Last Word
const lengthOfLastWord = s => s.trim().split(' ').reverse()[0].length;


//66. Plus One
const plusOne = digits => {
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1]++;
        return digits;
    } else {
        for (let i = digits.length - 1; i >= 0; i--) {
            if (i === 0 && digits[i] === 9) {
                digits[i] = 0;
                digits.unshift(1);
                return digits;
            }
            else if (digits[i] === 9) {
                digits[i] = 0;
            } else {
                digits[i]++;
                return digits;
            }
        }
    }
    return digits;
};


// 67. Add Binary
const addBinary = (a, b) => (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);


// 69. Sqrt(x)
const mySqrt = x => {
    if (x === 0) return 0;
    if (x <= 2) return 1;
    for (let i = 2; i <= x; i ++) {
        if (i ** 2 === x) return i;
        else if (i ** 2 > x) return i - 1;
    }
}

// 83. Remove Duplicates from Sorted List
const deleteDuplicates = head => {
    let curr = head;
    let tmp = null;
    while (curr) {
        if (tmp) {
            if (curr.next === null || tmp.val !== curr.next.val) {
                tmp.next = curr.next;
                tmp = null;
            }
        } else {
            if (curr.next && curr.val === curr.next.val) tmp = curr;
        }

        curr = curr.next;
    }

    return head;
}


// 88. Merge Sorted Array
// BRUTE FORCE:
const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, nums1.length - m);
    nums1.push(...nums2);
    return nums1.sort((a, b) => a - b);
};


// 94. Binary Tree Inorder Traversal
const inorderTraversal = root => {
    if (!root) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}


// 100. Same Tree
const isSameTree = (p, q) => {
    if (p && q) {
        if (p.val !== q.val) return false;
    } else {
        if (!p && !q) return true;
        else return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}


// 101. Symmetric Tree
const isSymmetric = root => {
    if (!root || (!root.left && !root.right)) return true;
    const q1 = [root.left], q2 = [root.right];
    while (q1.length && q2.length) {
        const left = q1.shift();
        const right = q2.shift();
        if (!left && !right) continue;
        if (!left || !right || left.val !== right.val) return false;
        q1.push(left.left, left.right);
        q2.push(right.right, right.left);
    }
    return true;
};


// 108. Convert Sorted Array to Binary Search Tree
const sortedArrayToBST = nums => {
    if (!nums.length) return null;
    const mid = Math.floor(nums.length / 2);
    const head = new TreeNode(nums[mid]);

    head.left = sortedArrayToBST(nums.slice(0, mid));
    head.right = sortedArrayToBST(nums.slice(mid + 1));

    return head;
};


// 191. Number of 1 Bits
const hammingWeight = n => n.toString(2).replaceAll("0", "").length;


// 914. X of a Kind in a Deck of Cards <= UNFINISHED
const hasGCF = (arr) => {
    arr.sort((a, b) => a - b);

    for (let i = 2; i < arr[0]; i++) {

        let count = 0;
        arr.forEach(el => {
            if (el % i === 0) count++;
        });

        if (count === arr.length) return true;

    }

    return false;
}

const hasGroupsSizeX = deck => {
    if (deck.length <= 1) return false;

    const group = {};
    for (let card of deck) {
        if (!group[card]) group[card] = 1;
        else group[card]++;
    }

    const cardCounts = Object.values(group);
    if (cardCounts.length === 1) return true;

    return hasGCF(cardCounts);
}


// 35. Search Insert Position
const searchInsert = (nums, target) => {
    if (nums.indexOf(target) !== -1) return nums.indexOf(target);
    if (target < nums[0]) return 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (target > nums[i]) return i + 1;
    }
};


// 2016. Maximum Difference Between Increasing Elements
// const maximumDifference = (nums) => {
//     let max = -1;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] - nums[i] > max && nums[j] - nums[i] > 0) max = nums[j] - nums[i];
//         }
//     }
//     return max;
// };
// BETTER SOLUTION:
const maximumDifference = (nums) => {
    let min = Infinity, max = -1;
    for(let i in nums){
        min = Math.min(nums[i], min);
        max = Math.max(nums[i] - min, max)
    }
    return max ? max : -1;
};
