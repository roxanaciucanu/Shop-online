const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");

const userLogin = () => {
  // This will be triggered when the user clicks on the send button(login page).
  if(emailLogin.value == ""){
  alert("Please fill out the fields")
  }
  else if (
    JSON.parse(localStorage.getItem(emailLogin.value)).password === passwordLogin.value
  ) {//The value of getItem(emailFieldLogin.value) is the password, so I need to validate if they both match.
    alert("Successfully logged in!"); 
    localStorage.setItem("loggedUser", localStorage.getItem(emailLogin.value));
    location.href = "/index.html";
  } else {JSON.parse(localStorage.getItem(emailLogin.value)).password !== passwordLogin.value
    alert("Invalid credentials!");
  }
};
