// ================================================= //
// ==================== LEVEL 2 ==================== //
// ================================================= //

// ========== DAY 1: Implementation/Simulation ========== //
// 202. Happy Number
const isHappy = (n) => {
    let nStr = n.toString();
    let nSum = 0;
    let obj = {};

    while (true) {
        nStr.split('').forEach(char => nSum += +char * +char);
        if (obj[nSum]) return false;
        if (nSum === 1) return true;
        else {
            obj[nSum] = nSum;
            nStr = nSum.toString();
            nSum = 0;
        }
    }
};

// 54. Spiral Matrix
const spiralOrder = (matrix) => {
    const result = [];
    let startRow = 0;
    let endRow = matrix.length - 1;
    let startCol = 0;
    let endCol = matrix[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) result.push(matrix[startRow][i]);
        if (startRow === endRow) break;
        for (let i = startRow + 1; i <= endRow; i++) result.push(matrix[i][endCol]);
        if (startCol === endCol) break;
        for (let i = endCol - 1; i >= startCol; i--) result.push(matrix[endRow][i]);
        for (let i = endRow - 1; i > startRow; i--) result.push(matrix[i][startCol]);

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }

    return result;
};

// 1706. Where Will the Ball Fall
const findBall = (grid) => {
    let m = grid.length,
        n = grid[0].length,
        ans = []
    for (let start = 0; start < n; start++) {     // Iterate through the different starting conditions
        let j = start
        for (let i = 0; i < m; i++) {             // Then iterate downward from grid[i][j]
            let dir = grid[i][j]                  // Compare the direction of the current cell to the direction
            if (dir === grid[i][j + dir]) j += dir  //   of the cell on the slant side and move that way if matched
            else i = m, j = -1                    // Otherwise jump to the loop's end and set j to the fail value
        }
        ans[start] = j                            // Update the answer
    }
    return ans                                    // Return the completed answer
};

// ========== DAY 2: String ========== //
// 14. Longest Common Prefix
const longestCommonPrefix = strs => {
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substring(0, i);
    }
    return strs[0];
};
// 43. Multiply Strings
// UGLY BUT WORKS SOLUTION:
const multiply = (num1, num2) => {
    if (num1 === "0" || num2 === "0") return "0";
    const helperMult = (n1, n2) => {
        let sum = 0;
        for (let i = 0; i < Number(n1); i++) {
            sum += Number(n2);
        }
        return String(sum);
    }

    let sums = [];
    for (let i = num2.length - 1; i >= 0; i--) {
        let res = "";
        let carry = 0;
        for (let j = num1.length - 1; j >= 0; j--) {
            let prod = helperMult(num2[i], num1[j]);
            prod = String(carry + Number(prod));

            if (j === 0) {
                res = prod + res;
                break;
            }

            if (prod.length === 1) {
                res = prod + res;
                carry = 0;
            } else {
                res = prod[1] + res;
                carry = Number(prod[0]);
            }
        }
        sums.push(res);
    }
    let zeros = "0";
    for (let i = 1; i < sums.length; i++) {
        sums[i] += zeros;
        zeros += "0";
    }

    const longest = sums[sums.length - 1];
    const newSums = sums.map(s => s.padStart(longest.length, '0'));

    let finalanswer = "";
    let sumCarry = 0;
    for (let k = longest.length - 1; k >= 0; k--) {
        let currSum = 0;
        newSums.forEach(s => currSum += Number(s[k]));

        if (k === 0) {
            finalanswer = String(sumCarry + currSum) + finalanswer;
            break;
        }

        if (String(sumCarry + currSum).length > 2) console.log("AHHH")
        if (String(sumCarry + currSum).length !== 1) {
            finalanswer = String(sumCarry + currSum)[String(sumCarry + currSum).length - 1] + finalanswer;
            sumCarry = Number(String(sumCarry + currSum).slice(0, String(sumCarry + currSum).length - 1));
        } else {
            finalanswer = String(sumCarry + currSum) + finalanswer;
            sumCarry = 0;
        }
    }
    return finalanswer;
};
// console.log(multiply("123456789", "987654321"));
// console.log(multiply("401716832807512840963", "167141802233061013023557397451289113296441069"));


// ========== DAY 3: Linked List ========== //
// 19. Remove Nth Node from End of List
const removeNthFromEnd = (head, n) => {
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }

    if (size === 1) return null;
    let target = size - n;
    if (target === 0) return head.next;
    curr = head;
    while (target >= 0) {
        target--;
        if (target === 0) {
            curr.next = curr?.next?.next ? curr.next.next : null;
            break;
        }
        curr = curr.next;
    }

    return head;
};
// 234. Palindrome Linked List
const isPalindrome = head => {
    let arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }

    return arr.join("") === arr.reverse().join("");
};


// ========== DAY 4: Linked List ========== //
// 328. Odd Even Linked FileList
// 148. Sort List


// ========== DAY 5: Greedy ========== //
// 2131. Longest Palindrome by Concatenating Two Letter Words
// 621. Task Scheduler


// ========== DAY 6: Tree ========== //
// 226. Invert Binary Tree
// 110. Balanced Binary Tree


// ========== DAY 7: Tree ========== //
// 543. Diameter of Binary Tree
// 437. Path Sum III


// ========== DAY 8: Binary Search ========== //
// 74. Search a 2D Matrix
// 33. Search in Rotated Sorted Array


// ========== DAY 9: Binary Search Tree ========== //
// 108. Convert Sorted Array to Binary Search Tree
// 230. Kth Smallest Element in a BST
// 173. Binary Search Tree Iterator


// ========== DAY 10: Graph/BFS/DFS ========== //
// 994. Rotting Oranges
// 417. Pacific Atlantic Water Flow


// ========== DAY 11: Graph/BFS/DFS ========== //
// 210. Course Schedule II
// 815. Bus Routes


// ========== DAY 12: Dynamic Programming ========== //
// 198. House Robber
// 322. Coin Change


// ========== DAY 13: Dynamic Programming ========== //
// 416. Partition Equal Subset Sum
// 152. Maximum Product Subarray


// ========== DAY 14: Sliding Window/Two Pointer ========== //
// 3. Longest Substring Without Repeating Characters
// 16. 3Sum Closest
// 76. Minimum Window Substring


// ========== DAY 15: Tree ========== //
// 100. Same Tree
// 101. Symmetric Tree
// 199. Binary Tree Right Side View


// ========== DAY 16: Design ========== //
// 232. Implement Queue using Stacks
// 155. Min Stack
// 208. Implement Trie (Prefix Tree)


// ========== DAY 17: Interval ========== //
// 57. Insert Interval
// 56. Merge Intervals


// ========== DAY 18: Stack ========== //
// 735. Asteroid Collision
// 227. Basic Calculator II


// ========== DAY 19: Union Find ========== //
// 547. Number of Provinces
// 947. Most Stones Removed with Same Row or Column


// ========== DAY 20: Brute Force/Backtracking ========== //
// 39. Combination Sum
// 46. Permutations
