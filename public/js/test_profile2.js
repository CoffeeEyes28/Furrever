
const photo_feed = document.getElementById("photo_feed").value;

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