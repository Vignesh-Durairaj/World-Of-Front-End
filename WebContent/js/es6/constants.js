window.onload = function() {
	console.log('Hello');

	const myValue = 10;
	console.log(myValue);
	// myValue = 14; // Throws error

	function myFunction(){
		// myValue = 11; // Throws type-error
		const myValue = 12;
		console.log("Inside the myFunction : " + myValue);
	}

	myFunction();
	console.log("Inside the main block : " + myValue);
}