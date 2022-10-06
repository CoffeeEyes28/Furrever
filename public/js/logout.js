const logout = async () => {
   // Send a POST request to the API endpoint
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
       // If successful, redirect the browser to the homepage 
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  

  profile.addEventListener('click', function(){
    window.location = '/profile';
})

  document.querySelector('#logout').addEventListener('click', logout);