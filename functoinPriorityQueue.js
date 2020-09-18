function priorityqueue(){
	
	var collection = [];
	//Add the enqueue function later on<<<enQueue added!
	
	this.enqueue = function(element){
		if(collection.isEmpty()){
			 collection.push(element);
		} else {
			var added = false;
			for(var i = 0; i < collection.length; i++){
				if(element[1] < collection[i][1]){
				collection.splice(i,0,element);
					added = true;
					break;
				}
			}
			if(!added){
				collection.push(element);
			}
		}
	};
	
	this.print = function(){
		console.log(collection);
	};
	this.dequeue = function(){
		var value = collection.shift();
		return value;
	};
	this.size = function(){
		return collection.length();
	};
	this.front = function(){
		return collection[0];
	};
	this.isEmpty = function(){
		return (collection.length === 0);
	};
}