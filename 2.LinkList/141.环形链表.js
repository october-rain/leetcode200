/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    // 空间复杂度 O(n)
    // const set = new Set()
    // while(head.next) {
    //   if(set.has(head)) {
    //     return true
    //   } else {
    //     set.add(head)
    //   }
    //   // 本题目不需要返回 head，所以不需要中间变量 p
    //   head = head.next
    // }
    // return false

    // 快慢指针 空间复杂度 O(1)
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast) {
        return true
      }
    }
    return false
};
// @lc code=end

