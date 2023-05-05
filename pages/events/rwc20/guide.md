# Recess Week Challenge Hackerrank Guide

Typically, the first line of the question specifies the parameters for the input, such as the number of lines, values of variables. It is usually followed by a specified number of lines containing data separated by spaces.

Input Example (2 represents the number of lines to be followed by $(x)$, 1 8 3 is one line of data (to be read into first line of list), 4 5 6 is the second line of data (to be read into second line of list))
```bash
2
1 8 3
4 5 6
```

Output Example
```bash
1 2 3
```

## Python3 Guide

To read the first line of input,

```python
x = int(input()) # The int() is used to convert input from a string to integer
```

To read the subsequent 2 lines of input
```python
all_lists = []
for j in range(x):
    my_list = []
    my_list = [int(i) for i in input().split()] # A list of integers
    all_lists.append(my_list)
```

For printing output
```python
print(a, b, c)
```

## C++ Guide

You will require the following libraries

```c++
#include <iostream> // To read from input and to print output
#include <array> // To read the tuple
#include <vector> // To read the lines of input
```

To read the first line of input

```c++
int x;
std::cin >> x;
```

To read the subsequent 2 lines of input
```c++
std::vector<int> v(x); // Initialise vector with size x
for (int i = 0; i < x; ++i)
{
    std::cin >> a1 >> a2 >> a3;
    v.at(i) = std::array<int, 3>{ a1, a2, a3 }; // Assign element at i index of vector to array of inputs
}
```

To print to output

```c++
std::cout << a << b << c;
```