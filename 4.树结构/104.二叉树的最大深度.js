/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // let getDeep = function(node) {
  //   if(!node) return 0;
  //   let left = getDeep(node.left);
  //   let right = getDeep(node.right);
  //   return Math.max(left, right) + 1;
  // }
  // return getDeep(root);
  
  // 最大深度 = Math.max(左子树深度, 右子树深度) + 1
  if(!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end

