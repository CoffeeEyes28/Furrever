const home = document.getElementById('home')
const login = document.getElementById('login')





home.addEventListener('click', function (){
    window.location = '/';
})

login.addEventListener('click',function(){
    window.location = '/login';
})