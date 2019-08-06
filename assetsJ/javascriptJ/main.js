$(document).ready(function(){
    // Sidebar Navigation
    $('.sidenav').sidenav();

    // Calling our Opening Slides
    openingSlides();
    
    // First Slide
    function openingSlides() {
        $("#slidesPage1").show();
        $("#slidesPage2").hide();
        $("#slidesPage3").hide();
        $("#slidesPage4").hide();
        $("#slidesPage5").hide();
        $("#slidesPage6").hide();
        $("#slidesPage7").hide();
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
            $("#slidesPage5").hide();
            $("#slidesPage6").hide();
            $("#slidesPage7").hide();
        }
        if (slides === 2) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").show();
            $("#slidesPage4").hide();
            $("#slidesPage5").hide();
            $("#slidesPage6").hide();
            $("#slidesPage7").hide();
        }
        if (slides === 3) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").hide();
            $("#slidesPage4").show();
            $("#slidesPage5").hide();
            $("#slidesPage6").hide();
            $("#slidesPage7").hide();
        }
        if (slides === 4) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").hide();
            $("#slidesPage4").hide();
            $("#slidesPage5").show();
            $("#slidesPage6").hide();
            $("#slidesPage7").hide();
        }
        if (slides === 5) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").hide();
            $("#slidesPage4").hide();
            $("#slidesPage5").hide();
            $("#slidesPage6").show();
            $("#slidesPage7").hide();
        }
        if (slides === 6) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").hide();
            $("#slidesPage4").hide();
            $("#slidesPage5").hide();
            $("#slidesPage6").hide();
            $("#slidesPage7").show();
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
            $("#slidesPage5").hide();
            $("#slidesPage6").hide();
            $("#slidesPage7").hide(); 
        }
        if (slides === 2) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").show();
            $("#slidesPage4").hide();
            $("#slidesPage5").hide();
            $("#slidesPage6").hide();
            $("#slidesPage7").hide();
        }
        if (slides === 3) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").hide();
            $("#slidesPage4").show();
            $("#slidesPage5").hide();
            $("#slidesPage6").hide();
            $("#slidesPage7").hide();
        }
        if (slides === 4) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").hide();
            $("#slidesPage4").hide();
            $("#slidesPage5").show();
            $("#slidesPage6").hide();
            $("#slidesPage7").hide();
        }
        if (slides === 5) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").hide();
            $("#slidesPage4").hide();
            $("#slidesPage5").hide();
            $("#slidesPage6").show();
            $("#slidesPage7").hide();
        }
        if (slides === 6) {
            $("#slidesPage1").hide();
            $("#slidesPage2").hide();
            $("#slidesPage3").hide();
            $("#slidesPage4").hide();
            $("#slidesPage5").hide();
            $("#slidesPage6").hide();
            $("#slidesPage7").show();
        }
    });

    // When the user has clicked the create account button
    // ...they will be redirected to the quiz form
    // $(".contactSubmitBtn").click(function(){
    //     console.log("You have clicked the contact's submit button!");
    //     $("contactForm").submit();
    // });
});
