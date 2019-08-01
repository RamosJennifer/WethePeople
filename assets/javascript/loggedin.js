
// var loggedInUser = null;
auth.onAuthStateChanged(user => {
    if (user) {
        // loggedInUser = user;
        console.log('user logged in: ', user);
        $('#news').show();
        $('#navig').show();
        $("#login-form").css('display', 'none');
        $('#info').hide();
    } else {
        window.location.href = "./accounts.html";
    }
});



$("#add-donation-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var NewsInfoD = $("#info-input").val().trim();
    var NewsDueD = $("#due-input").val().trim();
    var NewsAddressD = $("#address-input").val().trim();
    var NewsContactD = $("#contact-input").val().trim();

   

    // Creates local "temporary" object for holding train data
    var newNewsD = {
        infoD: NewsInfoD,
        dueD: NewsDueD,
        addressD: NewsAddressD,
        contactD: NewsContactD
    };


    // Uploads train data to the database
    db.ref().push(newNewsD);
     // Clears all of the text-boxes
     $("#info-input").val("");
     $("#due-input").val("");
     $("#address-input").val("");
     $("#contact-input").val("");
     db.ref().on("child_added", function (childSnapshot) {
         console.log(childSnapshot.val());
     
         // Store everything into a variable.
         var NewsInfoD = childSnapshot.val().infoD;
         var NewsDueD = childSnapshot.val().dueD;
         var NewsAddressD = childSnapshot.val().addressD;
         var NewsContactD = childSnapshot.val().contactD;
         var newRowD = $("<tr>").append(
             $("<td>").text(NewsInfoD),
             $("<td>").text(NewsDueD),
             $("<td>").text(NewsAddressD),
             $("<td>").text(NewsContactD),
            
         );
     
         $("#donation-table").append(newRowD);
     });
});
// Append the new row to the table   



$("#add-volunteering-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var NewsInfo = $("#info-input-v").val().trim();
    var NewsDue = $("#due-input-v").val().trim();
    var NewsAddress = $("#address-input-v").val().trim();
    var NewsContact = $("#contact-input-v").val().trim();

    // Clears all of the text-boxes
    $("#info-input-v").val("");
    $("#due-input-v").val("");
    $("#address-input-v").val("");
    $("#contact-input-v").val("");

    // Creates local "temporary" object for holding train data
    var newNews = {
        info: NewsInfo,
        due: NewsDue,
        address: NewsAddress,
        contact: NewsContact
    };

    // Logs everything to console
    console.log(newNews);


    // Uploads train data to the database
    db.ref().push(newNews);
    db.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());
    
        // Store everything into a variable.
        var NewsInfo = childSnapshot.val().info;
        var NewsDue = childSnapshot.val().due;
        var NewsAddress = childSnapshot.val().address;
        var NewsContact = childSnapshot.val().contact;
        var newRow = $("<tr>").append(
            $("<td>").text(NewsInfo),
            $("<td>").text(NewsDue),
            $("<td>").text(NewsAddress),
            $("<td>").text(NewsContact),
            $("<button>").text("see profile"),
        );
    
        $("#volunteering-table").append(newRow);
    });
});
// Append the new row to the table   





$("#update-my-profile").on("click", function(){
    event.preventDefault();
    // buttons
    $("#update-my-profile").css('display', 'none');
    $("#save-changes").css('display', 'inline');
    // input
    $("#example").css('display', 'none');
    $("#input").css('display', 'table-row');



  
    // Grabs user input
    if ($("#account-name-edit").val().length >1 ) {

        var userName = $("#account-name-edit").val().trim();

    }
    if ($("#account-skills-edit").val().length >1 ) {
        var userSkills= $("#account-skills-edit").val().trim();
    }
    if ($("#account-hours-edit").val().length >1 ) {
        var userHours= $("#account-hours-edit").val().trim();
    }
    if ($("#account-address-edit").val().length >1 ) {
        var userAddress= $("#account-address-edit").val().trim();
    }



    
    
})
db.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    // Store everything into a variable.
    var userName = childSnapshot.val().name;
    var userSkills = childSnapshot.val().skills;
    var userHours = childSnapshot.val().address;
    var userAddress= childSnapshot.val().contact;
    var newRow = $("<tr>").append(
        $("<td>").text(userName),
        $("<td>").text(userSkills),
        $("<td>").text(userHours),
        $("<td>").text(userAddress),
        
    );

    $("#updated-page > tbody").append(newRow);

    
});
$("#save-changes").on('click', function(){
    event.preventDefault();
    $("#updated-page").css('display', 'inline');
    $("#input").css('display', 'none');
    $("#update-my-profile").css('display', 'inline');
    $("#save-changes").css('display', 'none');

})