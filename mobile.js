let hamburgerIcon = document.querySelector(".hamburger-icon")
let hamburgerMenu = document.querySelector(".prod-categories")
let closeHamburger = document.querySelector(".close")

//Open hamburger
hamburgerIcon.onclick = () => {
    hamburgerMenu.classList.add("active")
}

//Close hamburger
closeHamburger.onclick = () => {
    hamburgerMenu.classList.remove("active")
}

