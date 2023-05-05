# Teaser Hints
> Try to use hints only when you really need help! The hints are arranged in order.
<details> 
    <summary>Hint 1</summary>
    This looks like a sorting problem. It might help to understand what sorting algorithms are out there. You can compare the speed of the algorithms by looking at their time complexities.
    <ul>
        <li><a href="https://www.geeksforgeeks.org/insertion-sort/">Insertion Sort</a></li>
        <li><a href="https://www.geeksforgeeks.org/merge-sort/">Merge Sort</a></li>
        <li><a href="https://www.geeksforgeeks.org/quick-sort/">Quick Sort</a></li>
        <li><a href="https://www.geeksforgeeks.org/heap-sort/">Heap Sort</a></li>
    </ul>
    But wait! There might be better solutions! Many programming languages actually have their own standard implementations to help you to sort lists!
    <table>
        <tr>
            <th>Programming Language</th>
            <th>Implementation</th>
        </tr>
        <tr>
            <td>Python</td>
            <td><a href="https://docs.python.org/3/howto/sorting.html">list.sort() or sorted()</a></td>
        </tr>
            <td>C++</td>
            <td><a href="https://en.cppreference.com/w/cpp/algorithm/sort">std::sort from algorithm standard library</a></td>
        <tr>
            <td>Java</td>
            <td><a href="https://www.geeksforgeeks.org/collections-sort-java-examples/">Collections.sort()</a></td>
        </tr>
    </table>
    The real problem is these standard implementations usually only sort single numbers, but we have to sort a tuple of r, g and b... is there some way around that?
</details>

<details>
    <summary>Hint 2</summary>
    Consider the followings notes/questions:
    <ul>
        <li>Usually sorting allows us to sort lists of single numbers</li>
        <li>Is it possible to convert the tuple for r, g and b into a form that is more friendly for sorting? </li>
        <li>Or perhaps do the standard implementations allow you to use your own method to compare between two elements?</li>
    </ul>

</details>

<details>
    <summary>Hint 3</summary>
    Consider the following questions:
    <ul>
        <li>Is there a way to combine r, g and b into a single number? (Maybe some arithmetic? Addition?)</li>
        <li>But how do we combine them in such a way that we can get the exact same r, g and b values back after sorting?</li>
        <li>Maybe we can think about how we can combine them to a number that reflects the relative importance of each colour component (i.e. r is more important than g and b)?</li>
    </ul>
</details>