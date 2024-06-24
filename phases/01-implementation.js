class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);
    let current = this.data[index];

     // Check if the bucket is null before traversing
     if (current === null) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      // Traverse the linked list to check for existing key
      while (current) {
        if (current.key === key) {
          current.value = value; // Update value if key exists
          return;
        }
        current = current.next;
      }

      // If key does not exist, add new KeyValuePair at the head of the linked list
      const newPair = new KeyValuePair(key, value);
      newPair.next = this.data[index];
      this.data[index] = newPair;
      this.count++;
  }
}

  read(key) {
    // Your code here
    const index = this.hashMod(key);
    let current = this.data[index];

    while(current){
      if(current.key === key){
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }


  resize() {
    // Your code here
    const newCapacity = this.capacity * 2;
    const newData = new Array(newCapacity).fill(null);
  
    for (let i = 0; i < this.capacity; i++) {
      let current = this.data[i];
      while (current) {
        const index = this.hash(current.key) % newCapacity;
        const newPair = new KeyValuePair(current.key, current.value);
        newPair.next = newData[index];
        newData[index] = newPair;
        current = current.next;
      }
    }
  
    this.data = newData;
    this.capacity = newCapacity;
  }


  delete(key) {
    // Your code here
    const index = this.hashMod(key);
    let current = this.data[index];
    let prev = null;

    while(current){
      if(current.key === key){
        if(prev){
          prev.next = current.next;
        }else{
          this.data[index] = current.next;
        }
        this.count--;
        return true;
      }
      prev = current;
      current = current.next;
    }
    return 'Key not found';
  }
}


module.exports = HashTable;