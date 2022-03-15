/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const len = s.length
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for(let i = 0; i < len; i++) {
    // if(['(', '{', '['].includes(s[i])) {
    //   stack.push(obj[s[i]])
    // } else if ([')', '}', ']'].includes(s[i])) {
    //   if(stack.pop() !== s[i]) {
    //     return false
    //   }
    // }
    if(s[i] in obj) {
      stack.push(obj[s[i]])
    } else {
      if(stack.pop() !== s[i]) return false
    }
  }
  return stack.length === 0
};
// @lc code=end

