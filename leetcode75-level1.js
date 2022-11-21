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
const mergeTwoLists = (list1, list2) => {
    if (list1 === null && list2 === null) return list1;
    if (list1 === null && list2 !== null) return list2;
    if (list2 === null && list1 !== null) return list1;

    let head;
    let other;
    if (list1.val <= list2.val) {
        head = list1;
        other = list2;
    }
    else {
        head = list2;
        other = list1;
    }
    let curr = head;
    let prev = null;

    while (curr) {
        if (!curr.next) break;
        if (curr.next.val > other.val) {
            const next = curr.next;
            curr.next = other;
            other = next;
        }

        curr = curr.next;
    }

    curr.next = other;

    return head;
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)


// 206. Reverse Linked List
// const reverseList = (head) => {
//     if (head === null || head.next === null) return head;
//     let memo = {};
//     let curr = head;
//     let count = 0;
//     let newHead;

//     while (curr) {
//         memo[count] = curr;

//         if (curr.next) {
//             count++;
//         }
//         curr = curr.next;
//     }

//     newHead = memo[count];
//     for (let i = count; i >= 0; i--) {
//         memo[i].next = memo[i - 1];
//         if (i === 0) memo[i].next = null;
//     }

//     return newHead;
// };
// CLEARER SOLUTION:
const reverseList = (head) => {

    let prev = null;
    let curr = head;


    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)


// ========== DAY 4: Linked List ========== //
// 876. Middle of the Linked List
// const middleNode = (head) => {
//     let length = 0;
//     let curr = head;

//     while (curr) {
//         length++;
//         curr = curr.next;
//     }

//     let mid = Math.floor(length / 2);
//     curr = head;
//     length = 0;

//     while (curr) {
//         if (length === mid) return curr;
//         length++;
//         curr = curr.next;
//     }
// }
// COOLER SOLUTION:
const middleNode = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)


// 142. Linked List Cycle II
const detectCycle = (head) => {
    const seen = new Set();

    let curr = head;
    while (curr) {
        seen.add(curr);
        if (seen.has(curr.next)) return curr.next;
        curr = curr.next;
    }

    return null;
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)


// ========== DAY 5: Greedy ========== //
// 121. Best Time to Buy and Sell Stock
const maxProfit = (prices) => {
    if (prices.length === 1) return 0;

    let distances = {};
    let smallest = prices[0];

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        if (!distances[price]) distances[price] = 0;
        if (price < smallest) smallest = price;
        if (price - smallest > distances[smallest]) distances[smallest] = price - smallest;
    }

    const sortedDistances = Object.values(distances).sort((a, b) => b - a);
    return sortedDistances[0];
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)


// 409. Longest Palindrome
const longestPalindrome = (s) => {
    const letterCount = {};
    for (let l of s) {
        if (!letterCount[l]) letterCount[l] = 1;
        else letterCount[l]++;
    }

    let evenCount = 0;
    let oddCount = 0;
    let addedOdd = false;
    for (let count of Object.values(letterCount)) {
        if (count % 2 === 0) evenCount += count;
        else {
            oddCount += (count - 1);
            addedOdd = true;
        }
    }
    if (addedOdd) oddCount++;
    return evenCount + oddCount;
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)


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
