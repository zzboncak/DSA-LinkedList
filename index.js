class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(item, itemToFollow) {
        //if the item is to be inserted before the first item
        if(this.head.value === itemToFollow || this.head === null) {
            this.insertFirst(item);
        }
        //if itemToFollow doesn't exist in the list, return out of the function
        let currNode = this.head;

        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== itemToFollow)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log("Could not find desired position");
        }
        previousNode.next = new _Node(item, currNode);
    }

    insertAfter(item, key) {
        let currNode = this.head;

        let nextNode = this.head.next;

        while((currNode !== null) && (currNode.value !== key)) {
            currNode = currNode.next;
            nextNode = nextNode.next;
        }
        if(currNode === null) {
            console.log("Could not find desired position");
        }
        currNode.next = new _Node(item, nextNode);
    }

    insertAt(item, position) {
        let currNode = this.head;

        let nextNode = this.head.next;

        for(let i = 1; i < position; i ++) {
            currNode = currNode.next;
            nextNode = nextNode.next;
        }
        currNode.next = new _Node(item, nextNode);
    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;

        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
        }
        previousNode.next = currNode.next;
    }

    find(item) {
        let currNode = this.head;

        if(!this.head) {
            return null;
        }

        while (currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }

        return currNode;
    }

    printList() {
        let current = this.head;

        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

}

function display(list) {
    let current = list.head;

    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

function size(list) {
    let current = list.head;
    let count = 0;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}

function isEmpty(list) {
    if (list.head === null) {
        return true;
    } else {
        return false;
    }
}

function findPrevious(list, item) {
    let currNode = list.head;

    let previousNode = list.head;

    while((currNode !== null) && (currNode.value !== item)) {
        previousNode = currNode;
        currNode = currNode.next; 
    }
    if (currNode === null) {
        console.log("Could not find item");
    }
    return previousNode;
}

function findLast(list) {
    let currNode = list.head;

    while(currNode.next !== null) {
        currNode = currNode.next;
    } 
    return currNode;
}

function reverseList(list) {
    //iterate through the linked list
    //set the current element's next value to the previous node
    let currNode = list.head;

    let previousNode = list.head;

    while(currNode !== null) {
        // if(previousNode === list.head) {
        //     currNode.next = null;
        //     previousNode = currNode;
        //     currNode = curr
        // } else {
        //     currNode.next = previousNode;
        //     previousNode = currNode;
        //     currNode = currNode.next;
        // }
    }
}

function main() {
    let SLL = new LinkedList();

    //create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
    SLL.insertFirst("Apollo");
    SLL.insertLast("Boomer");
    SLL.insertLast("Helo");
    SLL.insertLast("Husker");
    SLL.insertLast("Starbuck");

    //Add Tauhida to the list.
    SLL.insertLast("Tauhida");

    //Remove Husker from the list.
    SLL.remove("Husker");

    //Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
    //Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
    //Implement a function called insertAt() that inserts an item at a specific position in the linked list.

    //Add Athena before Boomer using your insertBefore() function.
    SLL.insertBefore("Athena", "Boomer");

    //Add Hotdog after Helo using the insertAfter() method.
    SLL.insertAfter("Hotdog", "Helo");

    //Using the insertAt() method insert Kat in the 3rd position of the list.
    SLL.insertAt("Kat", 3);

    //Remove Tauhida from the list.
    SLL.remove("Tauhida");

    display(SLL);
    console.log(size(SLL));
    console.log(isEmpty(SLL));
    console.log(findPrevious(SLL, "Starbuck"));
    console.log(findLast(SLL));
}

main();

/*Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. 
What is the time complexity of this algorithm? */
// function WhatDoesThisProgramDo(lst) {
//     let current = lst.head;
//     while (current !== null) {
//         let newNode = current;
//         while (newNode.next !== null) {
//             if (newNode.next.value === current.value) {
//                 newNode.next = newNode.next.next;
//             }
//             else {
//                 newNode = newNode.next;
//             }
//         }
//         current = current.next;
//     }
// }
/**
 * This function checks a linked list for duplicates and its runtime is O(n^2)
 */

