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
![Quick Sort]()
Include your “Visual” here

### Algorithm

* Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
* Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list

////////Describe in detail how the algorithm works. Include small code snippets to possibly support the points

### Pseudocode

`ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)`
    
### Readings and References

### Watch
- [Video 1]()



### Read

- [Article 1]()
- [Article 2]()

### Bookmark

- [Website]()