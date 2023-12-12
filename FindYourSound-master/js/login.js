import users from '../data/users.json' assert { type: 'json' };

let accounts = users.users;
$("#login-submit").click(function() {
    let username = $("#username-input").val();
    let password = $("#password-input").val();

    for (let i=0; i<accounts.length; i++) {
        if (username == accounts[i].username) {
            if (accounts[i].password == password) {
                localStorage.setItem("user", username);
                location.href = 'index.html'
                return;
            } else {
                $("#login-error").text("Incorrect password");
                return;
            }
        }
    }
    $("#login-error").text("User does not exist");
});