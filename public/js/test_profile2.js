

// document.getElementById("create_feed").addEventListener("click", function(event){
//     event.preventDefault();
//     const new_feed = document.getElementById("new_feed").value;
//     const caption = document.getElementById("caption")
//     caption.innerText = new_feed;
//     var posted_feed = {
//         media: "not now",
//         caption: new_feed
//     };
//     console.log("button worked!");
//     console.log(posted_feed)
// });


// Element.setAttribute()
// Sets the value of an attribute on the specified element. 
// If the attribute already exists, the value is updated; 
// otherwise a new attribute is added with the specified name and value.

// A user can create and update the feed of the animal;
// A user can upload an image and create a caption for the image;
// A user can create a post with text;
// A user can delete an image and the caption;
// A user can delete a post with text;
// The forms are hidden and appear upon clicking.

const togglePicForm = function(){
    const picForm = document.getElementById('photo')
  if(picForm.className === "is-hidden"){
    picForm.setAttribute('class', 'is-block');
  }else{
    picForm.setAttribute('class', 'is-hidden')
  }
}

document.getElementById('picBtn').addEventListener('click', togglePicForm)

const toggleTextForm = function(){
    const textForm = document.getElementById('textPost')
    if(textForm.className === 'is-hidden'){
        textForm.setAttribute('class', 'is-block')
    }else{
        textForm.setAttribute('class', 'is-hidden')
    }
}

document.getElementById('textBtn').addEventListener('click', toggleTextForm)




const uploadProfile = async (event) => {
    event.preventDefault();
   const image = document.querySelector('#picture')

   var data = new FormData()

   data.append('image', image.files[0])
    const response = await fetch('/api/images', {
        method: 'POST',
        body: data,
        
    });

    if(response.ok){
        window.location.reload()
    }else{
        alert('Failed to upload profile picture')
    }

}

const photoPost = async(event) => {
    event.preventDefault();
    const photo = document.querySelector('#feedpic')
    const text = document.querySelector('#photoCaption').value

    var data = new FormData()

    data.append('image', photo.files[0])
   data.append('caption', text)
    const response = await fetch ('/api/posts/photo',{
        method: 'POST', 
        body: data,

    });

    if(response.ok){
        window.location.reload();
    }else{
        alert('Failed to upload photo')
    }


}


const textPost = async(event) => {
    event.preventDefault();
    const text = document.querySelector('#feedText').value

    var postData = {
        caption: text
    }

const texting = JSON.stringify(postData)

if(texting){
    const response = await fetch('/api/posts/text', {
        method: 'POST',
        body: texting,
        headers: {'Content-Type': 'application/json'},
    
    });


    if(response.ok){
        window.location.reload();
    }else{
        alert('Failed to create post')
    }
}
}
const deletePost = async (event) => {
    // console.log('hello')
    if(event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id')


        const response = await fetch(`/api/posts/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok){
            window.location.reload()
        }else{
            alert('Failed to delete post')
        }

    }
  
};




document.getElementById('profilePicture').addEventListener('submit', uploadProfile)

document.getElementById('photo').addEventListener('submit', photoPost)

document.getElementById('textPost').addEventListener('submit', textPost)

// document.querySelector('.deleteBtn').addEventListener('click', deletePost)
document.querySelectorAll('.deleteBtn').forEach(button => 
    button.addEventListener('click', deletePost))











