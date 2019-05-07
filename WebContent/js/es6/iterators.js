window.onload = function() {
	console.log(`Now... we get in detail with iterators`);

	const devs = [
		'brown_wizard', 
		'mad_coder',
		'igor_vanyberg',
		'linus_torvalds'
	];

	// The usual way is iterating using loops
	// Like FOR, WHILE and FOR-OF
	for (dev of devs) {
		console.log(`The developer name : ${dev}`);
	}

	// Let's make this DEVS array as another type of iterable
	const devIter = {
		[Symbol.iterator]() {
			let step = 0;
			const iterator = {
				next() {
					step ++;

					if (step === 1) {
						return devs[step - 1];
					} else if (step === 2) {
						return devs[step - 1];
					} else if (step === 3) {
						return devs[step - 1];
					} else if (step === 4) {
						return devs[step - 1];
					}

					return null;
				}
			};

			return iterator;
		}
	};

	let myIterator = devIter[Symbol.iterator]();
	console.log('From new Iterator : ' + myIterator.next());
	console.log('From new Iterator : ' + myIterator.next());
	console.log('From new Iterator : ' + myIterator.next());
	console.log('From new Iterator : ' + myIterator.next());

}