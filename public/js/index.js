// The Document method getElementById() returns an Element object 
// representing the element whose id property matches the specified string.
const home = document.getElementById('home')
const login = document.getElementById('login')
const profile = document.getElementById('profile')



// The addEventListener() method of the EventTarget interface sets up a 
// function that will be called whenever the specified event is delivered to the target.

home.addEventListener('click', function (){
    window.location = '/';
})



login.addEventListener('click',function(){
    window.location = '/login';
})



