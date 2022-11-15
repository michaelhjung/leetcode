// 1. TWO SUM
    // Given an array of integers nums and an integer target,
    //     return indices of the two numbers such that they add up to target.
    // You may assume that each input would have exactly one solution,
    //     and you may not use the same element twice.
    // You can return the answer in any order.

    // SOLUTION 1:
    function twoSum(nums, target) {
        let output;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i+1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    output = [i, j];
                    return output;
                }
            }
        }
    }

    // const nums = [2,7,11,15];
    // const target = 9;
    // console.log(twoSum(nums, target));



// 26. REMOVE DUPLICATES FROM SORTED ARRAY:
//     Given an integer array nums sorted in non-decreasing order,
//       remove the duplicates in-place such that each unique element appears only once.
//       The relative order of the elements should be kept the same.

//     Since it is impossible to change the length of the array in some languages,
//       you must instead have the result be placed in the first part of the array nums.
//       More formally, if there are k elements after removing the duplicates,
//       then the first k elements of nums should hold the final result.
//       It does not matter what you leave beyond the first k elements.

//     Return k after placing the final result in the first k slots of nums.

//     Do not allocate extra space for another array.
//     You must do this by modifying the input array in-place with O(1) extra memory.
