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
}