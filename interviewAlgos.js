//Almejo,Felix 7/9/2020

//setting global test array
let testArr = [1,2,3,4,5,6];
//=================================
//Page 20 This Length, That Value
const thisLengthThatValue = (num1,num2)=>{
    let arr=[];
    for(let i = 0; i<num1; i++){
        arr.push(num2);
    }
    if(num1 === num2){
        console.log("Jinx!")
    }
    return arr;
}
//test 
// console.log(thisLengthThatValue(5,3));

// =======================================================================

//Page 22 Count Positives
const countPositives =arr=>{
    //This is incase the given array is empty
    if(arr.length === 0){return}

    //count keeps track of positive integers
	let count =0;
	for( let i = 0; i<arr.length; i++){
        //used ternary operator, the 'continue' would not work with the ternary unless I added 'this' infront.
        arr[i]>0? count++ : this.continue;
	} 
	arr[arr.length - 1] = count;
	return arr;
} 
//test
// console.log(countPositives([-1,1,1,1,-1,-1,1,1]))

// =======================================================================

//Page 38 Push Front
const pushFront = (arr,val) => {
    //This is incase the given array is empty
    if(arr.length === 0){return}

    //iterating backwards, used arr.length -1 in order to not leave and undefined element at the last index
    for(let i = arr.length-1; i>=0; i-=1){
        //first iteration will create new index at the end of the array which the final element in the array will fill
        arr[i+1] = arr[i];
    }
    //once all values have been shifted over, this replaces the first element with the 'val' argument.
    arr[0] = val;
    return arr;
}
//test
// console.log(pushFront(testArr,7));

// =======================================================================

//Page 38 Pop Front
//per instructions only array method allowed to be used is .pop()
const popFront = arr =>{
    //This is incase the given array is empty
    if(arr.length === 0){ return}

    let temp;
    //reversing array in order to use pop on last element
    for(let i = 0; i<arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    //once array is reversed, the last element is now the given array's first index value. 
    let lastElement = arr.pop();

    return lastElement;
}
//test
// console.log(popFront(testArr))

// =======================================================================

//Page 40 Array Reverse
// reversed array in place in last algorithm as well
const reverseArr = arr=>{
    //incase given array is empty
    if(arr.length === 0){return};

    // temp variable to keep track of current index value
    let temp;
    //loop will only iterate half way throught the array, works for even or odd amount of elements
    for(let i = 0; i<arr.length/2; i++){
        //the three lines below swap first index with the last, then second with second to last etc...
        temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
//test
// console.log(reverseArr(testArr));

// =======================================================================

//Page 50 Acronyms
// this secton of the book allows for certain string methods such as split(), Join()
const acronymGenerator = str =>{
    //creates array out fo the string where the spaces occur
    let strArr =  str.split(" ");
    //instead of pushing to new array, just replacing the array values with the first letter of each elememt.
    for(let i =0; i<strArr.length; i++){
        strArr[i] = strArr[i][0];
    }
    //Joining the array into a string and converting all letters to uppercase.
    return strArr.join("").toUpperCase();
}
//test
// console.log(acronymGenerator("never going to give you up never going to let you down"))

// =======================================================================

//Page 51 Strings Reversed
const reverseString=str=>{
    //converting string to array
    let strArr = str.split("");
    let temp;
    //reversing array
    for(let i = 0; i<strArr.length/2; i++){
        temp = strArr[i];
        strArr[i] = strArr[strArr.length-1-i];
        strArr[strArr.length-1-i] = temp;
    }
    //joining the array in its new order into a string
    return strArr.join("");
}
//test
// console.log(reverseString("never going to give you up never going to let you down"));

// =======================================================================


//Page 60 All Algos on this page

//createing a class to instantiate new node objects,  this takes in the data and a pointer
class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

//creating a Linked List class in order to create an instance of a linked list
class LinkedList{
    //constructor starts with pointing the head of the list to nothing, and instantiating the size of the list with 0 for future use;
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // Add to Front
    //Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to the first ListNode and a
    //value, create a new node, assign it to the list head, and return a pointer to the new head node.
    addToFront = (data)=>{
        //creating an object of the Node class
        let node = new Node(data,this.head);
        this.head  = node;
        this.size++;
        //returning pointer to the new head node
        return this.head;
    }
    //  Contains
    // Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie. Given a
    // ListNode pointer and a val, return whether val is found in any node in the list.
    contains=(data)=>{
        let current = this.head;
        while(current){
            if(data === current.data){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    // Remove Front
    // Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the first node in a list,
    // remove the head node and return the new list head node. If list is empty, return null.
    removefromFront=()=>{
        if(this.size === 0){
            return null;
        }
        this.head = this.head.next;
        this.size -=1;
        return this.head;

    }
    // Front
    // Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one seat remains!
    // Who was earlier in line: Tad or Sam? Return the value (not the node) at the head of the list. If list is
    // empty, return null.
    frontData=()=>{
        if(this.size === 0){
            return null;
        }
        console.log("####")
        return this.head.data;
    }
    // Back
    //  Create a function that accepts a ListNode
    // pointer and returns the last value in the list.
    backData = ()=>{
        let current  = this.head;
        while(current.next !== null){
            current = current.next;
        }
        return current.data;
    }
    // SList: Remove Back
    // Create a standalone function that removes the
    // last ListNode in the list and returns the new
    // list.
    removeLastNode =()=>{
        let current,previous;
        current  = this.head;
        while(current.next !== null){
            previous = current;
            current = current.next;
        }
        previous.next = null;
        this.size -=1;
        return;
    }
    // Add Back
    // Create a function that creates a ListNode with
    // given value and inserts it at end of a linked list.
    addToBack = (data)=>{
        let current  = this.head;
        while(current.next !== null){
            current = current.next;
        }
        let node = new Node(data)
        current.next = node;
        this.size ++;

    }

    // Added method to help debug
    printList=()=>{
        let current  = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const newLL = new LinkedList();
newLL.addToFront("John");
newLL.addToFront("Ted");
newLL.addToFront("Jen");
newLL.addToFront("Rod");
newLL.printList();
newLL.removefromFront();
newLL.printList();
console.log(newLL.contains("John"));
console.log(newLL.frontData());
console.log(newLL.backData());
newLL.removeLastNode();
newLL.addToBack("Felix");
newLL.printList();




