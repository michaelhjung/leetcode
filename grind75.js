// * before title means it's also on Blind75
// * after title means it's also on New Blind50

// ===== Week 1 ===== //
// *Two Sum*
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i in nums) {
        const difference = target - nums[i];
        if (map.has(difference)) return [map.get(difference), i];
        map.set(nums[i], i);
    }
};
// *Valid Parentheses*
const isValid = (s) => {
    if (s.length % 2 !== 0) return false;

    const closing = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    const stack = [];

    for (let char of s) {
        if (char in closing) {
            if (!stack.length) return false;
            const open = stack.pop();
            if (open !== closing[char]) return false;
        } else stack.push(char);
    }

    if (stack.length) return false;
    else return true;
};
// *Merge Two Sorted Lists
const mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) return l1 ? l1 : l2;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
// *Best Time to Buy and Sell Stock*
// *Valid Palindrome
// *Invert Binary Tree*
// *Valid Anagram*
// Binary Search
// Flood Fill
// *Lowest Common Ancestor of a Binary Search Tree*
// Balanced Binary Tree
// *Linked List Cycle*
// Implement Queue using Stacks


// ===== Week 2 ===== //
// First Bad Version
// Ransom Note
// *Climbing Stairs*
// Longest Palindrome
// Reverse Linked List
// Majority Element
// Add Binary
// Diameter of Binary Tree
// Middle of the Linked List
// *Maximum Depth of Binary Tree*
// *Contains Duplicate*
// *Maximum Subarray*


// ===== Week 3 ===== //
// *Insert Interval*
// 01 Matrix
// K Closest Points to Origin
// *Longest Substring Without Repeating Characters*
// *3Sum*
// *Binary Tree Level Order Traversal*
// *Clone Graph*
// Evaluate Reverse Polish Notation


// ===== Week 4 ===== //
// *Course Schedule*
// *Implement Trie (Prefix Tree)*
// *Coin Change*
// *Product of Array Except Self*
// Min Stack
// *Validate Binary Search Tree*
// *Number of Islands*
// Rotting Oranges


// ===== Week 5 ===== //
// *Search in Rotated Sorted Array*
// *Combination Sum
// Permutations
// *Merge Intervals*
// *Lowest Common Ancestor of a Binary Tree
// Time Based Key-Value Store
// Accounts Merge
// Sort Colors


// ===== Week 6 ===== //
// *Word Break*
// Partition Equal Subset Sum
// String to Integer (atoi)
// *Spiral Matrix
// Subsets
// Binary Tree Right Side View
// *Longest Palindromic Substring
// *Unique Paths*
// *Construct Binary Tree from Preorder and Inorder Traversal*


// ===== Week 7 ===== //
// *Container With Most Water*
// Letter Combinations of a Phone Number
// *Word Search
// Find All Anagrams in a String
// Minimum Height Trees
// Task Scheduler
// LRU Cache


// ===== Week 8 ===== //
// *Kth Smallest Element in a BST*
// *Minimum Window Substring*
// *Serialize and Deserialize Binary Tree
// Trapping Rain Water
// *Find Median from Data Stream*
// Word Ladder
// Basic Calculator
// Maximum Profit in Job Scheduling
// *Merge k Sorted Lists*
// Largest Rectangle in Historgram
