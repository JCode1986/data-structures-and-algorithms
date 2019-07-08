# Singly Linked List
Implement a Singly Linked List Data Structure

## Challenge
-Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
-Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
-Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
-Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
-Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List.

## Approach & Efficiency
-created a class node with a `.value` and `.next`
-created a class linkedList with a `.head` and `.tail`
-for the insert method, only variables were utilized to achieve goal
-for the includes method, a while loop, and an if condition statement were utilized to return a boolean
-for the toString method, is still complete at the moment

## API
<!-- Description of each method publicly available to your Linked List -->
-insert method takes any value as an argument and adds a new node with that value to the head of the list
-includes method takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value 
-toString method takes in no arguments and returns a string representing all the values in the Linked List.