/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // if (n & (n - 1)) {
  //   return false;
  // }
  // return true;

  return n > 0 && (n & (n - 1)) === 0;
};
// @lc code=end
