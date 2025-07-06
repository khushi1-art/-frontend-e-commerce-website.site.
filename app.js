
 const bar = document.getElementById('bar');
  const close = document.getElementById('close');
 const nav = document.getElementById('navbar');
if(bar){
  bar.addEventListener('click',() => {
    nav.classList.add('active');
  })
}

if(close){
  close.addEventListener('click',() => {
    nav.classList.remove('active');
  })
}











/*account page*/

  const loginForm = document.getElementById("LoginForm");
  const regForm = document.getElementById("RegForm");
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");

  function showLogin() {
    loginForm.style.display = "block";
    regForm.style.display = "none";
    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");
  }

  function showRegister() {
    loginForm.style.display = "none";
    regForm.style.display = "block";
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
  }

  // Show login by default
  showLogin();

  // Handle login
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    if (username && password) {
      alert("Login successful!\nUsername: " + username);
    } else {
      alert("Please enter both username and password.");
    }
  });

  // Handle register
  regForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = regForm.querySelector('input[type="text"]').value;
    const email = regForm.querySelector('input[type="email"]').value;
    const password = regForm.querySelector('input[type="password"]').value;
    if (username && email && password) {
      alert("Registration successful!\nWelcome, " + username + "!");
    } else {
      alert("Please fill all fields.");
    }
  });

  // Handle forgot password
  document.getElementById("forgotLink").addEventListener("click", function (e) {
    e.preventDefault();
    const email = prompt("Enter your registered email:");
    if (email) {
      alert("Reset link sent to " + email);
    }
  });
