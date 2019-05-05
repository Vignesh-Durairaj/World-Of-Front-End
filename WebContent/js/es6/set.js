window.onload = function() {
	console.log(`Time to learn SETs in javascripts`);

	let getDetails = function(a) {
		console.log(a);
		console.log(a.size);
		console.log(a.length);
	}

	let set_one = new Set("Vignesh Durairaj");
	console.log(set_one);

	console.log(set_one.has(" "));
	if (set_one.has(' ')) {
		set_one.delete(' ');
	}

	console.log(set_one);
	set_one.clear();
	console.log(set_one);

	// Let add some more literals
	set_one.add("Vignesh").add("Pranov").add("Venu").add("Durairaj").add("Pranov");
	getDetails(set_one);

	// A set can be created either as empty or for any iterable elements
	// Let's filter an array with unique elements

	let my_arr = ['Vignesh', 'Durairaj', 'Pranov', 'Venu', 'Pradeep', 'Pranov', 'Teju', 'Sachin', 'Venu'];
	getDetails(my_arr);
	getDetails([...(new Set(my_arr))]);
}