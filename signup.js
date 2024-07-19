// Function to handle signup
document
  .getElementById("signupForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const picture = document.getElementById('profile')

    if (!username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if(!picture){
      alert('please select profile picture')
    }

    const user = { username, password, picture, posts: [] };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");
    window.location.href = "login.html";
  });
