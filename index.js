const rootElem = document.getElementById("root");
let loggedUser = localStorage.getItem("loggedUser") || null;
console.log(loggedUser);
const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");

const logout = () => {
  localStorage.removeItem("loggedUser");
  location.href = "/index.html";
};

if (loggedUser) {
  registerBtn.innerHTML = `<p>Welcome, ${JSON.parse(loggedUser).name}</p>`;
  loginBtn.innerHTML = `<button onclick="logout()">Logout</button>`;
}

function renderShop() {
  const shopContent = `
<div class="hero">
           
</div>


<section class="shop">
<h2 class="summer">Featured products</h2>
<div class="shop-content">


    <div class="product-box">
        <img src="images/aloe-vera.jpg" alt="" class="prod-img">
        <p class="prod-title">Aloe vera gel</p>
        <span class="price">$8</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
            </button>
    </div>

    <div class="product-box">
        <img src="images/elmex.jpg"  alt="" class="prod-img">
        <p class="prod-title">Elmex toothpaste</p>
        <span class="price">$12</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/betadine.jpg"  alt="" class="prod-img">
        <p class="prod-title">Betadine</p>
        <span class="price">$3</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/product2.jpg"  alt="" class="prod-img">
        <p class="prod-title">SPF50 La Roche Posay</p>
        <span class="price">$10</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/Herbagen.jpg"  alt="" class="prod-img">
        <p class="prod-title">Herbagen hand cream</p>
        <span class="price">$5</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/autobronzant.jpg"  alt="" class="prod-img">
        <p class="prod-title">Vichy</p>
        <span class="price">$9</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/glow.jpg" alt=""  class="prod-img">
        <p class="prod-title">Glow</p>
        <span class="price">$12</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
        </button>
    </div>

    <div class="product-box">
        <img src="meds/solaray.jpg" alt=""  class="prod-img">
        <p class="prod-title">Vitamin C</p>
        <span class="price">$4</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
        </button>
    </div>

    <div class="product-box">
        <img src="meds/magnesium.jpg" alt=""  class="prod-img">
        <p class="prod-title">Magnesium</p>
        <span class="price">$6</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/uriage.jpg" alt=""  class="prod-img">
        <p class="prod-title">SPF50 Uriage</p>
        <span class="price">$11</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
        </button>
    </div>


</div>
`;
  rootElem.innerHTML = shopContent;
}

renderShop();

function addProdToCart(title, price, prodImg) {
  cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  let cartItems = document.getElementsByClassName("cart-content")[0];

  

  let cartBoxContent = `
                   <img src="${prodImg}" alt="" class="cart-img">
                   <div class="detail-box">
                   <div class="cart-prod-title">${title}</div>
                   <div class="cart-price">${price}</div>
                   <input type="number" value="1" class="cart-quantity">
                   </div>
                   <i class="fa-solid fa-trash cart-remove"></i> `;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartElements);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}
function addCartClickedDetails(title, price, img) {
  addProdToCart(title, price, img);
  updateTotal();
}

function updateTotal() {
  let cartContent = document.getElementsByClassName("cart-content")[0];
  let cartBoxes = cartContent.getElementsByClassName("cart-box");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceItem = cartBox.getElementsByClassName("cart-price")[0];
    let quantityItem = cartBox.getElementsByClassName("cart-quantity")[0];
    let price = parseInt(priceItem.innerText.replace("$", ""));
    let quantity = quantityItem.value;
    total = total + price * quantity;
  }
}

//Product-page

function renderDetails(e) {
  const info = e.target.parentNode.childNodes;
  const detailsView = `

  <button class="backBtn" onclick="renderAfterBack()"> <i class="fa-solid fa-backward"></i>
  Go back</button>
<div class="prodPage">

<div class="prodBox">

    <img src=${info[1].src} width="350px" height="340px" id="prodImage">
    </div>
  
    <div class="product">
    <div class="prodInfo">
        <h2>${info[3].innerHTML}</h2>
        <span class="review"> 
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        Write a review</span>
        <h3 class="prodPrice">${info[5].innerHTML}</h3>
    </div>
    <div class="prodDetails">
        <h3>Product details</h3>
    </div>
    <div class="prodDescription">
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. </br>
            Natus veritatis nostrum iusto odio minus error qui, maxime consectetur voluptas</br>
            sint deserunt consequuntur nihil commodi dolores labore cumque magnam ab molestiae.
        </p>
    </div>
    
    <h3 class="delOption">Delivery options :</h3>
    <ul class="delivery">
        <li>Quick pick up from the pharmacy</li>
        <li>Home delivery</li>
    </ul>
    <div class="addToCart">
        <i class="fa-solid fa-bag-shopping cart-symbol" ></i>
       <p class= "addCart-text"> Add to cart</p>
       <input type="number" value="0" class="cart-quantity">
    </div>
    </div>

</div>

`;

  rootElem.innerHTML = detailsView;
 
  
  let btnCart = document.getElementsByClassName("cart-quantity")[0]


    btnCart.addEventListener("click", () => {
      addCartClickedDetails(info[3].innerHTML, info[5].innerHTML, info[1].src);
    });

    btnCart.onclick= () =>{
    if(btnCart.value > 0){
      cart.classList.add("active")
    }else{
      cart.classList.remove("active")
    }
    
    }

}


  // function testing(e) {
  //   console.log(e.target.parentNode.childNodes[9])
  // }


//This won't execute unless I refresh the window, because the script only executes once the window loggs
const btnSeeDetails = document.getElementsByClassName("seeDetails");
const detailsButtonn = document.getElementsByClassName("detailsBtn");

for (let index = 0; index < btnSeeDetails.length; index++) {
  btnSeeDetails[index].addEventListener("click", renderDetails);
}


//I had to create another function to render the 'rendershop' in order to be able to add the addEventListeners again
const renderAfterBack = () => {
  renderShop();
  const btnSeeDetails = document.getElementsByClassName("seeDetails");
  let addCart = document.getElementsByClassName("add-cart");

  for (let index = 0; index < btnSeeDetails.length; index++) {
    btnSeeDetails[index].addEventListener("click", renderDetails);
  }
  addClickListener();
}
