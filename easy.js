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
