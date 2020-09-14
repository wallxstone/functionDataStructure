// Creating a Set function in Js
var collection = [];
var mySet = function(element){

    //This checks the prescence fo an element in our set
    this.has = function(){
        return (collection.indexOf(element) !== -1);
    };

    //List the or Returns the values of the set
    this.values = function(){
        return collection;
    };
    // Adds the element to our Set
    this.add = function(element){
        if(this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    //Removes an item from within the set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };
    //this returns an union of the two Sets
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    //this Returns the intersection of the two sets
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    //this returns the difference of the sets or the values
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    //this returns the subset of the two sets
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };
}

