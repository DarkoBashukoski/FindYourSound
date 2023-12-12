import users from '../data/users.json' assert { type: 'json' };

let accounts = users.users;

$("#register-submit").click(function() {
    let username = $("#username-input").val();
    let password = $("#password-input").val();
    let confirmPassword = $("#confirm-password-input").val();

    for (let i=0; i<accounts.length; i++) {
        if (username == accounts[i].username) {
            $("#register-error").text("Username already used");
            return;
        }
        if (password == confirmPassword) {
            users.users.push({
                "username": username,
                "password": password
            });
            let jsonData = JSON.stringify(accounts);
        }
    }
});