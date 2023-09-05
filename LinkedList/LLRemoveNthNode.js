var removeNthNode=function(head,n){
    let dummy=head;
    let count=0;
    while(dummy!==null){
        dummy=dummy.next;
        count++;
    }
    if(count==n){
        return head.next;
        //like remove first node;
    }
    let temp=head;
    for(let i=0;i<count-n-1;i++)//because i start form 0;
    {
        temp=temp.next;
    }
    let nodeToBeDeleted=temp.next;
    temp.next=nodeToBeDeleted.next;
    return head;
}