// From https://www.geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// https://www.w3schools.com/js/js_json_http.asp
function sendregistrationdata(){

	var name = document.querySelector('#name');
	var email = document.querySelector('#email');
	var countrycode = document.querySelector('#countrycode');
	var telephone = document.querySelector('#telephone');
	var affiliation = document.querySelector('#affiliation');
	var robots = document.querySelector('#_gotcha');
	if (robots === null) {
	 robots = "";
	}
	// Create XHR object
	var xhr = new XMLHttpRequest();
	var url = "http://api.nairuby.org:4567/register";

	// open a connection
	xhr.open("POST", url, true);

	// Set the request header
	xhr.setRequestHeader("Content-Type", "application/json");

	// Create a state change callback
	xhr.onload =  function () {
			// Print received data from server
		        if (xhr.status >= 200 && xhr.status < 300) {
				// succesful request
				var response_data = JSON.parse(xhr.response);
				console.log("Success");
				result.innerHTML = response_data.message;
			} else {
				// unsuccesful request
				var response_data = JSON.parse(xhr.response);
				console.log("Some error");
				result.innerHTML = response_data.message;
			}
		
	};

	// Converting JSON data to string
	var send_data = JSON.stringify({ 
		"name": name.value,
		"email" : email.value,
		"countrycode" : countrycode.value,
		"telephone" : telephone.value,
		"affiliation" : affiliation.value,
		"robots" : robots.value
	})
	// Send data with the request
	xhr.send(send_data);
	console.log("Sending");
	console.log(send_data);
}
