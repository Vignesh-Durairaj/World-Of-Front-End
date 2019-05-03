window.onload = function() {
	console.log(`Time to learn SETs in javascripts`);

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
	console.log(set_one);
	console.log(set_one.size);
}