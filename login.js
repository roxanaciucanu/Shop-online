const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");

const userLogin = () => {
  // This will be triggered when the user clicks on the send button (login page).
  if (
    //JSON.parse(localStorage.getItem(passwordFieldLogin.value)).password
    JSON.parse(localStorage.getItem(emailLogin.value)).password ===
    passwordLogin.value
  ) {
    //Here we're getting the item from the store that has the given value (email). The value of getItem(emailFieldLogin.value) is the password, so we're validating if they both match.
    alert("Successfully logged in!"); // Feel free to add more steps if the condition above is met.
    localStorage.setItem("loggedUser", localStorage.getItem(emailLogin.value));
    location.href = "/index.html";
  } else {
    alert("Invalid credentials!");
  }
};
