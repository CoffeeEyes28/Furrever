// 1. Testing Phase One on questionnaire first
var questionnaire = [
    $(".animal_type"),
    $("#name"),
    $("#age"),
    $("#breed_mix"),
    $("#personality_quirks"),
    $(".dog"),
    $(".cat"),
    $(".kids"),
    $("#furry_family"),
    $("#email"),
    $("#date_fostered"),
    $(".neutered_spayed"),
    $(".vaxed"),
    $("#diet"),
    $("#i_love")
]
// To keep all local storage items after refreshing page
$(document).ready(function () {
    $("#create_profile").on("submit", function (event) {
        event.preventDefault();
        let savedAnswerValue=[];
        for (i = 0; i < questionnaire.length; i++) {
        //    questionnaire[i].first().val();
           savedAnswerValue.push(questionnaire[i].first().val())
            // console.log(questionnaire.val);
        }
        console.log(savedAnswerValue)
    })
})
// To keep all local storage items after refreshing page
// $(document).ready(function () {
//     for (i = 0; i < questionnaire.length; i++) {
//         let answerValue = i;
//         var savedAnswerValue = localStorage.getItem(answerValue);
//         console.log(savedAnswerValue);
//         questionnaire[i].val(savedAnswerValue);
//     }
// })

// 2. if input type = radio or selection from form....

// 3. Focusing on URL laters 
const adopt_me_url = $("#adopt_me_url").val;
const miscBtn = $("#submit_url")





