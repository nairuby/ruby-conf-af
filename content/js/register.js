// From https://www.geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// https://www.w3schools.com/js/js_json_http.asp
function sendregistrationdata(){

	let name = document.querySelector('#name');
	let email = document.querySelector('#email');
	let countrycode = document.querySelector('#countrycode');
	let telephone = document.querySelector('#telephone');
	let affiliation = document.querySelector('#affiliation');
	let robots = document.querySelector('#_gotcha');
	// Create XHR object
	let xhr = new XMLHttpRequest();
	let url = "http://my.api/register";

	// open a connection
	xhr.open("POST", url, true);

	// Set the request header
	xhr.setRequestHeader("Content-Type", "application/json");

	// Create a state change callback
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status == 200) {
			// Print received data from server
			result.innerHTML = this.responseText;
		}
	};

	// Converting JSON data to string
	var data = JSON.stringify({ 
		"name": name.value,
		"email" : email.value,
		"countrycode" : countrycode.value,
		"telephone" : telephone.value,
		"affiliation" : affiliation.value,
		"robots" : robots.value
	})

	// Send data with the request
	xhr.send(data);
}
