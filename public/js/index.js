const home = document.getElementById('home')
const login = document.getElementById('login')
const profile = document.getElementById('profile')




home.addEventListener('click', function (){
    window.location = '/';
})

profile.addEventListener('click', function(){
    window.location = '/profile';
})

login.addEventListener('click',function(){
    window.location = '/login';
})



