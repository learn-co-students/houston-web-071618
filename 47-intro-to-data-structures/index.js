function test(callback){
  let start = (new Date).getTime()
  for(var i = 0; i < 100000; i++){
    callback()
  }
  let end = (new Date).getTime()
  return end - start
}


function Queue(){
	var storage = {},
		head = 0,
		tail= 0;
    
	return {
		enQueue: function(item){
			storage[tail] = item;
		  	tail++;
		},
		deQueue: function(){
			var size = tail - head;

			if (size <= 0) return undefined;

			var item = storage[head];
			
			delete storage[head];

			head++;

			//Reset the counter
			if (head === tail){
				head = 0;
				tail = 0;
			}
			
			return item;
		},
		size: function(){
			return tail - head;
		},
		peek: function(){
			return storage[tail - 1];
		},
		print: function(){
			var result = [];

			for (var key in storage){
				result.push(storage[key]);
			}

			return result;
		}
	}
}



function Stack(){
    var stack = {};
    var stackSize = 0;
    
    return {
      push: function(item){
        stack[stackSize] = item;
        stackSize++;
      },
      pop: function(){
          if (this.isEmpty()){ return undefined;}
        
        stackSize--;
        
          var item = stack[stackSize];
        delete stack[stackSize];
        
        return item;      
      },
      peek: function(){
          if (this.isEmpty()){
            return undefined;
        }
        
        return stack[stackSize - 1];
      },
      stackEmpty: function(){      
        while (!this.isEmpty()){
          this.pop();
        }
      },
      isEmpty: function(){
          return stackSize === 0;
      },
      size: function(){
          return stackSize;
      },
      print: function(){
        var result = [];
        
        for (var key in stack){
            result.unshift(stack[key]);
        }
        
        return result;
      }
    }	
  }






  function Node(value) {
    this.value = value;
    // this.next = undefined;
  }
  
  function SLinkedList() {
    var head ;//= undefined;
    var length = 0;
    return {
      insert: function(item) {
        if (!item) return;
  
        var node = new Node(item);

  
        if (head) {
          node.next = head;
        }
  
        head = node;
        length++;

      },
      delete: function(value) {
        var curr = head;
  
        if (head.value === value) {
          head = head.next;
          return;
        }
  
        while (curr) {
          if (curr.next) {
            var next = curr.next;
  
            if (next.value === value) {
              curr.next = next.next;
              length--;
              break;
            }
          }
  
          curr = curr.next;
        }
      },
      search: function(value) {
        var curr = head;
        var found = undefined;
  
        while (curr) {
          if (curr.value === value) {
            found = curr;
            break;
          }
  
          curr = curr.next;
        }
  
        return found;
      },
      get size() {
        return length;
      },
      print: function() {
        var result = [];
  
        var curr = head;
        while (curr) {
          result.push(curr.value);
  
          curr = curr.next;
        }
  
        return result;
      }
    }
  }