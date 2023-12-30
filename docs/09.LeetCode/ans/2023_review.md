---
title: 二分法解决滑动窗口中位数
date: 2023-12-30 18:59:23
permalink: /LeetCode/ans/sliding-window-median/
categories: 
  - LeetCode
author: 
  name: wuxin0011
  link: https://github.com/wuxin0011
tags: 
  - 二分
  - 滑动窗口
---



### 题目链接

[滑动窗口中位数](https://leetcode.cn/problems/sliding-window-median/description/)



### 思路

如果不卡常数时间，暴力就能过,那就是简单题了

```python
class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        n = len(nums)
        ans = [ ]
        def d(i):
            ls = nums[i:i+k]
            ls.sort()
            mid = k // 2
            f = 0
            if k % 2 == 0:
                f = (ls[mid-1] + ls[mid])/2
            else:
                f = ls[mid]
            return f

        for i in range(0,n-k+1):
            f = d(i)
            ans.append(f)
        return ans
```

![](/LeetCode/ans/480/1.png)

之所以特别耗时是因为不断排序 总时间复杂度为 `O((n-k)(k)log(k))` 平均一下就是`O(n*klog(k))`

```python
 ls = nums[i:i+k]
 ls.sort()
```

`ls.sort()` 排序时间复杂度为 `O(klogk)` ，可以看图演示

![](/LeetCode/ans/480/2.png)



```python
class Solution:
    def medianSlidingWindow(self, nums: List[int], k: int) -> List[float]:
        n = len(nums)
        ans = []
        
        # 二分查找删除
        def remove(i,ls):
            # 最大
            pre = nums[i-1]
            if ls[-1] == pre:
                del ls[-1]
                return
            # 最小
            if ls[0] == pre:
                del ls[0]
                return

            l = 0
            r = k-1
            while l<=r:
                mid = l + (( r - l )>>1)
                if ls[mid] == pre:
                    # print("find",pre)
                    del ls[mid]
                    break
                elif ls[mid] > pre:
                    r = mid - 1
                else:
                    l = mid + 1

        # 二分查找插入
        def insert(i,ls):
            val = nums[i+k-1]
            l = 0
            r = k-1
            # 最大
            if  len(ls) == 0 or ls[-1] <= val:
                ls.append(val)
                return
            # 最小
            if ls[0] >= val:
                ls.insert(0, val)
                return
            # 1 2 8 3
            while l<=r:
                mid = l + (( r - l )>>1)
                if ls[mid] == val:
                    ls.insert(mid, val)
                    return
                elif ls[mid] > val:
                    r = mid-1
                else:
                    l = mid + 1
            ls.insert(l,val)
            
        def window(i,ls):
            if i >0:
                remove(i,ls)
                insert(i,ls)
            mid = k // 2
            f = 0
            if (k & 1) == 0:
                f = (ls[mid-1] + ls[mid])/2
            else:
                f = ls[mid]
            return f


        ls = nums[0:k]
        ls.sort() # 第一个保持有序
        f = window(0,ls)
        ans.append(f)
        # print('len = ',n,'max = ',n-k+1)
        for i in range(1,n-k+1):
            # print('cur = ',i+k-1,'pre = ',i-1)
            pre = nums[i-1]
            cur = nums[i+k-1]
            # print('pre ',pre,'cur ',cur,'before = ',f,'ls = ',ls,i,'max = ',n-k,',len =', n,',k = ',k,',index = ',i)
            # 当需要被移除的数不等于移入的数时才会改变
            if cur != pre:
                # print('UPDATE')
                # print(f,ls)
                f = window(i,ls)
                # print(f,ls)
            ans.append(f) # 保留上一次计算结果 如果相等直接跳过
        return ans
```



解决一道hard题真不容易啊😭，目前只能想到这种方法了，更好的方法和优化方案等待中……
