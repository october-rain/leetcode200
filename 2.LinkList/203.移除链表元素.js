/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head, val) {
  // let flag = {
  //   next: head,

  // };
  // let ele = flag;
  // while (ele.next) {
  //   if (ele.next.val === val) {
  //     ele.next = ele.next.next;
  //   } else {
  //     ele = ele.next;
  //   }
  // }
  // return flag.next;

  // 1 -> 2 -> 3 -> 4    val = 2

  // 到达尾元素后，返回head
  if (!head) {
    return head;
  }
  // 递归
  head.next = removeElements(head.next, val);
  // 当前head.val===val时，返回head的next元素，否则返回当前head
  return head.val === val ? head.next : head;
}
// @lc code=end
