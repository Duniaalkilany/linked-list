












//build node class //constructor take (value,next)
class Node {
    constructor(value,next=null){
        this.value=value
        this.next=next
    }
}
//linkedlist  Implementation //head property
class LinkedList{
    constructor(){
        this.head=null;
      
    }
//=====================1===============================================//
//insert method 
//add the node with the value to the head //to the beginig of LL 
//input ===> value (as a parameter )
//return nothing 
//o(1) ==>time 
//head: Node { value: 5, next: Node { value: 4, next: null } }
insert(value){
    const node =new Node (value)
    //empty or not 
    //empty //head is null 
    //store node in head irectly
    //else (not null )
    //next===>head
    //store my node in head 
    if (!this.head){
        this.head=node 
    }else{
        node.next=this.head
        this.head=node 
    }
}

//=====================2===============================================//

//take value as argument 
//return bollen 
//if this value exisit at node's values within ll ===> true
//if this value not exist in ll =====> false 

includes(value){
  
    //start from head ==> current 
    //looping
    //out while its false ==> not exist
    let current=this.head
    while(current){
        if(current.value===value){
            return true
        }
        current=current.next
    }
    return false
}

//=====================3===============================================//
//return string representing of all values in ll 
//input===> argument==>nothing
//output==>string (all valurs of the linkedlist)
//"{5} -> { 4 }  -> NULL"
//first ===>empty string
//current===>head
//loop ==>while(current)
//

toString(){
let string=""
let current=this.head
while(current){
 string += `{${current.value}}->` 
 current=current.next
}
string+=`Null`
return string
}
//=====================4 adding values in different locations in ll ===============================================//
//append method //adding at the end of the ll
//argu===> value 
append(value){
    //create new node 
     //check if ll is empty or nnot 
    //its empty //adde this newnode to head
    //not empty //iterate or loop to the end then i added new node 
    const node = new Node (value)
   
    if (!this.head){
        this.head=node
    }else{
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=node
    }

}

//insert before 
//insert new node with newvalue before the node that has specified value //insert newvalue before this value
//value, newvalue===>arguments
insertBefore(value,newvalue){
    //create newnode with this new value 
    let newNode =new Node (newvalue)
    //
    let current =this.head
    if(current.value===value){
       newNode.next=current
        this.head=newNode
    }else{
        while(current.next){
            if(current.next.value===value){
                newNode.next=current.next
                current.next=newNode
                break;
            }
           
          
                current=current.next
        

        }
    }

}





//insert after 
//args==>value , new 
//add node with newvalue after node with specified value ==> add newvalue after value 

insertAfter(value,newvalue){
    let newNode =new Node (newvalue)
    let current=this.head
while(current){
if(current.value===value){
    newNode.next=current.next
    current.next=newNode
    break ;
}
current=current.next

}

 
}


insertMiddle(value){
    let newNode= new Node (value)
    //conditions 
    //ll is empty 
    if (!this.head){                                                                                                                                                                                                                                                                                       
        this.head=newNode
    }else{
        let current=this.head
      let middle = this.head;
      while(current.next!==null&& current.next.next!==null){
          current=current.next.next
          middle=middle.next
      }

      newNode.next=middle.next
      middle.next=newNode
    }


}

//Return the node’s value that is k places from the tail of the linked list.
//k==>number as parameter
kFromEnd(k){
let current=this.head
let length=1
while(current.next){
    current=current.next
    length += 1;
}
if (k===0){
    return current.value
}
else if (k<0|| k>length){
    return 'Exception'
}else{
    current=this.head
    for(let i=1;i<length-k;i++){
current=current.next
    }
    return current.value
}

   }

   //reverse linked list
   //input ll
   //outpur ll (reversed)
   reverse(list){
       //new linkedlist 
       const newList= new LinkedList()
       //put head for mylist in current
       let current=list.head
       while(current){
           //start inserting in the new ll
           newList.insert(current.value) 
        current=current.next
       }
       return `head -> ${newList.toString()}`;

   }


