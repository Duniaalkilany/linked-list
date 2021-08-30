//linkedList class 
//Linked List class has two properties: i.e. head and size, 
//where the head stores the first node of a List, and size indicates the number of nodes in a list. 
// const Node =require('./node')

const Node = require("./node");

class Node {
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}

//create nodes
// let node1=new Node(2)
// let node2=new Node(5)
// node1.next=node2
// //crete linkedlist with node 1
// let list=new LinkedList(node1)

// //access the nodes in the linkedlist
// console.log(list.head.value); 
// console.log(list.head.next.value); 
class LinkedList{
    constructor(head=null)
    {
        this.head=head;
        this.size=0
    }



// //insert value at the first (head)

insert(value){
const node=new Node(value)
//head not empty
if (this.head) {
      
    node.next = this.head;
  }
  this.head = node;
}


append(value) {
    // creates a new node
   const node = new Node(value);
   //(!this.head===> this.head ==null ====> list is empty)
   //if list is Empty add the element(new node that i created) and make it head
   if (!this.head) {
     this.head = node;
   } else {
     //else if the list is not empty  iterate to the end of the list
     let currentNode = this.head;
     while (currentNode.next) {
       currentNode = currentNode.next;
     }
     //add node 
     currentNode.next = node;
   }  
   this.size++;             
 }


 insertBefore(value, newValue) {
    let current = this.head;
    const node = new Node(newValue);
    if (current.value === value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (current.next) {
        if (current.next.value === value) {
          node.next = current.next;
          current.next = node;
          break;
        } else {
          current = current.next;
        }
      }
    }
  }


  insertAfter(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    while (current) {
      if(current.value==value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
    }
  }


  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(`the ${value} is founded in list`);
        return true;
      }
      current = current.next;
    }
    console.log(`the ${value} is not found in list`);
    return false;
  }

  toString() {
    let string = "";
    let current = this.head;
    while (current) {
      string += `{ ${current.value} } -> `;
      current = current.next;
    }
    string += `NULL`;
    return string;
  }
}

