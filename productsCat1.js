const news = 
[
    {
        name: "Aspacardin",
        photo: "meds/aspacardin.jpg" ,
        price: "$15",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Aspenter",
        photo: "meds/aspenter.jpg",
        price: "$22",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Aspimax Cardio",
        photo: "meds/aspimax.jpg",
        price: "$23",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Protecardin",
        photo: "meds/protecardin.jpg",
        price: "$18",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Thrombo",
        photo: "meds/thrombo.jpg",
        price: "$10",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Panagin forte",
        photo: "meds/panagin.jpg",
        price: "$9",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Clorocalcin",
        photo: "meds/clorocalcin.jpg",
        price: "$15",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Cal D vita",
        photo: "meds/cal-d-vita.jpg",
        price: "$24",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Sindolor",
        photo: "/meds/sindolor.jpg",
        price: "$15",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Voltaren",
        photo: "meds/voltaren.jpg",
        price: "$12",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Prostamol",
        photo: "meds/prostamol.jpg",
        price: "$27",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Canephron",
        photo: "/meds/voltaren.jpg",
        price: "$10",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Otipax",
        photo: "meds/otipax.jpg",
        price: "$15",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Ototis",
        photo: "meds/ototis.jpg",
        price: "$11",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Flonidan",
        photo: "meds/flonidan.jpg",
        price:"$26",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Rival",
        photo: "meds/rival.jpg",
        price: "$10",
        availability: "in stock",
        description: "text"
    }
];


function newProd(prodData) {
    return `
    <div class="medication">
    <img class="med-photo" src="${prodData.photo}">
    <p class="news-name">${prodData.name} <span class="prices"> (${prodData.price}) </span></p>
    <i class="fa-solid fa-bag-shopping addToCart"></i>
    <button class="detailsBtn">See more details
    </button>
    </div>
    `
}

document.getElementById("show-products").innerHTML = `
<h3 class= "show-title"> Medication OTC(${news.length} results) </h3>
<section class="prod-oct">
${news.map(newProd).join('')}
</section>
`

//Cart

let cartIcon = document.querySelector("#cart-icon")
let closeCart = document.querySelector("#close-cart")
let openCartBox = document.querySelector('.add-cart')

//Open cart
cartIcon.onclick = () => {
    cart.classList.add("active")
}

//Close cart
closeCart.onclick = () => {
    cart.classList.remove("active")
}


//add to cart
let cart = document.querySelector(".cart")
let addToCartBtn = document.getElementsByClassName("addToCart");
for (let index = 0; i < addToCartBtn.length; index++) {
   let cartBtn =addToCartBtn[i]
    cartBtn.onclick=()=>{
    cart.classList.add("active")
    }
}



function addToCartClicked(event){
    let buttonCart = event.target;
    let addProducts = buttonCart.parentElement;
    let prodTitle = addProducts.getElementsByClassName("news-name")[0].innerTextl;
    let prodPrice = addProducts.getElementsByClassName("prices")[0].innerText;
    let prodImage = addProducts.getElementsByClassName("med-photo")[0].src;

    addProductToCart(prodTitle,prodPrice,prodImage)

}


function addProductToCart(prodTitle, prodPrice, prodImage) {
    cartBox = document.createElement("div");
    cartBox.classList.add("cart-box");
    let cartItems = document.getElementsByClassName("cart-content")[0];
  
    let cartBoxContent = `
                     <img src="${prodImage}" alt="" class="cart-img">
                     <div class="detail-box">
                     <div class="cart-prod-title">${prodTitle}</div>
                     <div class="cart-price">${prodPrice}</div>
                     <input type="number" value="1" class="cart-quantity">
                     </div>
                     <i class="fa-solid fa-trash cart-remove"></i> `;
  
    cartBox.innerHTML = cartBoxContent;
    cartItems.append(cartBox);
    cartBox
      .getElementsByClassName("cart-remove")[0]
      .addEventListener("click", removeCartElements);
    cartBox
      .getElementsByClassName("cart-quantity")[0]
      .addEventListener("change", quantityChanged);
  }
  function addCartClickedDetails(prodTitle, prodPrice, prodImage) {
    addProductToCart(prodTitle, prodPrice, prodImage);

  }

  