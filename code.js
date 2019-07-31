

// var user = firebase.auth().currentUser;

// user.sendEmailVerification().then(function() {
  // Email sent.
// }).catch(function(error) {
  // An error happened.
// });

// var database = firebase.database();

// var email, userId;

// firebase.auth().onAuthStateChanged(function (user) {

// if (user) {

// email = user.email

// userId = user.uid;

// $("#articleForm").show()

// } else {

// console.log("User Signed Out!")

// $("#articleForm").hide()

// }


// });

// database.ref("notes").on("child_added", function(snapshot){

// var note = snapshot.val()

// var div = $("<div>")

// div.append("<h5>" + note.email + "</h5>")

// div.append("<p>" + note.message + "</p>")

// $("#articles").append(div)

// })

// database.ref("user/" + userId).on("child_added", function(snapshot){

// var note = snapshot.val()

// var div = $("<div>")

// div.append("<h5>" + note.email + "</h5>")

// div.append("<p>" + note.message + "</p>")

// $("#myArticles").append(div)

// })

// function LoginUser(email, password) {

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

// var errorCode = error.code;

// var errorMessage = error.message;

// console.log(errorCode, errorMessage)

// });

// $("#showForm").show();

// $("#userLoginForm").hide();

// };

// function SignUpUser(email, password) {

// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

// var errorCode = error.code;

// var errorMessage = error.message;

// console.log(errorCode, errorMessage)

// });

// $("#showForm").show();

// $("#userLoginForm").hide();

// }

// function LogoutUser() {

// firebase.auth().signOut().then(function () {

// console.log("Signed out User")

// }).catch(function (error) {

// var errorCode = error.code;

// var errorMessage = error.message;

// console.log(errorCode, errorMessage)

// });

// $("#showForm").show();

// $("#userLoginForm").hide();

// }

// $("#userLoginForm").hide();

// $("#showForm").on("click", function(){

// $("#showForm").hide();

// var showForm = $("#userLoginForm").attr("data-isVisible");

// if(showForm === "0"){

// $("#userLoginForm").attr("data-isVisible", 1);

// $("#userLoginForm").show();

// } else {

// $("#userLoginForm").attr("data-isVisible", 0);

// $("#userLoginForm").hide();

// }

// })

// $("#submitUser").on("click", function (e) {

// e.preventDefault();

// var email = $("#userEmail").val();

// var password = $("#userPassword").val();

// LoginUser(email, password)

// $("#userEmail").val("");

// $("#userPassword").val("");

// })

// $("#logoutUser").on("click", LogoutUser)

// $("#createUser").on("click", function (e) {

// e.preventDefault();

// var email = $("#userEmail").val();

// var password = $("#userPassword").val();

// SignUpUser(email, password)

// $("#userEmail").val("");

// $("#userPassword").val("");

// })

// $("#submitNote").on("click", function(e){

// e.preventDefault();

// var message = $("#userNote").val()

// console.log(email, message)

// database.ref("notes").push({

// message: message,

// email: email

// })

// database.ref("user/" + userId).push({

// message: message,

// email: email

// })

// $("#userNote").val("");

// })