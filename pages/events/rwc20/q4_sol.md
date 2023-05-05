# Q4: Solution and Afterthoughts

![](/imgs/recess_week_challenge/enderdragon.jpg)

Question 4 seems difficult at first, with so many variables to take into account. However, if you break down the problem and think through the problem logically, this problem is actually very simple to solve. There are in fact many ways to solve this problem, I will talk about the more straightforward approach.

## Naive Approach

One naive approach is to start from zero food items, then add 1 food item at a time (we try all types of food every single iteration), and see if the number of resources required exceeds the amount of resources we have. If the number of resources are exceeded, we see if the current total number of hunger points that we have is larger than the max, and set the max hunger correspondingly.

<details>
<summary>Python3 Solution for Naive Approach</summary>

```python
# x: num types of resources
# y: num types of food
# ress: resources count
# hungers: amount of hunger for each food type
# crafting: crafting resources for each food type
x, y = [int(i) for i in input().split()]
crafting = [None] * y

ress = [int(i) for i in input().split()]
hungers = [int(i) for i in input().split()]
crafting = [[int(i) for i in input().split()] for j in range(y)]

# Key: Food combinations list, Value: Max hunger
# Zero food restores zero hunger
initialFoods = [0] * y
initialRes = [0] * x

largest = 0 # To store the largeest hunger so far

def run(currentFoods, currentRes, currentHunger):
  global largest
  for foodType in range(y):
    # For each food type
    newFoods = currentFoods.copy()
    newFoods[foodType] += 1
    newRes = [currentRes[resId] + crafting[foodType][resId] for resId in range(x)]
    if any([newRes[resId] > ress[resId] for resId in range(x)]):
      # If adding this food type exceeds the number of resources we are given, ignore
      if currentHunger > largest:
        largest = currentHunger
      continue
    # Compute and save the hunger restored, using hunger from previous computation
    newHunger = currentHunger + hungers[foodType]
    # Continue trying to add food to get more hunger restored
    run(newFoods, newRes, newHunger)

run(initialFoods, initialRes, 0)
print(largest)
```

</details>

## Problems with the Naive Approach

This works ok for less complicated cases where the max number of resources, as well as the number of types of resources and types of food is not too big. But we realise that that the above algorithm isn't very smart. The best way to demonstrate this is through an example.

Suppose we have 2 types of food, Food A and Food B, and a very large number of resources. This algorithm would first start off with adding 1 Food A. After some time, we would get to the point where we would try adding 1 Food B to the 1 Food A we already have, giving us both 1 of Food A and Food B.

After we are done with this, the algorithm would move on, starting off with adding 1 Food B instead. Then, it will try to add 1 Food A to our 1 Food B, giving us both 1 of Food A and Food B, yet again.

Basically, we are possibly computing the amount of resources aand hunger restored for 1 of both Food and Food B multiple times. Basically, we are trying to find the solution for the same subproblem multiple times. This gives us the [Overlapping Subproblems](https://www.geeksforgeeks.org/overlapping-subproblems-property-in-dynamic-programming-dp-1/) property of this question.

## The Optimised Approach

The overlapping subproblems property gives us the idea that we can use [tabulation](https://www.geeksforgeeks.org/tabulation-vs-memoization/) to help us avoid recalculating problems unnecessarily. Basically, we should store the result of every subproblem after we compute it, in some sort of data structure.

At first, it seems like we could use a array, or nested arrays in particular to store the result of each subproblem. However, we soon realise the dimensions of this nested array can become very large, since it depends on the number of types of food there are.

Instead, it may be easier to use a dictionary, using the tuple containing the number of each food type as a key.

We modify the algorithm accordingly to include the table. Whenever we need to solve one of the subproblems for each combination of food, we check our dictionary to see if the subproblem has already been solved previously, and simply use that result if the subproblem has indeed been solved.

<details>
<summary>Python3 Solution for Tabulation Approach</summary>

```python
# x: num types of resources
# y: num types of food
# ress: resources count
# hungers: amount of hunger for each food type
# crafting: crafting resources for each food type
x, y = [int(i) for i in input().split()]
crafting = [None] * y

ress = [int(i) for i in input().split()]
hungers = [int(i) for i in input().split()]
crafting = [[int(i) for i in input().split()] for j in range(y)]

# Key: Food combinations list, Value: Max hunger
# Dp: Stores hunger restored for each food combination
# Zero food restores zero hunger
dp = {}
initialFoods = [0] * y
initialRes = [0] * x
dp[tuple(initialFoods)] = 0

def run(currentFoods, currentRes, currentHunger):
  for foodType in range(y):
    # For each food type
    newFoods = currentFoods.copy()
    newFoods[foodType] += 1
    if (tuple(newFoods) in dp.keys()):
      # If the food combination has already been evaluated before, just return
      continue
    newRes = [currentRes[resId] + crafting[foodType][resId] for resId in range(x)]
    if any([newRes[resId] > ress[resId] for resId in range(x)]):
      # If adding this food type exceeds the number of resources we are given, ignore
      continue
    # Compute and save the hunger restored, using hunger from previous computation
    newHunger = currentHunger + hungers[foodType]
    dp[tuple(newFoods)] = newHunger
    # Continue trying to add food to get more hunger restored
    run(newFoods, newRes, newHunger)

run(initialFoods, initialRes, 0)
# Print the max hunger value in our dictionary
print(max(dp.values()))
```

</details>
