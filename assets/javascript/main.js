//Side Nav Dropdown
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {

        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

$(document).ready(function(){

    // Modal for opening slides
    $(".modal").modal();
});

openingSlides();
// First Slide
function openingSlides() {
    $("#slidesPage1").show();
    $("#slidesPage2").hide();
    $("#slidesPage3").hide();
    $("#slidesPage4").hide();
}

var slides = 0;

// This Function Will Alow the Slides to Move Backwards 1 Slide
$("#previousButton").click(function(decreaseSlides){
    // Value of slides will decrease by 1
    slides--
    if (slides === 0) {
        openingSlides();
    }
    if (slides === 1) {
        $("#slidesPage1").hide();
        $("#slidesPage2").show();
        $("#slidesPage3").hide();
        $("#slidesPage4").hide();    
    }
    if (slides === 2) {
        $("#slidesPage1").hide();
        $("#slidesPage2").hide();
        $("#slidesPage3").show();
        $("#slidesPage4").hide();
    }
    if (slides === 3) {
        $("#slidesPage1").hide();
        $("#slidesPage2").hide();
        $("#slidesPage3").hide();
        $("#slidesPage4").show();
    }
});

// This Function will Allow the Slides to Move Forwards 1 Slide
$("#nextButton").click(function(increaseSlides){
    // Value of slides will increase by 1
    slides++;
    if (slides === 0) {
        openingSlides();
    }
    if (slides === 1) {
        $("#slidesPage1").hide();
        $("#slidesPage2").show();
        $("#slidesPage3").hide();
        $("#slidesPage4").hide();    
    }
    if (slides === 2) {
        $("#slidesPage1").hide();
        $("#slidesPage2").hide();
        $("#slidesPage3").show();
        $("#slidesPage4").hide();
    }
    if (slides === 3) {
        $("#slidesPage1").hide();
        $("#slidesPage2").hide();
        $("#slidesPage3").hide();
        $("#slidesPage4").show();
    }
});

// When the user has clicked the create account button
// ...they will be redirected to the quiz form
$(".quizButton").click(function(){
    console.log("You have clicked the quiz button!");
    
});