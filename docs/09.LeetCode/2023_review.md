---
title: LeetCode 2023 年度回顾
date: 2023-12-30 21:21:23
permalink: /LeetCode/2023_review/
categories: 
  - LeetCode
author: 
  name: wuxin0011
  link: https://github.com/wuxin0011
tags: 
  - LeetCode
---


### 小插曲

很久没写博客了，差不多两个月了吧😂，最近又懈怠了呢。

首先从github拉取，结果本地启动 ？ 报错 ！不对啊？之前不是还能跑吗，删除之后从新拉取下来

就不能跑了，**XX** 果然玄学。

看了报错说是两个依赖问题

- vue-server-renderer@2.7.16
- vue@2.7.14

这两个版本挺接近的啊应该不至于报错。于是看了看源码

vue-server-renderer

![vue-error-1.png](/LeetCode/review/2023/vue-error-2.png)

![vue-error-1.png](/LeetCode/review/2023/vue-error-1.png)

我本地依赖的Vue版本

![vue-error-1.png](/LeetCode/review/2023/vue-error-3.png)

问题很明显，人家要 `===` ，于是修改了Vue版本，没报错了。OK！


### 前言


说来惭愧 `LeetCode` 账号注册了一年多了才想起来,惭愧🤣🤣🤣。

不过最近还是想起来了，奈何入门都不容易。


