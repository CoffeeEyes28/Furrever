const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {

       // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the homepage 
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
    
  };
  
  
// The Document method getElementById() returns an Element object representing 
// the element whose id property matches the specified string.

// The addEventListener() method of the EventTarget interface sets up a function that 
// will be called whenever the specified event is delivered to the target.

document.getElementById('login-form').addEventListener('submit', loginFormHandler);



document.querySelector('#signUp').addEventListener('click', function(){
  window.location = '/signup';
})

document.querySelector('#goHome').addEventListener('click', function(){
  window.location = '/';
})





  