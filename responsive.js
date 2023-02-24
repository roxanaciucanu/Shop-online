let hamburgerBtn= document.querySelector(".hamburgerIcon")
let hamburgerMenu = document.querySelector(".prod-categories")
let closeHamburger = document.querySelector(".close")
let links = document.querySelectorAll(".link")

//Open hamburger
hamburgerBtn.addEventListener('click', () => {

    hamburgerMenu.classList.toggle("hamburger-active")

    links.forEach((link, index) => {
        if(link.style.animation){
        link.style.animation = ''
        }else{
        link.style.animation = `slideMenu 0.5s ease forwards ${index / 7 + 0.5}s`
        }

        console.log(index / 5)
    })
})

 

