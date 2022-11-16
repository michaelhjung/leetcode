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