首先感谢`灵神`，精讲了这么多题解 
 - [leetcode](https://leetcode.cn/u/endlesscheng/)
 - [B站](https://space.bilibili.com/206214)




 ### 年度回顾


> 首先贴一下LeetCode给我的年末总结吧！


![1](/LeetCode/review/2023/1.png)
![1](/LeetCode/review/2023/2.png)
![1](/LeetCode/review/2023/3.png)
![1](/LeetCode/review/2023/4.png)
![1](/LeetCode/review/2023/5.png)
![1](/LeetCode/review/2023/6.png)


**总结起来就是简单题刷多了**

其实是简单题为了练习手感，由于答题基本上是在平台上写的，没有什么提示，写起来不免有点不爽。发现大部分题目都不会，或者说简单题都没有好的优化，为了熟悉答题方式写的简单题。现在差不多不刷了。

![1](/LeetCode/review/2023/7.png)

一次AC的开心😁


![1](/LeetCode/review/2023/8.png)


优化的开心🤣


![1](/LeetCode/review/2023/9.png)
![1](/LeetCode/review/2023/10.png)



为了解决一个问题多次报错

![1](/LeetCode/review/2023/LCS.png)

终于解决->优化

![1](/LeetCode/review/2023/LCS1.png)


隔一段时间重新做又忘记了->解决

![1](/LeetCode/review/2023/water.png)



经典前缀和和后缀和问题[接雨水]( https://leetcode.cn/problems/trapping-rain-water/submissions/?envType=study-plan-v2&envId=top-100-liked)
```java
 public int trap(int[] height) {
        if( height == null || height.length <= 2) return 0;
        int ans = 0; 
        int n = height.length;
        int[] l_helps = new int[n];
        int max = height[0];
        for(int i = 1;i<n;i++){
            max = Math.max(max,height[i]); 
            l_helps[i] = max;
        }
        max = height[n-1];
        for(int i = n-1;i>=1;i--){
           max = Math.max(max,height[i]); 
           ans += Math.min(max, l_helps[i]) - height[i];
        }
        return ans;
    }
```





LCS问题之[LCS]( https://leetcode.cn/problems/longest-consecutive-sequence/submissions/?envType=study-plan-v2&envId=top-100-liked)
```java
 public int longestConsecutive(int[] nums) {
		if ( nums == null || nums.length == 0) return 0;
        Arrays.sort(nums);
        int max = 1,t = 1;
        for(int i = 1;i<nums.length;i++){
            if ( nums[i-1] == nums[i]) continue;
            if(  nums[i-1] + 1 == nums[i]){
                 t++;
            }else{
                 max = Math.max(t,max);
                 t = 1;
            }
        }
        return Math.max(t,max);
   }
```


拓扑图的认识[课程表]( https://leetcode.cn/problems/course-schedule/?envType=study-plan-v2&envId=top-100-liked)
```java

public boolean canFinish(int numCourses, int[][] prerequisites) {
      int[] in = new int[numCourses];
      List<List<Integer>> l = new ArrayList<>();
      for(int i = 0;i<numCourses;i++){
          l.add(new ArrayList<>());
      }
      for(int[] edge: prerequisites){
          in[edge[0]]++;
          l.get(edge[1]).add(edge[0]);
      }
      Deque<Integer> q = new ArrayDeque<>();
      for(int i = 0;i<numCourses;i++){
          if(in[i] == 0){
              q.add(i);
          }
      }
      while(!q.isEmpty()){
          int pre = q.poll();
          numCourses--;
          for(int cur : l.get(pre)){
              in[cur]--;
              if( in[cur] == 0){
                  q.add(cur);
              }
          }
      }
       return numCourses == 0;
    }

```


经典图的广度优先搜索[腐烂的橘子]( https://leetcode.cn/problems/rotting-oranges/description/?envType=study-plan-v2&envId=top-100-liked)

```java
public int orangesRotting(int[][] grid) {
       if( grid == null || grid.length == 0 ) return -1;
       int m = grid.length,n = grid[0].length;
       int has = 0;
       Deque<int[]> q = new ArrayDeque<>();
       for(int i = 0;i<m;i++){
           for(int j = 0;j<n;j++){
               if( grid[i][j] == 1 ) has++;
               // 检查是否有腐烂的
               if( grid[i][j] == 2){
                   q.add(new int[]{i,j});
               }
           }
       }
       if( has == 0 ) return 0;
       // System.out.println("has = " + has + ",isEmpty = " + q.isEmpty());
       if( has != 0  && q.isEmpty() ) return -1;
       int ans = 0;
       int[] dirs = new int[]{-1,0,1,0,-1};
       while( !q.isEmpty() ){
           int size = q.size();
           while( size != 0 ){
               size--;
               int[] d = q.poll();
               for(int k = 0;k<=3;k++){
                   int x = d[0] + dirs[k];
                   int y = d[1] + dirs[k+1];
                   if( x>=0 && x<m && y>=0 && y< n ){
                       // System.out.println("x = " + x + ",y = " + y);

                       if( grid[x][y] == 1){
                           grid[x][y] = 2;
                           has--;
                           q.add(new int[]{x,y});
                       }
                   }
               }
           }
           if( !q.isEmpty()) ans++;
       }
       return has > 0 ? -1 : ans;
    }
```


滑动窗口之[最小覆盖子串](https://leetcode.cn/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-100-liked)


```java
  public String minWindow(String s, String t) {
        if( isEmpty(s) || isEmpty(t) || s.length() < t.length() ) {
            return "";
        }
        if( s.equals(t)) return s;
        int n = s.length();
        char[] ss = s.toCharArray();
        char[] ts = t.toCharArray();
        int[] have = new int[128];
        int[] need = new int[128];
        for(char c : ts ){
            need[c]++;
        }
        int r = 0, l = 0, min = n+1,cnt = 0,start = 0;
        while( r < n ){
            //
            char c = ss[r];
            if(need[c] == 0) {
                r++;
                continue;
            }
            if( have[c] < need[c]){
               cnt++; // 检查字符种类是否达到要求
            }
            have[c]++;
            r++;
            
            while(  cnt == ts.length ){
                c = ss[l];
                if( r - l < min ){
                    // System.out.println("star=======" + l);
                    start = l;
                    min = r - l;
                }

                if( need[c] == 0 ) {
                    l++;
                    continue;
                }


                // 检查是否需要删除
                if( have[c] == need[c]){
                    cnt--;
                }
                have[c]--;
                l++;
            }
        }
        // System.out.println("min" + min + ",start = " + start);
        // return "";
        return min == n + 1 ? "" : s.substring(start,start+min);
    }

    public static boolean isEmpty(String a){
        return a == null || a.length() == 0;
    }

```

- 动态规划之[打家劫舍](https://leetcode.cn/problems/house-robber/?envType=study-plan-v2&envId=top-100-liked)
- 单调栈之[每日温度](https://leetcode.cn/problems/daily-temperatures/description/?envType=study-plan-v2&envId=top-100-liked)
- 优先级队列之[数据流的中位数](https://leetcode.cn/problems/find-median-from-data-stream?envType=study-plan-v2&envId=top-100-liked)

还有很多典型题目就不贴了……



### 2024 期望

- 周赛1700
- 刷题到800



