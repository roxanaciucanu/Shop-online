let addToCartIcon = document.querySelector(".addToCart")
let cartSymbol = document.querySelector(".cart")
let closeCart = document.querySelector("#close-cart")


addToCartIcon.onclick = () => {
    cartSymbol.classList.add("active")
}


closeCart.onclick = () => {
    cartSymbol.classList.remove("active")
}

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
} else{
    ready()
}

let addToCartIcon = document.querySelector(".addToCart") 

for (let i = 0; i < addToCartIcon.length; i++) {
let buttonCart = addToCartIcon[i]
buttonCart.addEventListener('click', buttonCartClicked)
buttonCart.onclick = () => cartSymbol.classList.add('active')

}

function buttonCartClicked(event) {
let button = event.target
let shopProduct = button.parentElement
let titleProduct = shopProduct.getElementsByClassName("title--prod")[0].innerText
let priceProduct = shopProduct.getElementsByClassName("prodPrice")[0].innerText
let imgProduct = shopProduct.getElementsById("prodImage")[0].src

addProductsToCart()
}

let cartShopping;
function addProductsToCart(titleProduct,priceProduct,imgProduct) {
cartShopping = document.createElement("div")
cartShopping.classList.add("cart-box")
let itemsInCart = document.getElementsByClassName("cart-content")[0];

let cartBoxContent = `
                   <img src="${imgProduct}" alt="" class="cart-img">
                   <div class="detail-box">
                   <div class="cart-prod-title">${titleProduct}</div>
                   <div class="cart-price">${priceProduct}</div>
                   <input type="number" value="1" class="cart-quantity">
                   </div>
                   <i class="fa-solid fa-trash cart-remove"></i> `;

cartShopping.innerHTML = cartBoxContent
itemsInCart.append(cartShopping)
}