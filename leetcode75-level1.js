// ================================================= //
// ==================== LEVEL 1 ==================== //
// ================================================= //

// ========== DAY 1: Prefix Sum ========== //
// 1480. Running Sum of 1d Array
const runningSum = (nums) => {
    let savedSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        savedSum += num;
        nums[i] = savedSum;
    }

    return nums;
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)

// 724. Find Pivot Index
const pivotIndex = (nums) => {
    let pointer = 0;
    let leftSum = 0;
    let rightSum = nums.reduce((acc, curr) => acc + curr, 0) - nums[0];

    while (pointer < nums.length) {
        if (pointer > 0) {
            leftSum += nums[pointer - 1];
            rightSum -= nums[pointer];
        }
        if (leftSum === rightSum) return pointer;

        pointer++;
    }

    return -1;
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)


// ========== DAY 2: String ========== //
// 205. Isomorphic Strings
const isIsomorphic = (s, t) => {
    const charMap = {};
    const added = new Set();
    let convertedWord = "";

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let corrChar = t[i];

        if (!charMap[char] && !added.has(corrChar)) {
            charMap[char] = corrChar;
            added.add(corrChar);
            convertedWord += corrChar;
        } else {
            convertedWord += charMap[char];
        }
    }

    if (convertedWord === t) return true;
    else return false;
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)


// 392. Is Subsequence
const isSubsequence = (s, t) => {
    let pointer = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[pointer]) pointer++;
    }

    if (pointer === s.length) return true;
    else return false;
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)


// ========== DAY 3: Linked List ========== //
// 21. Merge Two Sorted Lists
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 206. Reverse Linked List
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 4: Linked List ========== //
// 876. Middle of the Linked List
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 142. Linked List Cycle II
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 5: Greedy ========== //
// 121. Best Time to Buy and Sell Stock
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 409. Longest Palindrome
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 6: Tree ========== //
// 589. N-ary Tree Preorder Traversal
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 102. Binary Tree Level Order Traversal
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 7: Binary Search ========== //
// 704. Binary Search
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 278. First Bad Version
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 8: Binary Search Tree ========== //
// 98. Validate Binary Search Tree
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 235. Lowest Common Ancestor of a Binary Search Tree
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 9: Graph/BFS/DFS ========== //
// 733. Flood Fill
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 200. Number of Islands
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 10: Dynamic Programming ========== //
// 509. Fibonacci Number
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 70. Climbing Stairs
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 11: Dynamic Programming ========== //
// 746. Min Cost Climbing Stairs
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 62. Unique Paths
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 12: Sliding Window/Two Pointer ========== //
// 438. Find All Anagrams in a String
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 424. Longest Repeating Character Replacement
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 13: Hashmap ========== //
// 1. Two Sum
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 299. Bulls and Cows
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 14: Stack ========== //
// 844. Backspace String Compare
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 394. Decode String
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 15: Heap ========== //
// 1046. Last Stone Weight
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 692. Top K Frequent Words
// TIME COMPLEXITY:
// SPACE COMPLEXITY:
