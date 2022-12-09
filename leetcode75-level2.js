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

// 1706. Where Will the Ball Fail


// ========== DAY 2: String ========== //
// 14. Longest Common Prefix
// 43. Multiply Strings


// ========== DAY 3: Linked List ========== //
// 19. Remove Nth Node from End of List
// 234. Palindrome Linked List


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
