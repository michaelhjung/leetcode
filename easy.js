// TWO SUM
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
