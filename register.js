// const firstName = document.getElementById('name');
// const password = document.getElementById('password');
// const form = document.getElementsByTagName('form');
// const errorElem = document.getElementById('error')
// const button = document.getElementById('abc')


// button.addEventListener('click', (e) => {
//     e.preventDefault()
//     let message = []
//     if (firstName.value === '' || firstName.value == null){
//         message.push('Name is required')
//     }
    
//     if(password.value.length <= 5){
//         message.push('Password must be longer than 5 characters')
//     }
//     if(password.value.length >= 15){
//         message.push('Password must be shorther than 15 characters')
//     }
    
//     if(message.length > 0){
//      e.preventDefault()
//      errorElem.innerHTML = message.join('</br>')
//      }
//      return false
// })

//Signup function
// function signup(e) {
//     event.preventDefault()

const username = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")

const userSignup = ()=>{

if (localStorage.getItem(username.value)) {
    alert("this user exists!")
}else{
    localStorage.setItem(username.value,email.value,pass.value)
    alert('successful registration')
}

}





// let user ={
// name:username,
// email:email,
// password:pass
// }

// let json = JSON.stringify(user);
// localStorage.setItem(username,json)
// console.log('úser added');
// }




