// Object I want rendered
document.getElementById("create_profile").addEventListener("click", (event) => {

 event.preventDefault();
 
// const for field inputs that are strings
const age = document.getElementById("age").value;
const breed_mix = document.getElementById("breed_mix").value;
const personality_quirks = document.getElementById("personality_quirks").value;
const furry_family = document.getElementById("furry_family").value;
const date_fostered = document.getElementById("date_fostered").value;
const email = document.getElementById("email").value;
const diet = document.getElementById("diet").value;
const i_love = document.getElementById("i_love").value;
const adopt_me_url = document.getElementById("adopt_me_url").value;

// const for animal_type radio buttons
const animal_type_dog = document.getElementById("animal_type_dog");
const animal_type_cat = document.getElementById("animal_type_cat");

let animal_type = "";
    if (animal_type_cat.checked == true){
        animal_type = "cat"
    } else if (animal_type_dog.checked == true){
        animal_type = "dog"
    } else {
        console.log("choose a radio button!")
    }

// const for get along with dogs radio buttons
const dog_yes = document.getElementById("dog_yes");
const dog_no = document.getElementById("dog_no")

let dog = "";
    if (dog_yes.checked == true){
        dog = true
    } else if (dog_no.checked == true){
        dog = false
    } else {
        console.log("choose a radio button!")
    }

// const for get along with cats radio buttons
const cat_yes = document.getElementById("cat_yes");
const cat_no = document.getElementById("cat_no")

let cat = "";
    if (cat_yes.checked == true){
        cat = true
    } else if (cat_no.checked == true){
        cat = false
    } else {
        console.log("choose a radio button!")
    }

// const for get along with kids radio buttons
const kids_yes = document.getElementById("cat_yes");
const kids_no = document.getElementById("cat_no")

let kids = "";
    if (kids_yes.checked == true){
        kids = true
    } else if (kids_no.checked == true){
        kids = false
    } else {
        console.log("choose a radio button!")
    }

// const for get neutered_spayed radio buttons
const neutered_spayed_yes = document.getElementById("neutered_spayed_yes");
const neutered_spayed_no = document.getElementById("neutered_spayed_no")

let neutered_spayed = "";
    if (neutered_spayed_yes.checked == true){
        neutered_spayed = true
    } else if (neutered_spayed_no.checked == true){
        neutered_spayed = false
    } else {
        console.log("choose a radio button!")
    }

// const for get neutered_spayed radio buttons
const vaxed_yes = document.getElementById("vaxed_yes");
const vaxed_no = document.getElementById("vaxed_no")

let vaxed = "";
    if (vaxed_yes.checked == true){
        vaxed = true
    } else if (vaxed_no.checked == true){
        vaxed = false
    } else {
        console.log("choose a radio button!")
    }

    // This is the very object I want rendererd so console.log to double check
    var questionnaire = {
        animal_type: animal_type, 
        age: age, 
        breed_mix: breed_mix,
        personality_quirks: personality_quirks,
        furry_family: furry_family,
        date_fostered: date_fostered,
        email: email,
        diet: diet,
        kids: kids,
        dog: dog,
        cat: cat,
        neutered_spayed: neutered_spayed,
        vaxed: vaxed,
        i_love: i_love,
        adopt_me_url: adopt_me_url
    };
    
    console.log("button is working!");
    console.log(questionnaire)
});
    