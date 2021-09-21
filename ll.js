//inserations methods 
/* 
1. insert (add nodes to the begining of the ll)
2.append ==> add to the end of the ll
3.insertBefore ===>insert (newnode==>newvalue)before specific node(value)
4. insertAfter ===>insert (newnode==>newvalue)before specific node(value)
5.insertMiddle===>insert//ass at the middle of ll
6.insertAt specific index===>position 
7.indexof(value)===>search for4 the value===>return its index
8.remove the value of given index===>search for index==>remove its value
9.remove specific value 
10.reverse==>list as argument==>retun this list reversed
11.khFromEnd==>k(number)===>as parameter===>return value places at k from the tail
1->2->3->4->5
k=0
return ==>5
12.palindrome //read from backward as from frontward
*make array of values
*loop through ll
*add values of ll to the new array
*check if the array is palindrome







*/

const Node = require("./node");

//1.//implement node class
class Node {
    constructor(value,next=null){
        this.value=value;
        this.next=next
    }
}
//2.bulild linkedlist claaa
class LinkedList {
    constructor()
    {
        this.head=null;
        this.size=0
    }


//insert //add to the begining of ll 

insert (value){
//create new node 
const newNode =new Node (value)

//check ll 
//if empty 

if (!this.head){
    this.head=newNode
}else{
    // let current=this.head
    newNode.next=this.head
    this.head=newNode 
}
this.size++
}


//append
append (value){
    //crete newNode
    let newNode= new Node (value)
    //check if empty or no
    if(!this.head){
        this.head=newNode
    }else{
        let current=this.head
        while(current.next){
            current=current.next
        }
        //store my newNode at the end 
        current.next=newNode
    }

    this.size++;
}

//insertBefore
insertBefore(value,newValue){
//crete node 
const newNode = new Node (value)
//starting from head
let current = this.head
if (current.value==value){
    newNode.next=current
    this.head=newNode

}else{
    while(current.next){
        if(current.next.value==value){
newNode.next=current.next
current.next=newNode
break;
        }
        current=current.next
    }
}
this.size++
}

//insertAfter
insertAfter(value,newValue){
    const newNode=new Node (value)
    let current=this.head
    while(current){
        if(current.value==value){
            newNode.next=current.next
            current.next=newNode
            break;

        }
        current=current.next
    }
    this.size++

}

//insert at middle 
inserMiddle(value){
    const newNode= new Node (value)
    //
    if(!this.head){
        this.head=newNode
    }else{
        let current=this.head
        let middle=this.head
        while(current.next!==null&&current.next.next!==null)
        {
current=current.next.next
middle=middle.next
        }
        newNode.next=middle.next
        middle.next=newNode
    }
    this.size ++

}


insertAt(value,index){
    if(index<0||index>this.size){
        return 'please enter valid index '
    }else{
        const newNode=new Node(value)
        let current=this.head
        let prev;
        if(index==0){
newNode.next=current
this.head=newNode
        }else{
            let count=0
            current=this.head
            while(count<index){
                count++
                prev=current
                current=current.next
            }
            newNode.next=current
            prev.next=newNode

        }
        

    }
    this.size++
}

//return the index of value (node==>value)if this exist or return -1 if not exist 
//count==>0
//current===>head
///loop==>current!==null
indexOf(value){
    let count=0
    let current=this.head
    while(current!==null){
if(current.value==value){
    return count 
}
count++
current=current.next


    }
    return -1

}

//////---------------------remove from ll-----------------------//////
//1.remove fron specific index//search for the index ====> parameter ====> remove the value associated to it 
//2.remove specific value //search for the value===>parameter===>i will remove it 

removeFrom(index){
if(index<0||index>this.size){
    return 'enter valid index'
}else{
    let current=this.head
    let prev;
    let count=0
    if(index==0){
        this.head=current.next
    }else{
        while(count<index){
            count++
            prev=current
            current=current.next
        }
        //removed the value ///current.value
        prev.next=current.next
    }
    return current.value
}
}


removeElement(value){
    let current=this.head
    let prev=null
   
    while(current!==null){
      if(current.value==value)  {
          if(prev==null){
              this.head=current.next
          }else{
              prev.next=current.next
          }
          return current.value
      }
      prev=current 
      current=current.next
      
    }
return -1
}

khFromEnd(k){
    let current=this.head
    let length=1
    if(k==0){
        current=this.head
        while(current.next){
            current=current.next
        }
        return current.value
    }else if (k<0||k>length){
        return 'enter valid k '
    }else{
        current=this.head
        for(let i=1;i<length-k;i++){
            current=current.next
        }
        return current.value
    }
}

reverse(list){
    const newList =new LinkedList()
    let current=list.head
    while(current){
        newList.insert(current.value)
        current=current.next
    }
    // return newList
    return `head->${newList.toString()}`
}

palindrome(){
    let array=[]
    let current=this.head
    while(current){
        array.push(current.value)
        current=current.next
    }

    let left=0
    let right=array.length-1
    while(left<=right){
       if(array[left]!==array[right]) {
           return false
       }
       left++;
       right--
    }
    return true
}

zipList(list1,list2){
    const result=new LinkedList()
    let currentNode1=list1.head
    let currentNode2=list2.head
    while(currentNode1||currentNode2){
        if(currentNode1){
            result.append(currentNode1)
            currentNode1=currentNode1.next
        }
        if(currentNode2){
            result.append(currentNode2)
            currentNode2=currentNode2.next
        }
    }
    return `head->${result.toString()}`

}
toString(){
    let string=''
    let current=this.head
    while(current){
        string+=`{${current.value}}->`
        current=current.next
    }
    string+=`Null`
    return string
}
includes(value){
    let current=this.head
while(current){
    if(current.value==value){
        return true
    }
    current=current.next
}
return false
}




}