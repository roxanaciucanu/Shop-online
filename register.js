const username = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const lastName = document.getElementById("last_name");

const userSignup = () => {
  if (email.value == "" ){
    alert ("Fields must be filled out!")
  } else if (localStorage.getItem(email.value)) {
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
