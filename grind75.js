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
const isValid = s => {
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
const maxProfit = prices => {
    let profit = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i];
        else if (prices[i] - min > profit) profit = prices[i] - min;
    }

    return profit;
};

// *Valid Palindrome
const isPalindrome = s => {
    const regEx = /^[0-9a-z]+$/;
    const stack = [];
    for (let c of s) if (c.toLowerCase().match(regEx)) {
        stack.push(c.toLowerCase());
    }
    for (let i = 0, j = stack.length - 1; i < j; i++, j--) {
        if (stack[i] !== stack[j]) return false;
    }

    return true;
};

// *Invert Binary Tree*
const invertTree = root => {
    if (!root) return null;

    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);

    return root;
};

// *Valid Anagram*
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const sCount = {};
    const tCount = {};
    for (let i = 0; i < s.length; i++) {
        if (sCount[s[i]]) sCount[s[i]]++;
        else sCount[s[i]] = 1;

        if (tCount[t[i]]) tCount[t[i]]++;
        else tCount[t[i]] = 1;
    }

    if (Object.entries(sCount).sort().toString() === Object.entries(tCount).sort().toString()) return true;
    else return false;
};

// Binary Search
const search = (nums, target) => {
    if (!nums.length || (nums.length === 1 && nums[0] !== target)) return -1;

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        if (target > nums[mid]) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
};

// Flood Fill
const findNeighbors = (node, image) => {
    const neighbors = [];
    const row = node[0];
    const col = node[1];

    // up
    if (row - 1 >= 0) neighbors.push([row - 1, col]);
    // down
    if (row + 1 <= image.length - 1) neighbors.push([row + 1, col]);
    // left
    if (col - 1 >= 0) neighbors.push([row, col - 1]);
    // right
    if (col + 1 <= image[0].length - 1) neighbors.push([row, col + 1]);

    return neighbors;
}
const floodFill = (image, sr, sc, color) => {
    const start = image[sr][sc];
    if (start === color) return image;

    const stack = [[sr, sc]];
    const seen = new Set();

    while (stack.length) {
        const currNode = stack.pop();
        image[currNode[0]][currNode[1]] = color;
        const neighbors = findNeighbors(currNode, image);

        neighbors.forEach(neighbor => {
            if (!seen.has(neighbor.toString()) && image[neighbor[0]][neighbor[1]] === start) {
                stack.push(neighbor);
            }
            seen.add(neighbor.toString());
        });
    }

    return image;
};

// *Lowest Common Ancestor of a Binary Search Tree*
const lowestCommonAncestor = (root, p, q) => {
    while (root) {
        if ((root.val >= p.val && root.val <= q.val) || (root.val <= p.val && root.val >= q.val)) return root;
        else if (root.val < p.val || root.val < q.val) root = root.right;
        else root = root.left;
    }
};

// Balanced Binary Tree
const height = root => {
    if (!root) return 0;
    else {
        let l = 1 + height(root.left);
        let r = 1 + height(root.right);
        if (r > l) return r;
        else return l;
    }
}
const isBalanced = function (root) {
    if (!root) return true;
    else {
        let leftHeight = height(root.left);
        let rightHeight = height(root.right);
        let res = Math.abs(leftHeight - rightHeight) <= 1;
        return res && isBalanced(root.left) && isBalanced(root.right);
    }
};

// *Linked List Cycle*
const hasCycle = head => {
    let curr = head;
    const seen = new Set();
    while (curr) {
        if (seen.has(curr)) return true;
        seen.add(curr);
        curr = curr.next;
    }

    return false;
};

// Implement Queue using Stacks


// ===== Week 2 ===== //
// First Bad Version
const isBadVersion = () => {
    return n => {
        let left = 0;
        let right = n;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (isBadVersion(mid)) {
                if (isBadVersion(mid - 1)) right = mid - 1;
                else return mid;
            }
            else left = mid + 1;
        }
    }
}

// Ransom Note
const canConstruct = (ransomNote, magazine) => {
    const charCount = {};
    for (let c of magazine) {
        if (c in charCount) charCount[c]++;
        else charCount[c] = 1;
    }

    for (let c of ransomNote) {
        if (!charCount[c] || charCount[c] < 1) return false;
        else charCount[c]--;
    }

    return true;
};

// *Climbing Stairs*
const climbStairs = n => {
    if (n <= 3) return n;

    const table = new Array(n + 1).fill();
    table[0] = 0;
    table[1] = 1;
    table[2] = 2;
    table[3] = 3;

    for (let i = 4; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
};

// Longest Palindrome
const longestPalindrome = s => {
    const charCount = {};

    for (let c of s) {
        if (c in charCount) charCount[c]++;
        else charCount[c] = 1;
    }

    const cCountList = Object.values(charCount).sort((a, b) => a - b);
    let l = 0;
    let firstOddAdded = false;

    for (let i = 0; i < cCountList.length; i++) {
        if (!firstOddAdded && cCountList[i] % 2 !== 0) {
            l += cCountList[i];
            firstOddAdded = true;
        }
        else if (firstOddAdded && cCountList[i] % 2 !== 0) l += (cCountList[i] - 1);
        else l += cCountList[i];
    }

    return l;
};

// Reverse Linked List
const reverseList = head => {
    if (!head || !head.next) return head;

    let prev = null;
    let curr = head;
    while (curr.next) {
        const oldNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = oldNext;
    }
    curr.next = prev;
    return curr;
};

// Majority Element
const majorityElement = nums => nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)] || nums[0];

// Add Binary
const addBinary = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);

// Diameter of Binary Tree
const diameterOfBinaryTree = root => {
    let max = 0;
    const dfs = root => {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);

        max = Math.max(max, left + right);
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return max;
};

// Middle of the Linked List
const middleNode = head => {
    const arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    const mid = Math.floor(arr.length / 2);
    return arr[mid];
};

// *Maximum Depth of Binary Tree*
const maxDepth = root => {
    if (!root) return root;
    let max = 0;

    const dfs = root => {
        if (!root) return 0;
        let left = dfs(root.left);
        let right = dfs(root.right);
        max = Math.max(left, right);
        return 1 + Math.max(left, right);
    }
    dfs(root);

    return max + 1;
};

// *Contains Duplicate*
const containsDuplicate = nums => {
    const set = new Set();
    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
};


// *Maximum Subarray*
const maxSubArray = nums => {
    if (nums.length === 1) return nums[0];
    let max = -Infinity;
    let tmp = 0;
    for (let num of nums) {
        tmp = tmp < 0 ? 0 : tmp;
        tmp += num;
        max = Math.max(max, tmp);
    }
    return max;
};


// ===== Week 3 ===== //
// *Insert Interval*
const insert = (intervals, newInterval) => {
    let [start, end] = newInterval;
    let left = [];
    let right = [];

    for (const interval of intervals) {
        const [first, last] = interval;

        // current interval is smaller than newInterval
        if (last < start) left.push(interval);

        // current interval is larger than newInterval
        else if (first > end) right.push(interval);

        // there is a overlap
        else {
            start = Math.min(start, first);
            end = Math.max(end, last);
        }
    }

    return [...left, [start, end], ...right];
};

// 01 Matrix
// // BRUTE FORCE:
// const findMatNeighbors = (node, image) => {
//     const neighbors = [];
//     const row = node[0];
//     const col = node[1];

//     if (row - 1 >= 0) neighbors.push([row - 1, col]);
//     if (row + 1 <= image.length - 1) neighbors.push([row + 1, col]);
//     if (col - 1 >= 0) neighbors.push([row, col - 1]);
//     if (col + 1 <= image[0].length - 1) neighbors.push([row, col + 1]);

//     return neighbors;
// }
// const updateMatrix = mat => {
//     for (let i = 0; i < mat.length; i++) {
//         for (let j = 0; j < mat[i].length; j++) {
//             const node = mat[i][j];
//             if (node === 1) {
//                 const set = new Set();
//                 let queue = [[[i, j]]];

//                 while (queue.length) {
//                     const currPath = queue.shift();
//                     const lastNode = currPath[currPath.length - 1];
//                     set.add(lastNode.toString());

//                     if (mat[lastNode[0]][lastNode[1]] === 0) {
//                         mat[i][j] = currPath.length - 1;
//                         queue = [];
//                         break;
//                     }
//                     else {
//                         const neighbors = findMatNeighbors(lastNode, mat);
//                         neighbors.forEach(n => {
//                             if (!set.has(n)) {
//                                 const copyPath = currPath.slice(0);
//                                 copyPath.push(n);
//                                 queue.push(copyPath);
//                             }
//                         });
//                     }
//                 }
//             }
//         }
//     }
//     return mat;
// };
// DP:

// K Closest Points to Origin
// *Longest Substring Without Repeating Characters*
const lengthOfLongestSubstring = s => {
    if (s.length <= 1) return s.length;
    const set = new Set();
    let tmp = 0;
    let max = -Infinity;

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            if (set.size > max) max = set.size;
        } else {
            if (set.size > max) max = set.size;
            set.clear();
            i = tmp;
            tmp++;
        }
    }

    return max;
};

// *3Sum*
const threeSum = nums => {
    nums.sort((a, b) => a - b);
    const set = new Set();
    const res = [];
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
            else left++;
        }
    }

    return res;
}

// *Binary Tree Level Order Traversal*
const levelOrder = root => {
    if (!root) return [];
    const res = [];

    const queue = [root];
    while (queue.length) {
        const currQLength = queue.length;
        const level = [];
        for (let i = 0; i < currQLength; i++) {
            const node = queue.pop();
            level.push(node.val);
            if (node.left) queue.unshift(node.left);
            if (node.right) queue.unshift(node.right);
        }
        res.push(level);
    }

    return res;
};

// *Clone Graph*
const cloneGraph = node => {
    const map = {};

    const traverse = (node) => {
        if (!node) return node;
        if (!map[node.val]) {
            map[node.val] = new Node(node.val);
            map[node.val].neighbors = node.neighbors.map(neighbor => traverse(neighbor));
        }
        return map[node.val];
    }

    return traverse(node);
};

// Evaluate Reverse Polish Notation


// ===== Week 4 ===== //
// *Course Schedule*
// RIDICULOUS BRUTE FORCE SOLUTION:
// const canFinish = (numCourses, prerequisites) => {
//     if (prerequisites.length === 1) return true;
//     const adjList = [...new Array(numCourses)].map(el => []);
//     prerequisites.forEach(prereq => {
//         const [c, p] = prereq;
//         adjList[c].push(p);
//     });

//     console.log(adjList);

//     const set = new Set();
//     adjList.forEach(list => set.add(list.toString()));
//     if (!set.has([].toString())) return false;

//     let count = 0;
//     let stack = [];
//     for (let i = 0; i < prerequisites.length; i++) stack.push(i);

//     while (stack.length) {
//         const index = stack.pop();
//         if (adjList[index] && adjList[index].length) {
//             adjList[index].forEach(el => {
//                 stack.push(el);
//             });
//         }
//         count++;
//         if (count > prerequisites.length ** 2) return false;
//     }

//     for (let i = 0; i < adjList.length; i++) {
//         const prereqs = adjList[i];
//         for (let j = 0; j < prereqs.length; j++) {
//             if (adjList[prereqs[j]].includes(i)) return false;
//         }
//     }

//     return true;
// };

// *Implement Trie (Prefix Tree)*
// *Coin Change*
const coinChange = (coins, amount) => {
    if (amount === 0) return 0;
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;

    for (let coin of coins) {
        for (let i = 0; i < table.length; i++) {
            if (coin <= i) {
                table[i] = Math.min(table[i], 1 + table[i - coin]);
            }
        }
    }

    table[amount] === Infinity ? -1 : table[amount];
};

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
