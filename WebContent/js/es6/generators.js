window.onload = function() {
	console.log(`Let's see how Generators work in java script.`);


	// Consider a regular gunction with no generators
	function noGen() {
		console.log('ready player one');
		console.log('enders games');
		console.log('the dark phoenix');
		console.log('the endgame');
	}

	// Let's make a generator function
	function* gen() {
		console.log('ready player one');
		console.log('enders games');
		console.log('the dark phoenix');
		console.log('the endgame');
	}

	noGen();
	gen(); // This doesn't print things in console. Because we just defined a generator --> Which returns an iterator

	// One funky way to invoke the generator is iterating over it using next() function
	gen().next();

	// We can even provide a puase-point using YIELD keyword

	function* newGen() {
		console.log('New generator is here');
		yield console.log(`Things upto here will be yielded`);
		console.log("Re run to execute the rest of the code");
		yield console.log(`Another pause point here`);
		console.log("End of function");
	}

	let newGenerator = newGen();
	newGenerator.next();
	console.log(`Paused temporarily....`)
	newGenerator.next();
	console.log(`Paused temporarily....`)
	newGenerator.next(); // Any next() beyond this will yield nothing since the end of generator encountered

	// YIELD is kind of return statement and can be used as in below

	function* getFruits() {
		yield 'Banana';
		yield 'Mango';
		yield 'Dragon fruit';
		yield 'Guava';
		return 'Jack Fruit'; // It's always advisable to have RETURN statement as last, to mark the end of generator
	}

	let fruitGen = getFruits();
	console.log(fruitGen.next());
	console.log(fruitGen.next());
	console.log(fruitGen.next());
	console.log(fruitGen.next());
	console.log(fruitGen.next());

	// Every next statement returns an object with properties VALUE and DONE (to indicate the status of iteration)

	fruitGen = getFruits();
	let val = fruitGen.next();
	while(val.value != undefined) {
		console.log(val.value);
		val = fruitGen.next();
	}
}