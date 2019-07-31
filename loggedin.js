// lister for user status changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
           $('#news').show();
        $('#navig').show();
        $("#login-form").css('display', 'none');
        $('#info').hide();
    } else {
        window.location.href = "./accounts.html"

    }
});
 
// if you are logged in $("#LoggedIndiv").show
// else $("youneedtologinDiv").show