// Get input from form and store as variables

function getValue(id) {
	return {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		phone: document.getElementById('phone').value,
		company: document.getElementById('company').value,
		comments: document.getElementById('comments').value
	};
};


// Add event listener to submit button

document.getElementById('submit-btn').addEventListener('click', function(event) {
	var value = getValue();

	// check if required fields are completed 
	if (value.name === '' || value.email === '' || value.phone === '') {
		alert('Please complete all required fields.');
		// stop it from reloading page if required fields are blank
		event.preventDefault();
	} else {
		document.getElementById('contact-form').submit();
	};
});
