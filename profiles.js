document.querySelector("#big-form").addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log(event.target.children[0].children[1].children)
})