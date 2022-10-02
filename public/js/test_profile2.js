document.getElementById("create_feed").addEventListener("click", function(event){
    event.preventDefault();
    const new_feed = document.getElementById("new_feed").value;
    const caption = document.getElementById("caption")
    caption.innerText = new_feed;
    var posted_feed = {
        media: "not now",
        caption: new_feed
    };
    console.log("button worked!");
    console.log(posted_feed)
});