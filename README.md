# This repository has Cat-Clicker projects done as part of JavaScript DesignPattern course on Udacity

Project Requirements for Cat Clicker
Requirement 1
Visuals

	•	The application should display a picture of a cat and a number of clicks.
	•	The specifics of the layout do not matter, so style it however you'd like.
	
Interaction
	
	•	The number of clicks should increment when the cat picture is clicked.

Resources
In case you need a refresher on events and event listeners, here are some links.
If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener().

	var elem = document.getElementById('my-elem');
	elem.addEventListener('click', function(){
	  //the element has been clicked... do stuff here
	}, false);
	If you're using jQuery, you'll be adding the "click" event listener with jQuery.click().
	$('#my-elem').click(function(e) {
	  //the element has been clicked... do stuff here
	});

Project Requirements for Cat Clicker Duo [\catclicker]
Requirement 2
Visuals

	•	The application should display two cats. Each cat includes
	•	the cat's name
	•	a picture of the cat
	•	text showing the number of clicks
	•	The specifics of the layout do not matter, so style it however you'd like.

Interaction

	•	The number of clicks should increment when each cat picture is clicked.

Project Requirements for Cat Clicker Premium
Requirement 3
Visuals

	•	The application should display
	•	a list of at least 5 cats, listed by name
	•	an area to display the selected cat
	•	In the cat display area, the following should be displayed
	•	the cat's name
	•	a picture of the cat
	•	text showing the number of clicks
	•	The specifics of the layout do not matter, so style it however you'd like.

Interaction

	•	When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
	•	The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.

Project Requirements for Cat Clicker Premium [MVO]
Visuals

	•	The application should display
	•	a list of cats by name
	•	an area to display the selected cat
	•	In the cat display area, the following should be displayed
	•	the cat's name
	•	a picture of the cat
	•	text showing the number of clicks
	•	The specifics of the layout do not matter, so style it however you'd like.

Interaction

	•	When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
	•	The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.

Resources

	Check out the reading node on how to deal with event listeners and closures. You likely will need it to get the click events for your cat list to work.


Project Requirements for Cat Clicker Premium Pro
Visuals

	•	The application should display
	•	a list of cats by name
	•	an area to display the selected cat
	•	an admin button
	•	an admin area with inputs for changing the cat's name, url, and number of clicks (hidden by default)
	•	In the cat display area, the following should be displayed
	•	the cat's name
	•	a picture of the cat
	•	text showing the number of clicks
	•	The specifics of the layout do not matter, so style it however you'd like.

Interaction

	•	When a cat name is clicked in the list, the cat display area should update to show the data for the selected cat.
	•	The number of clicks in the cat area should be unique to each cat, and should increment when the cat's picture is clicked.
	•	When the admin button is clicked, the admin area should appear with the inputs filled in for the currently-selected cat.
	•	When the cancel button in the admin area is pressed, the admin area disappears.
	•	When the save button in the admin area is pressed, the currently-selected cat's values update with the values in the admin area, and the admin area        disappears.

# Catclicker-KOJS is basic cat clicker project with Knockout JS Framework
# Catclicker-KOJS-morecats is same as Cat Clicker Premium Pro using Knockout JS Framework

Thanks to Udacity for great learning experience.