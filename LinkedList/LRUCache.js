class LRUCache{
    constructor(capacity){
        this.capacity=capacity;
        this.cache=new Map();
    }
    get(key){
        if(this.cache.has(key)){
            const value=this.cache.get(key);
            //store it in value;
            this.cache.delete(key);
        //delete it because it is least recently used and again push it into the map so that it stay at the 
        //bottom
        this.cache.set(key,value);
        return value;
        }
        return -1;
    }
    put(key,value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        //what if our storage is over and we should delete not used value for the longtime it would the
        //first key value pair
        else if(this.cache.size>=this.capacity){
            const firstKey=this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key,value);
    }
    print(){
        console.log(this.cache);
    }
}
const lruCache=new LRUCache(3);
lruCache.put(1,1);
lruCache.put(2,2);
lruCache.put(3,3);
lruCache.print();
lruCache.put(4,4);
lruCache.print();
lruCache.get(2);
lruCache.print();
lruCache.put(5,5);
lruCache.print();