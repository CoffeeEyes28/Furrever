
<<<<<<< HEAD
const photo_feed = document.getElementById("photo_feed").value;
=======
>>>>>>> main

<<<<<<< HEAD
document.getElementById("create_feed").addEventListener("click", function(event){
    event.preventDefault();

   
    const media = document.getElementById("media").value;
       
    
        
    const new_feed = document.getElementById("new_feed").value;
    const caption = document.getElementById("caption");

    caption.innerText = new_feed;

    var posted_feed = {
        media: media,
        caption: new_feed
    };

    console.log("button worked!");
    console.log(posted_feed)
});
=======
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
>>>>>>> main


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


document.getElementById('profilePicture').addEventListener('submit', uploadProfile)

document.getElementById('photo').addEventListener('submit', photoPost)

document.getElementById('textPost').addEventListener('submit', textPost)