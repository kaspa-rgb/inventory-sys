
        // Simulated user database
        let users = [];

        function toggleForm(form) {
            document.getElementById('loginForm').style.display = form === 'login' ? 'block' : 'none';
            document.getElementById('signupForm').style.display = form === 'signup' ? 'block' : 'none';
            document.getElementById('message').textContent = '';
        }

        document.getElementById('login').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const message = document.getElementById('message');

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                message.textContent = 'Login successful!';
                message.className = 'success';
            } else {
                message.textContent = 'Invalid username or password';
                message.className = 'error';
            }
        });

        document.getElementById('signup').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('signupUsername').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            const message = document.getElementById('message');

            if (password !== confirmPassword) {
                message.textContent = 'Passwords do not match';
                message.className = 'error';
                return;
            }

            if (users.some(u => u.username === username)) {
                message.textContent = 'Username already exists';
                message.className = 'error';
                return;
            }

            users.push({ username, email, password });
            message.textContent = 'Sign up successful! You can now log in.';
            message.className = 'success';
            
            // Clear the form
            document.getElementById('signup').reset();
        });
