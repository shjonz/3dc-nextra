# Teaser Solutions (SPOILER!)

> This page shows the solutions for the teaser problem. If you that is not what you intended, turn back now!

> Time complexity: O(n*log(n)) for n = Number of Sheep

This question is quite obviously a sorting problem. We just need to sort the sheep according to which is more red, then more blue, then more green.

For many programming languages, there are well-established sorting functions for lists (they usually have well-established methods for common tasks). The main problem most sorting functions sort only single numbers (or is it?), whereas we have a tuple $(r, g, b)$.

## Converting the tuple to a single number

A simple approach is to simply flatten the tuple $(r, g, b)$ into a single number. We can convert the rgb value to be a 3-digit base-256 number (usually our numbers are in base-10). We can use this base-256 number to also represent the relative importances of $r$, $g$ and $b$. 

- Since $b$ is the least important, we take it to be the 1st digit of the base-256 number
- Since $g$ is the 2nd most important, we take it to be the 2nd digit of the base-256 number
- Since $r$ is the most important, we take it to be the 3rd digit of the base-256 number

To perform the conversion, we can just simply do $rgb = 256*256*r + 256*g + b$.

After converting to the base-256 number, we can just use the standard sort functions to sort our tuple.

However, we need to remember to convert the base-256 number back to $(r, g, b)$ format for printing out the result. Thats not too difficult, we can do

- $r = sheep \div (256 * 256))$
- $g = (sheep \mod (256 * 256)) \div 256)$
- $b = sheep \mod 256$
  
<details>
    <summary>Python3 Solution for Tuple Conversion (List)</summary>
    
```python
s = int(input())
sheeps = []

for i in range(s):
    [r, g, b] = input().split()
    sheeps.append(256*256*int(r) + 256*int(g) + int(b))

sheeps.sort(reverse=True)

for sheep in sheeps:
    r = int(sheep / (256 * 256))
    g = int(sheep % (256 * 256) / 256)
    b = int(sheep % 256)
    print(r, g, b)
```
    
</details>

<details>
    <summary>C++14 Solution for Tuple Conversion (List)</summary>

```c++
#include <algorithm>
#include <iostream>
#include <vector>

int main()
{
    int s;
    std::cin >> s;
    std::vector<int> sheeps(s);
    
    for (auto it{ sheeps.begin() }; it != sheeps.end() ; ++it)
    {
        int r, g, b;
        std::cin >> r >> g >> b;
        int rgb { 256*256*r + 256*g + b };
        *it = rgb;
    }
    std::sort(sheeps.begin(), sheeps.end());

    for (auto it { sheeps.rbegin() }; it != sheeps.rend(); ++it)
    {
        int r { *it / (256 * 256) };
        int g { *it % (256 * 256) / 256 };
        int b { *it % 256 };
        std::cout << r << ' ' << g << ' ' << b << '\n';    
    }
}
```

</details>

<details>
    <summary>Python3 Solution for Tuple Conversion (Dictionary)</summary>

```python
s = int(input())
sheeps = {}

for i in range(s):
    [r, g, b] = input().split()
    rgb = 256*256*int(r) + 256*int(g) + int(b)
    if rgb not in sheeps:
        sheeps[rgb] = 1
    else:
        sheeps[rgb] += 1

for rgb, count in sorted(sheeps.items(), reverse=True):
    r = int(rgb / (256 * 256))
    g = int(rgb % (256 * 256) / 256)
    b = int(rgb % 256)
    for i in range(count):
        print(r, g, b)
```

</details>

<details>
    <summary>C++14 Solution for Tuple Conversion (Hashmap)</summary>

```c++
#include <algorithm>
#include <iostream>
#include <vector>

int main()
{
    int s;
    std::cin >> s;
    std::vector<int> sheeps(s);
    
    for (auto it{ sheeps.begin() }; it != sheeps.end() ; ++it)
    {
        int r, g, b;
        std::cin >> r >> g >> b;
        int rgb { 256*256*r + 256*g + b };
        *it = rgb;
    }
    std::sort(sheeps.begin(), sheeps.end());

    for (auto it { sheeps.rbegin() }; it != sheeps.rend(); ++it)
    {
        int r { *it / (256 * 256) };
        int g { *it % (256 * 256) / 256 };
        int b { *it % 256 };
        std::cout << r << ' ' << g << ' ' << b << '\n';    
    }
}
```

</details>

## Custom Comparators

If we look closely, most sorting functions allow you to use a custom comparator to compare two elements in a list. So we can simply do that.

Also, most sorting functions allow you to reverse the sorting direction. Or you could just iterate from the back of the list so that we get the larger numbers first.

<details>
    <summary>Python3 Solution for Custom Comparator</summary>

```python
from operator import itemgetter

s = int(input())
sheeps = [] 

for i in range(s):
    [r, g, b] = input().split()
    sheeps.append((int(r), int(g), int(b))) # Add our r, g and b values into a list of tuples

# itemgetter allows us to sort by the first element first, then the second element
# then the third element
# reverse=True reverse the direction of the sort of the list
for rgb in sorted(sheeps, key=itemgetter(0, 1, 2), reverse=True):
    r, g, b = rgb
    print(r, g, b)
```

</details>

<details>
    <summary>C++14 Solution for Custom Comparator</summary>

```c++
#include <array>
#include <algorithm>
#include <iostream>
#include <vector>

// Custom function to compare our r, g, b values stored in an array
// Function will have to return true if first element is smaller(less r, g or b) than second element
// Return false otherwise
bool cmp(const std::array<int, 3>& a, const std::array<int, 3>& b)
{
    if (a.at(0) > b.at(0))  // If first element has more red
    {
        return false;
    } else if (a.at(1) > b.at(1) && a.at(0) == b.at(0)) // If equally red, but first is more green
    {
        return false;
    } else if (a.at(2) >= b.at(2) && a.at(0) == b.at(0) && a.at(1) == b.at(1)) // If equally red and green, but first is more or equally blue
    {
        return false;
    } else  // first element now has to be more red/green/blue than other element
    {
        return true;
    }
}

int main()
{
    int s;
    std::cin >> s;
    std::vector<std::array<int, 3>> sheeps(s);  // Create a vector of size s to hold our rgb array
    
    for (auto it{ sheeps.begin() }; it != sheeps.end() ; ++it)
    {
        // Iterate through vector and assign each vector element to an array
        int r, g, b;
        std::cin >> r >> g >> b;    // Read our r, g, b values from input
        *it = std::array<int, 3>{ r, g, b };    // Store r, g, b values into array
    }
    std::sort(sheeps.begin(), sheeps.end(), cmp); // Sort vector using our custom comparator

    for (auto it { sheeps.rbegin() }; it != sheeps.rend(); ++it)
    {
        // Iterate from the back which has sheep with larger r, g, b values
        // Then extract our r, g and b values and print them
        int r { it->at(0) };
        int g { it->at(1) };
        int b { it->at(2) };
        std::cout << r << ' ' << g << ' ' << b << '\n';    
    }
}
```

</details>
