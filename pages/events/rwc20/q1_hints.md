# Q1 Hints
> Try to use hints only when you really need help! The hints are arranged in order.

<details>
  <summary>Hint 1</summary>

  There is an obvious brute force algorithm to do this question (iterate through each block, then iterate through the number of adjacent blocks to add the light level), but is this efficient? You will need to spend O(n * m) time for this algorithm, where n is the number of blocks, and m is the maximum brightness level of a light source. You are possibly iterating through each block so many times!

  Perhaps you might find [prefix sum arrays](https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/) to be of use!

</details>

<details>
  <summary>Hint 2</summary>

  Break down the problem into smaller sub-problems! Try to solve a simpler version of the problem first!

  - How do we get the brightness level of each block, without taking into account the light decay yet? (i.e. the light sources are infinitely powerful)
  - Then, how do we take into account the light decay of each light source?

</details>

<details>
  <summary>Hint 3</summary>

  You will only need linear time corresponding to the number of blocks to solve this problem! Perhaps you could combine prefix sum arrays with dividing the problem into smaller problems? Multiple prefix sum arrays?

</details>

<details>
  <summary>Hint 4</summary>

  What effect does performing prefix sum of on an array TWICE do? Might it be useful in this question? Especially for the falloff?

</details>