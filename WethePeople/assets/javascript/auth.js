var userID;
// signup button on click
$('#create').on('click', function () {
    $("#create").hide();
    $("#login").hide();
    $('#signup-form').css('display', 'block');
});

// login button on click
$('#login').on('click', function () {
    $("#create").hide();
    $("#login").hide();
    $('#login-form').css('display', 'block');
});

// submit the signup form
$('#signup-form').on('submit', function (e) {
    e.preventDefault();

    const signupForm = document.querySelector('#signup-form');
    const email = signupForm['create-email'].value;
    const password = signupForm['create-password'].value;



    auth.createUserWithEmailAndPassword(email, password)
        // future development - a unique page for each user
        .then(cred => {
            userID = cred.user.uid;
            return fs.collection('users').doc(userID).set({
                userID: userID,

                about: "",
                address: "",

                hours: "",
                interests: ""
            }).then(() => {

                window.location.href = "./dashboard.html";
            })
        }).catch(function (error) {
            if ($('#error-message-c').length == 0) {

                $('#error-message-c').text(error.message);
            }
            else {
                $('#error-message-c').empty();
                $('#error-message-c').text(error.message);

            }

        });
});


$('#login-form').on('submit', function (e) {
    e.preventDefault();

    const loginForm = document.querySelector('#login-form');
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(function () {
        window.location.href = "./dashboard.html"
    }).catch(function (error) {
        if ($('#error-message-l').length == 0) {

            $('#error-message-l').text(error.message);
        }
        else {
            $('#error-message-l').empty();
            $('#error-message-l').text(error.message);

        }
    });
});
