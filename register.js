const username = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const lastName = document.getElementById("last_name");

const userSignup = () => {
  // This will be triggered when the user clicks on the send button
  if (localStorage.getItem(email.value)) {
    // Here we're validating if the entered email is found on the local storage. If it's found, it means that the user already exists hence no possible to register with the given email. We want the emails to be unique, as it'll be the user identifier.
    alert("User already exists!"); 
  } else {
    localStorage.setItem(
      email.value,
      JSON.stringify({
        password: pass.value,
        name: username.value,
        lastName: lastName.value,
      })
    );
    alert("Successful signup!");
    location.href = "/login.html";
  }
};
