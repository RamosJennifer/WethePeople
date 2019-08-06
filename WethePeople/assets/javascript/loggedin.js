var userDocument;
auth.onAuthStateChanged(user => {
    if (!user) {
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
    // create a local object
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
        // Append the new row to the table   
        $("#donation-table").append(newRowD);
    });
});



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

    // Creates local "temporary" object for holding user data
    var newNews = {
        info: NewsInfo,
        due: NewsDue,
        address: NewsAddress,
        contact: NewsContact
    };


    // Uploads user data to the database
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

        );
        // Append the new row to the table   
        $("#volunteering-table").append(newRow);
    });
});

var about;
var address;
var hours;
var interests;

$("#update-my-profile").on("click", function () {
    event.preventDefault();
    // buttons
    $("#update-my-profile").css('display', 'none');
    $("#save-changes").css('display', 'inline');
    // input
    $("#example").css('display', 'none');
    $("#input").css('display', 'table-row');

});
$("#save-changes").on('click', function () {
    event.preventDefault();

    $("#input").css('display', 'none');

    $("#update-my-profile").css('display', 'inline');
    $("#save-changes").css('display', 'none');


    var userName = $("#account-name-edit").val().trim();
    var userSkills = $("#account-skills-edit").val().trim();
    var userHours = $("#account-hours-edit").val().trim();
    var userAddress = $("#account-address-edit").val().trim();


    fs.collection('profile').doc('rHRul4gGhrVe24hhPlAd').update({
        about: userName,
        hours: userHours,
        address: userAddress,
        interests: userSkills

    });
    about = userName;
    interests = userSkills;
    hours = userHours;
    address = userAddress;
    $('#account-name').text(about);
    $('#account-skills').text(interests);
    $('#account-hours').text(hours);
    $('#account-address').text(address);

    $("#example").css('display', 'table-row');


})
//   logout method
$('#logout').on('click', function () {
    auth.signOut().then(() => {
    });
});
// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});
