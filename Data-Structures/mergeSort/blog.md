# Blog Notes: Merge Sort



--recursively

### Learning Objectives
What
Will
The
Students
Learn
Today

### Information Flow
Main Point
Supporting Points
Another main point
More details
Go here
Diagram
![Merge Sort](./image/mergeSort.png)
Include your “Visual” here

### Algorithm

* Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
* Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list

////////Describe in detail how the algorithm works. Include small code snippets to possibly support the points

### Pseudocode
`ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left`
    
### Readings and References

### Watch
- [Video 1](https://www.youtube.com/watch?v=XaqR3G_NVoo)
- [Video 2](https://www.youtube.com/watch?v=4VqmGXwpLqc)
- [VIdeo 3](https://www.youtube.com/watch?v=es2T6KY45cA)


### Read

- [Article 1](https://www.geeksforgeeks.org/merge-sort/)
- [Article 2](https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm)
- [Article 3](https://www.wikiwand.com/en/Merge_sort)
- [Article 4](https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2)

### Bookmark

- [Website]()