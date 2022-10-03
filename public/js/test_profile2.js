
<<<<<<< HEAD
const photo_feed = document.getElementById("photo_feed").value;
=======
>>>>>>> main

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


const uploadProfile = async (event) => {
    event.preventDefault();
   const image = document.querySelector('#picture')
   
   var data = new FormData()

   data.append('image', image.files[0])
    const response = await fetch('/api/images', {
        method: 'POST',
        body: data,
        // headers: {'Content-Type': 'multipart/form-data'}
    });

    if(response.ok){
        window.location.reload()
    }else{
        alert('Failed to upload profile picture')
    }

}


document.getElementById('profilePicture').addEventListener('submit', uploadProfile)
