window.onload = function() {
	console.log('An intro to the arrow functions in ECMA6 JavaScript !');

	let myVal = function(x, y)  {
		return x * y;
	}

	console.log(myVal(10, 3));

	let anotherVal = function(z) {
		console.log(z)
	}

	let aFunc = (a) => console.log('Hello ' + a);

	aFunc('Vignesh');
	anotherVal('Durairaj');

	console.log()
}