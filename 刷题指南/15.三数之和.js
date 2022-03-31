/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (34.79%)
 * Likes:    4570
 * Dislikes: 0
 * Total Accepted:    886.9K
 * Total Submissions: 2.5M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10^5 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = []
  // 先取一个值 a，然后其他加起来等于 -a
  // 可以用双指针去做
  // 看到双指针就要想到排序
  nums.sort((a, b) => a - b);

  // 拿到排序数组后，循环把每个值都当作 a 算一遍
  for(let i = 0; i < nums.length; i++) {

    // 去重第一个数字
    while(nums[i] === nums[i-1]) {
      i++
    }

    // 设置双指针
    let left = i + 1
    let right = nums.length - 1
    // 双指针要互相靠近，相遇后结束
    while(left < right) {
      if(nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]])

        // // 数组中数字可能重复，所以找到以后还要继续找，这里有问题，继续找应该是在上层的while循环里做的。
        // 去重的逻辑（去重第二第三个数）
        while(nums[left] === nums[left + 1]) {
          left++
        }
        left++ // 还需要加一次 比如 [1, 1, 2] 场景下，退出循环时指向 第二个 1，还是有问题
        while(nums[right] === nums[right - 1]) {
          right--
        }
        right--

      } else if(nums[i] + nums[left] + nums[right] < 0) {
        // 和太小
        left++
      } else if(nums[i] + nums[left] + nums[right] > 0){
        // 和太大
        right--
      }
    }
  }


  return res
};
// @lc code=end

