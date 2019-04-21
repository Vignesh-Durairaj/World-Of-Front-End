window.onload = function() {
	var items = document.getElementsByTagName("li");
	console.log(items.length);


	for (let i = 0; i < items.length; i ++) {
		items[i].onclick = function() {
			console.log(i);
		}
	}

	let x = 10;
	console.log("Outside Before : " + x);

	if (x > 5) {
		x = 15; // Making it 'let x = 15;' keeps the value of x as 15 only within the IF loop
		console.log("Inside : " + x);
	}

	console.log("Outside After : " + x);
}