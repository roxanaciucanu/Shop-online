const username = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const lastName = document.getElementById("last_name");

const userSignup = () => {
  if (localStorage.getItem(email.value)) {
    //Validating if the entered email is found on the local storage. If it's found, it means that the user already exists hence no possible to register with the given email. 
    alert("User already exists!"); 
  } else if (localStorage.getItem(email.value).length === 0 ){
    alert ("Please fill out the form")
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
