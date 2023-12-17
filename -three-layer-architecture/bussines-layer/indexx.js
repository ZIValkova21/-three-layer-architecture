function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Read the content of the text file
    fetch('../data-access-layer/databace.txt')
        .then(response => response.text())
        .then(data => {
            var users = data.split('\n');
            var isValid = false;

            // Check if the entered username and password match any line in the text file
            users.forEach(user => {
                var [storedUsername, storedPassword] = user.split(':');
                if (username === storedUsername && password === storedPassword) {
                    isValid = true;
                }
            });

            // Display a message based on the validation result
            if (isValid) {
                alert("Login successful!");
            } else {
                alert("Invalid username or password. Please try again.");
            }
        })
        .catch(error => console.error('Error reading the file:', error));
}