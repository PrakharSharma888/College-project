// get the Fund button element
var fundButton = document.getElementById("fund-button");

// add an event listener to the Fund button
fundButton.addEventListener("click", function() {
  alert("You clicked the Fund button!");
});

// initialize the carousel using Bootstrap's carousel component
$('.carousel').carousel({
  interval: 3000
});
// login
// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the name, email, password, and confirm password values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirmPassword').value;
  
  // Perform any necessary validation here, such as checking if the passwords match
  
  // Call your signup API or function here, passing in the name, email, and password values
  // Handle the response appropriately, such as redirecting the user to the home page if successful, or displaying an error message if unsuccessful
});

// signup

// Add an event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the name, email, password, and confirm password values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirmPassword').value;
  
  // Perform any necessary validation here, such as checking if the passwords match
  
  // Call your signup API or function here, passing in the name, email, and password values
  // Handle the response appropriately, such as redirecting the user to the home page if successful, or displaying an error message if unsuccessful
});
