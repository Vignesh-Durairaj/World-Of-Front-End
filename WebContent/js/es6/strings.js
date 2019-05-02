window.onload = function() {
	console.log("Let's see some new elements in ECMA6 Scripts for Strings !");

	/*
		The new methods included in ECMA6 standard of JS are

		1. startsWith
		2. endsWith
		3. includes
		4. repeat
	*/

	for (const ch of 'x\uD83D\uDE80y') {
    	console.log(ch);
	}

	let stringVal = 'Hello World !';
	console.log(stringVal.startsWith(' World')); // false
	console.log(stringVal.startsWith(' World', 5)); // true

	console.log(stringVal.endsWith('Hello')); // false
	console.log(stringVal.endsWith('Hello', stringVal.length - 8)); // true


	document.getElementById('process').onclick = function() {
		let textStr = document.getElementById('sampleText').value;

		console.log(`Original String : ${textStr}`);

		// Few useful methods
		console.log(textStr.startsWith('a'));
		console.log(textStr.endsWith('s'));
		console.log(textStr.includes('name'));
		console.log(textStr.repeat(4));
		console.log(textStr.length);
		console.log([...textStr].length); // Same as line:18
		console.log([...textStr].join('|'));

		// Guess what... we can even iterate over strings
		for (const char of textStr) {
			console.log(`Character used is : ${char}`);
		}

		console.log(...textStr);
		console.log([...textStr]);

		// This gives the numeric value of characters
		for (let val of [...textStr]) {
			console.log(`Iterating over expanded array ${val.codePointAt(0)}`);
		}

		console.log([...(textStr.repeat(5)).trim().split(' ')].join('$'));
	}
}