   // palindrome: a word, phrase, number, or sequence of nodes which reads the same backward as forward.
   //check if my list is palindrome
   //Solution #1: Array of values
   // loop through the values of the supplied Linked List, adding them to an array, and then to determine whether or not that array represents a palindrome.
   palindrome(){
    let valuesFound = [];
    let current=this.head
    while (current) {
        valuesFound.push(current.value);
       current = current.next;
    }

 // Check if the list of values are a palindrome
 let left = 0;
 let right = valuesFound.length - 1;
 while (left <= right) {
     if (valuesFound[left] !== valuesFound[right]) {
         return false;
     }
     left++, right--;
 }

 return true;
};
 
//insert elements at specific index 
insertAt(value,index){
 if(index<0){
     return console.log('please enter a valid index');
 }else{
//create newNode 
const newNode = new Node (value)
//variables
let prev;
let current = this.head

   //add at index=0
   if (index==0){
newNode.next=this.head
this.head=newNode
   }else{
       current=this.head
       let count =0
       while(count<index){
           count++;
        prev=current;
         current=current.next;

       }
       newNode.next=prev.next;
           prev.next=newNode
   }


     }
}


//remove node (value )grom specific index //also return the removed value
removeFrom(index){
    if (index<0){
        return console.log('please enter a valid index');
    }else{
        let current=this.head
        let prev=current
        let count=0

        // deleting first element
        if(index==0){
            this.head=current.next
        }else{
            while(count<index){
                count++
                prev=current
                current=current.next
            }
        // remove the element
             prev.next = current.next;
        }
        return  console.log('removed==========>',current.value); 
    }
}
//search about element in ll and removed it or return -1 if not found 

removeElements(value){
let current = this.head;
  let prev = null;
  // iterate over the list
  while (current != null) {
    // comparing element with current
    // element if found then remove the
    // and return true
    if(current.value===value){
        //remove
        if(prev==null){
            this.head=current.next
        }else{
            prev.next=current.next
        }
        return console.log('removed by searching value',current.value); current.value
    }
    prev=current
    current=current.next
  
}
return console.log(-1)
}
//indexof 
//return the index of given value if its in the ll 
indexOf(value){
    let current=this.head;
    let count = 0
    while(current!=null){
        if(current.value===value){
            return count
        }
        count++
        current=current.next
    }
    // return -1
    // return 'not Found'
    return console.log(-1)
}
sizeList() {
    return this.size
}
isEmpty() {
    return this.size == 0;
}
//ziplist 

//Arguments: 2 linked lists
//Return: Linked List, zipped 
//Zip the two linked lists together 
// return a reference to the head of the zipped list

zipList(list1,list2){
    let result=new LinkedList ()
    let currentNode1 = list1.head;
    let currentNode2 = list2.head;
    //traverse lists concurrently //at same time
    while (currentNode1 || currentNode2) {
        if (currentNode1) {
          result.append(currentNode1.value);
          currentNode1 = currentNode1.next;
        }
        if (currentNode2) {
            result.append(currentNode2.value);
            currentNode2 = currentNode2.next;
          }
        }

        return `head -> ${result.toString()}`;
      }

}




const Ll=new LinkedList()
Ll.insert('h')
Ll.insert('o')
Ll.insert('w')
Ll.insert('o')
Ll.insert('h')
console.log('is it palindrome ????',Ll.palindrome()); 
const llZip= new LinkedList()
const newLinked = new LinkedList();
const newLinked1 = new LinkedList();
newLinked.insert(4)
newLinked.insert(5)
newLinked.append(10)
newLinked.append(11)

//5//4//10//11
newLinked.insertBefore(11,9)
newLinked.insertAfter(5,6)
newLinked.insertMiddle(3)
newLinked.insertAt(200,3)
console.log('mylinkedlist:',newLinked.toString())
newLinked.removeFrom(1)
newLinked.removeElements(20)
newLinked1.insert(7)
newLinked1.insert(6)
newLinked1.insert(3)
console.log('zipList===============>', llZip.zipList(newLinked,newLinked1));
console.log('indexxxxxxxof',newLinked.indexOf(50))

console.log('mylinkedlist:',newLinked1.toString())
console.log('mylinkedlist:',newLinked);
console.log('kFromEnd============>>',newLinked.kFromEnd(2))
console.log('nextttt',newLinked.head.next);
console.log('includes???',newLinked.includes(5))
console.log('includes???',newLinked.includes(4))
console.log('includes???',newLinked.includes(7))
console.log('reverse', newLinked1.reverse(newLinked));

