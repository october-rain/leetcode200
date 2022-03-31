const arr = require("./arr");

// arr.sort((a, b) => a - b)
console.log("arr", arr);

function bubbleSort(arr) {
  let len = arr.length;
  // 和右边的人比较，不断和右边交换，就可以把最大或者最小的冒泡到最右边
  // 如下代码，就可以实现第一次冒泡

  // for(let i = 0; i < len - 1; i++) {
  //   if(arr[i] > arr[i + 1]) {
  //     [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
  //   }
  // }

  // 最终实现
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}

// console.log('bubbleSort(arr)', bubbleSort(arr))

//时间空间复杂度均为 O(n * lgn)
function quickSort1(arr) {
  let len = arr.length;

  if (len < 2) {
    return arr;
  }

  // 给数组找一个标志位
  // 比如我，所有人都和我比，比我高的站我右边，比我低的站我左边
  let flag = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < len; i++) {
    if (arr[i] > flag) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort1(left).concat(flag, quickSort1(right));
}

// console.log('普通快排', quickSort1(arr))

//原地快排
function quickSort2(arr, start, end) {
  let len = arr.length;

  // [2,4,5,6,3,1,7]
  // 找两个指针 i j
  // i->   <-j
  // i 找到一个比 2 大的
  // j 找到一个比 2 小的
  // 最后 i、j 相遇，整个数组遍历完毕
  // 将 arr[i] 和 2 交换
  if (start < end) {
    let index = quick2(arr, start, end);
    quickSort2(arr, start, index - 1);
    quickSort2(arr, index, end);
  }
  return arr;
}

function quick2(arr, start, end) {
  // 双指针
  let init = start;
  let flag = arr[init]; //? 标志位, 必须是0, 为什么?
  start++; // 指针不和标志位重复

  // 左右指针没碰见的时候
  while (start <= end) {
    // 右边一直比标志位大，指针左移动就行了
    while (arr[end] > flag) {
      end--;
    }
    // 左边一直比标志位小，指针右移
    while (arr[start] < flag) {
      start++;
    }
    // 两个循环都结束，说明左边找到一个比flag小的，右边找到一个比flag大的
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];
  return start;
}

console.log("原地快排", quickSort2(arr, 0, arr.length - 1));
