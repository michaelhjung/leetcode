// ================================================= //
// ==================== LEVEL 1 ==================== //
// ================================================= //

// ========== DAY 1 ========== //
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
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 2 ========== //
// 205. Isomorphic Strings
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 392. Is Subsequence
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 3 ========== //
// 21. Merge Two Sorted Lists
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 206. Reverse Linked List
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 4 ========== //
// 876. Middle of the Linked List
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 142. Linked List Cycle II
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 5 ========== //
// 121. Best Time to Buy and Sell Stock
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 409. Longest Palindrome
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 6 ========== //
// 589. N-ary Tree Preorder Traversal
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 102. Binary Tree Level Order Traversal
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 7 ========== //
// 704. Binary Search
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 278. First Bad Version
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 8 ========== //
// 98. Validate Binary Search Tree
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 235. Lowest Common Ancestor of a Binary Search Tree
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 9 ========== //
// 733. Flood Fill
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 200. Number of Islands
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 10 ========== //
// 509. Fibonacci Number
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 70. Climbing Stairs
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 11 ========== //
// 746. Min Cost Climbing Stairs
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 62. Unique Paths
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 12 ========== //
// 438. Find All Anagrams in a String
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 424. Longest Repeating Character Replacement
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 13 ========== //
// 1. Two Sum
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 299. Bulls and Cows
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 14 ========== //
// 844. Backspace String Compare
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 394. Decode String
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 15 ========== //
// 1046. Last Stone Weight
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 692. Top K Frequent Words
// TIME COMPLEXITY:
// SPACE COMPLEXITY:
