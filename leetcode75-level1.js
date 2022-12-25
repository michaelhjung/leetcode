// ================================================= //
// ==================== LEVEL 1 ==================== //
// ================================================= //

// ========== DAY 1: Prefix Sum ========== //
// 1480. Running Sum of 1d Array
const runningSum = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i];
    }
    return nums;
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)

// 724. Find Pivot Index
// const pivotIndex = (nums) => {
//     let pointer = 0;
//     let leftSum = 0;
//     let rightSum = nums.reduce((acc, curr) => acc + curr, 0) - nums[0];

//     while (pointer < nums.length) {
//         if (pointer > 0) {
//             leftSum += nums[pointer - 1];
//             rightSum -= nums[pointer];
//         }
//         if (leftSum === rightSum) return pointer;

//         pointer++;
//     }

//     return -1;
// }
// ALTERNATIVE SOLUTION:
const pivotIndex = nums => {
    const sums = {};
    for (let i = nums.length - 1; i >= 0; i--) {
        sums[i] = { left: null, right: null };
        if (i === nums.length - 1) sums[i].right = 0;
        else sums[i].right = sums[i + 1].right + nums[i + 1];
    }
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) sums[i].left = 0;
        else sums[i].left = sums[i - 1].left + nums[i - 1];

        if (sums[i].left === sums[i].right) return i;
    }
    return -1;
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)


// ========== DAY 2: String ========== //
// 205. Isomorphic Strings
// const isIsomorphic = (s, t) => {
//     const charMap = {};
//     const added = new Set();
//     let convertedWord = "";

//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];
//         let corrChar = t[i];

//         if (!charMap[char] && !added.has(corrChar)) {
//             charMap[char] = corrChar;
//             added.add(corrChar);
//             convertedWord += corrChar;
//         } else {
//             convertedWord += charMap[char];
//         }
//     }

//     if (convertedWord === t) return true;
//     else return false;
// };
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)
// REFACTORED SOLUTION:
const isIsomorphic = (s, t) => {
    let translated = "";
    const hm = {};
    const assignedChar = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!hm[s[i]]) {
            if (assignedChar.has(t[i])) return false;
            hm[s[i]] = t[i];
            assignedChar.add(t[i]);
        }
        else if (s[i] in hm && hm[s[i]] !== t[i]) return false;
        translated += t[i];
    }
    return translated === t;
};


// 392. Is Subsequence
const isSubsequence = (s, t) => {
    let p = 0;
    for (let i = 0; i < t.length; i++) {
        if (t[i] === s[p]) p++;
    }
    return p === s.length;
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)


// ========== DAY 3: Linked List ========== //
// 21. Merge Two Sorted Lists
// const mergeTwoLists = (list1, list2) => {
//     if (list1 === null && list2 === null) return list1;
//     if (list1 === null && list2 !== null) return list2;
//     if (list2 === null && list1 !== null) return list1;

//     let head;
//     let other;
//     if (list1.val <= list2.val) {
//         head = list1;
//         other = list2;
//     }
//     else {
//         head = list2;
//         other = list1;
//     }
//     let curr = head;
//     let prev = null;

//     while (curr) {
//         if (!curr.next) break;
//         if (curr.next.val > other.val) {
//             const next = curr.next;
//             curr.next = other;
//             other = next;
//         }

//         curr = curr.next;
//     }

//     curr.next = other;

//     return head;
// };
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)
// RECURSIVE SOLUTION:
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
const preorder = (root, path = []) => {
    if (!root) return [];
    path.push(root.val);
    const children = root.children;
    if (children) children.forEach(node => preorder(node, path));
    return path;
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)

// 102. Binary Tree Level Order Traversal
const levelOrder = (root) => {
    if (!root) return [];

    const path = [];
    const queue = [root];

    while (queue.length) {
        let currQueueLength = queue.length;
        const level = [];

        for (let i = 0; i < currQueueLength; i++) {
            let currNode = queue.shift();
            level.push(currNode.val);

            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }

        path.push(level);
    }

    return path;
};
// TIME COMPLEXITY: O(N^2)
// SPACE COMPLEXITY: O(N)


// ========== DAY 7: Binary Search ========== //
// 704. Binary Search
const search = (nums, target) => {
    /* PSEUDOCODE:
        Divide nums in half until target is found or array length is 1 and target is still not found.
    */
    let currNums = nums;
    let begIndex = 0;

    while (currNums.length >= 1) {
        const midI = Math.floor(currNums.length / 2);

        if (currNums[midI] === target) return begIndex + midI;
        else if (currNums[midI] < target) {
            currNums = currNums.slice(midI + 1);
            begIndex += (midI + 1);
        }
        else {
            currNums = currNums.slice(0, midI);
        }
    }

    return -1;
};
// TIME COMPLEXITY: O(LOG N)
// SPACE COMPLEXITY: O(N)

// 278. First Bad Version
const solution = (isBadVersion) => {
    /**
    * @param {integer} n Total versions
    * @return {integer} The first bad version
    */
    return function (n) {
        let left = 1;
        let right = n;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (isBadVersion(mid)) {
                if (isBadVersion(mid - 1)) right = mid - 1;
                else return mid;
            }
            else left = mid + 1;
        }
    };
};
// TIME COMPLEXITY: O(LOG N)
// SPACE COMPLEXITY: O(1)


// ========== DAY 8: Binary Search Tree ========== //
// 98. Validate Binary Search Tree
const isValidBST = (root) => {

    function inOrder(node) {
        if (!node) return [];
        return [...inOrder(node.left), node.val, ...inOrder(node.right)]
    }

    const sortedArr = inOrder(root);

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] <= sortedArr[i]) return false;
    }

    return true;
};
// TIME COMPLEXITY:
// SPACE COMPLEXITY:

// 235. Lowest Common Ancestor of a Binary Search Tree
// const lowestCommonAncestor = (root, p, q) => {
//     const stack1 = [[root]];
//     const stack2 = [[root]];
//     let path1;
//     let path2;

//     while (stack1.length) {
//         const path = stack1.pop();
//         const lastNode = path[path.length - 1];

//         if (lastNode === p) {
//             path1 = path;
//             break;
//         } else {
//             let newPath = [...path];
//             if (p.val < lastNode.val) newPath.push(lastNode.left);
//             else newPath.push(lastNode.right);
//             stack1.push(newPath);
//         }
//     }
//     while (stack2.length) {
//         const path = stack2.pop();
//         const lastNode = path[path.length - 1];

//         if (lastNode === q) {
//             path2 = path;
//             break;
//         } else {
//             let newPath = [...path];
//             if (q.val < lastNode.val) newPath.push(lastNode.left);
//             else newPath.push(lastNode.right);
//             stack2.push(newPath);
//         }
//     }

//     for (let i = path1.length - 1; i >= 0; i--) {
//         for (let j = path2.length - 1; j >= 0; j--) {
//             if (path1[i].val === path2[j].val) {
//                 return path1[i];
//             }
//         }
//     }
// };
// TIME COMPLEXITY: O(N^2)
// SPACE COMPLEXITY: O(N)
// BETTER SOLUTION:
const lowestCommonAncestor = (root, p, q) => {
    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q);
    else if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q);
    else return root;
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)


// ========== DAY 9: Graph/BFS/DFS ========== //
// 733. Flood Fill
const findNeighbors = (matrix, node) => {
    const neighbors = [];
    const [row, col] = node;

    if (row < matrix.length - 1) neighbors.push([row + 1, col]);
    if (row > 0) neighbors.push([row - 1, col]);
    if (col < matrix[0].length - 1) neighbors.push([row, col + 1]);
    if (col > 0) neighbors.push([row, col - 1]);

    return neighbors;
}
const floodFill = (image, sr, sc, color) => {
    const startColor = image[sr][sc];
    const startNode = [sr, sc];
    const queue = [startNode];
    const visited = new Set();
    visited.add(startNode.toString());
    image[startNode[0]][startNode[1]] = color;

    while (queue.length) {
        const node = queue.pop();

        const neighbors = findNeighbors(image, node);
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.toString())) {
                if (image[neighbor[0]][neighbor[1]] === startColor) {
                    visited.add(neighbor.toString());
                    image[neighbor[0]][neighbor[1]] = color;
                    queue.unshift(neighbor);
                }
            }
        });
    }

    return image;
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)

// 200. Number of Islands
const numIslands = (grid) => {
    const visited = new Set();
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const node = [i, j];
            if (visited.has(node.toString()) || grid[node[0]][node[1]] === "0") continue;
            visited.add(node.toString());

            const queue = [node];

            while (queue.length) {
                const currNode = queue.pop();
                const neighbors = findNeighbors(grid, currNode);

                neighbors.forEach(neighbor => {
                    if (!visited.has(neighbor.toString()) && grid[neighbor[0]][neighbor[1]] === "1") {
                        queue.unshift(neighbor);
                    }
                    visited.add(neighbor.toString());
                });
            }

            count++;
        }
    }

    return count;
};
// TIME COMPLEXITY: O(N^3)
// SPACE COMPLEXITY: O(N)


// ========== DAY 10: Dynamic Programming ========== //
// 509. Fibonacci Number
const fib = (n, memo = {}) => {
    let result;

    if (n === 0 || n === 1) return n;
    else if (memo[n]) return memo[n];
    else result = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;

    return result;
};
// TIME COMPLEXITY: O(1)
// SPACE COMPLEXITY: O(N)

// 70. Climbing Stairs
const climbStairs = (n, memo = {}) => {
    let result;

    if (n <= 3) return n;
    else if (memo[n]) return memo[n];
    else result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    memo[n] = result;

    return result;
};
// TIME COMPLEXITY: O(1)
// SPACE COMPLEXITY: O(N)


// ========== DAY 11: Dynamic Programming ========== //
// 746. Min Cost Climbing Stairs
// const minCostClimbingStairs = (cost) => {
//     for (let i = cost.length - 3; i >= 0; i--) {
//         cost[i] += Math.min(cost[i + 1], cost[i + 2]);
//     }
//     return Math.min(cost[0], cost[1]);
// };
// OR
const minCostClimbingStairs = (cost) => {
    for (let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }
    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)

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
// const twoSum = (nums, target) => {
//     const seen = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         let numNeeded = target - nums[i];
//         if (seen.has(numNeeded)) return [i, nums.indexOf(numNeeded)];
//         seen.add(nums[i]);
//     }
// };
const twoSum = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        let numNeeded = target - nums[i];
        if (hashMap.hasOwnProperty(numNeeded)) return [i, hashMap[numNeeded]];
        hashMap[nums[i]] = i;
    }
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)

// 299. Bulls and Cows
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 14: Stack ========== //
// 844. Backspace String Compare
const backspaceCompare = (s, t) => {
    const stackS = [];
    const stackT = [];

    for (let c of s) {
        if (c === '#') stackS.pop();
        else stackS.push(c);
    }

    for (let d of t) {
        if (d === '#') stackT.pop();
        else stackT.push(d);
    }

    if (stackS.join('') === stackT.join('')) return true;
    else return false;
};
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(N)

// 394. Decode String
// TIME COMPLEXITY:
// SPACE COMPLEXITY:


// ========== DAY 15: Heap ========== //
// 1046. Last Stone Weight
const lastStoneWeight = (stones) => {
    while (stones.length > 1) {
        const max1 = Math.max(...stones);
        const i = stones.indexOf(max1);
        stones.splice(i, 1);

        const max2 = Math.max(...stones);
        const j = stones.indexOf(max2);
        stones.splice(j, 1);

        if (max2 < max1) stones.push(max1 - max2);
    }

    return stones.length ? stones[0] : 0;
};
// TIME COMPLEXITY: O(N^2)
// SPACE COMPLEXITY: O(1)

// 692. Top K Frequent Words
// TIME COMPLEXITY:
// SPACE COMPLEXITY:
