/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // 重复的数字之间亦或，为0
  // 1 ^ 2 ^ 2 ^ 1 为 0
  let ret = 0
  nums.forEach(num => {
    ret ^= num;
  })
  return ret
};
// @lc code=end

