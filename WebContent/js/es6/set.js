window.onload = function() {
	console.log(`Time to learn SETs in javascripts`);

	let getDetails = function(a) {
		console.log(a);
		console.log(a.size); // This works for SET, else UNDEFINED
		console.log(a.length); // This works for Array, else UNDEFINED
	}

	let setOne = new Set("Vignesh Durairaj");
	console.log(setOne);

	console.log(setOne.has(' '));
	if (setOne.has(' ')) {
		setOne.delete(' ');
	}

	console.log(setOne);
	setOne.clear();
	console.log(setOne);

	// Let add some more literals. 'add() function returns the same set'
	setOne.add("Vignesh").add("Pranov").add("Venu").add("Durairaj").add("Pranov");
	getDetails(setOne);

	// A set can be created either as empty or for any iterable elements
	// Let's filter an array with unique elements
	let myArr = ['Vignesh', 'Durairaj', 'Pranov', 'Venu', 'Pradeep', 'Pranov', 'Teju', 'Sachin', 'Venu'];
	getDetails(myArr);
	getDetails([...(new Set(myArr))]);

	let setTwo = new Set().add({name:'Vignesh', surname:'Durairaj', age:32});
	setTwo.add('abc').add('zzz').add(21).add(32).add(4);
	getDetails(setTwo);

	let printItem = function(key, value = 'EMPTY') {
		console.log(`KEY : ${key}, VALUE: ${value}`);
	}

	setTwo.forEach(printItem);

	// Let see about some mathematical operations on SETs
	// All were custom implementation over the Prototype SET
	Set.prototype.union = function(anotherSet) {
		let unionSet = new Set();
		for (let ele of this) {
			unionSet.add(ele);
		}

		for(let ele of anotherSet) {
			unionSet.add(ele);
		}

		return unionSet;
	}

	Set.prototype.intersection = function(anotherSet) {
		let intersectedSet = new Set();

		for (let ele of this){
			if(anotherSet.has(ele)) {
				intersectedSet.add(ele);
			}
		}

		return intersectedSet;
	}

	Set.prototype.difference = function(anotherSet) {
		let differenceSet = new Set();

		for (let ele of this) {
			if (!anotherSet.has(ele)) {
				differenceSet.add(ele);
			}
		}

		return differenceSet;
	}

	Set.prototype.subSet = function(anotherSet) {
		let isSubSet = true;

		if (this.size > anotherSet.size) {
			isSubSet = false;
		} else {
			for (let ele of this) {
				if (!anotherSet.has(ele)) {
					isSubSet = false;
					break;
				}
			}
		}

		return isSubSet;
	}

	let a = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	let b = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

	getDetails(a.union(b));
	getDetails(a.intersection(b));
	getDetails(a.difference(b));
	getDetails(a.subSet(b));
}