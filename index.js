const rootElem = document.getElementById("root");

function renderShop() {
  const shopContent = `
<div class="hero">
           
</div>

</div>

<section class="shop">
<h2 class="summer">Featured products</h2>
<div class="shop-content">


    <div class="product-box">
        <img src="images/aloe-vera.jpg" alt="" class="prod-img">
        <p class="prod-title">Aloe vera gel</p>
        <span class="price">$30</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
            </button>
    </div>

    <div class="product-box">
        <img src="images/elmex.jpg"  alt="" class="prod-img">
        <p class="prod-title">Elmex toothpaste</p>
        <span class="price">$20</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See details
        </button>
    </div>

    <div class="product-box">
        <img src="images/betadine.jpg"  alt="" class="prod-img">
        <p class="prod-title">Betadine</p>
        <span class="price">$30</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/product2.jpg"  alt="" class="prod-img">
        <p class="prod-title">SPF50 La Roche Posay</p>
        <span class="price">$30</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/Herbagen.jpg"  alt="" class="prod-img">
        <p class="prod-title">Herbagen hand cream</p>
        <span class="price">$30</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/autobronzant.jpg"  alt="" class="prod-img">
        <p class="prod-title">Vichy</p>
        <span class="price">$30</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails"> See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/glow.jpg" alt=""  class="prod-img">
        <p class="prod-title">Glow</p>
        <span class="price">$30</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
        </button>
    </div>

    <div class="product-box">
        <img src="meds/solaray.jpg" alt=""  class="prod-img">
        <p class="prod-title">Vitamin C</p>
        <span class="price">$10</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
        </button>
    </div>

    <div class="product-box">
        <img src="meds/magnesium.jpg" alt=""  class="prod-img">
        <p class="prod-title">Magnesium</p>
        <span class="price">$25</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
        </button>
    </div>

    <div class="product-box">
        <img src="images/uriage.jpg" alt=""  class="prod-img">
        <p class="prod-title">SPF50 Uriage</p>
        <span class="price">$30</span>
        <i class="fa-solid fa-bag-shopping add-cart"></i>
        <button class="seeDetails">See more details
        </button>
    </div>


</div>
`;
  rootElem.innerHTML = shopContent;
}

renderShop();

function renderDetails(e) {
  const info = e.target.parentNode.childNodes;
  const detailsView = `
<h3 class="categorySelect">Home /Medicaments</h3>
<div class="prodPage">
<div class="prodBox">

    <img src=${info[1].src} width="350px" height="320px" id="prodImage">
    <i class="fa-solid fa-left"></i>
    <button class="backBtn" onclick="renderAfterBack()">
    Go back</button>
    </div>
  
    <div class="product">
    <div class="prodInfo">
        <h2>${info[3].innerHTML}</h2>
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
        <i class="fa-solid fa-bag-shopping cart-symbol">  add to cart</i>
       
    </div>
    </div>
    

</div>

`;
  rootElem.innerHTML = detailsView;
}

//   function testing(e) {
//     console.log(e.target.parentNode.childNodes[9])
//   }


//This won't execute unless I refresh the window, because the script only executes once when the window loggs
const btnSeeDetails = document.getElementsByClassName("seeDetails");

for (let index = 0; index < btnSeeDetails.length; index++) {
  btnSeeDetails[index].addEventListener("click", renderDetails);
}

const addClickListener = () => {
  for (let i = 0; i < addCart.length; i++) {
    let button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
};

//I had to create another function to render the 'rendershop' in order to be able to add the addEventListeners again
const renderAfterBack = () => {
  renderShop();
  const btnSeeDetails = document.getElementsByClassName("seeDetails");
  let addCart = document.getElementsByClassName("add-cart");

  for (let index = 0; index < btnSeeDetails.length; index++) {
    btnSeeDetails[index].addEventListener("click", renderDetails);
  }
  addClickListener();
};
