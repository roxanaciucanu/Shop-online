const news = 
[
    {
        name: "Almond milk",
        photo: "meds/isola.jpg" ,
        price: "$7",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Rice Cocoa milk ",
        photo: "meds/cocoa.jpg",
        price: "$8",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Almond milk",
        photo: "meds/sanovita.jpg",
        price: "$7",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Soy milk",
        photo: "meds/soia.jpg",
        price: "$5",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Vanilla Soy milk",
        photo: "meds/vanilla.jpg",
        price: "$6",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Musli cereals",
        photo: "meds/musli.jpeg",
        price: "$11",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Granola",
        photo: "meds/granola.jpg",
        price: "$14",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Chia seeds",
        photo: "meds/chia.jpg",
        price: "$3",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Crackers",
        photo: "meds/rondele.jpg",
        price: "$2",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Peanut butter",
        photo: "meds/peanut.jpg",
        price: "$10",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Coconut oil",
        photo: "meds/cocos.jpg",
        price: "$9",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Classic tea",
        photo: "meds/yogi-classic.jpg",
        price: "$4",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Ginger lemon tea",
        photo: "meds/yogi-ginger.jpg",
        price: "$4",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Inner Harmony tea",
        photo: "meds/yogi-harmony.jpg",
        price: "$4",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Immune Support tea",
        photo: "meds/yogi-immune.jpg",
        price: "$4",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Relax tea",
        photo: "meds/yogi-relax.jpg",
        price: "$4",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Women's balance",
        photo: "meds/yogi-women.jpg",
        price: "$4",
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
    <button class="detailsBtn"> <a href="productPage.html">See more details</a>
    </button>
    </div>
    `
}

document.getElementById("show-products").innerHTML = `
<h3 class= "show-title">Diet and wellness(${news.length} results) </h3>
<section class="wellness">
${news.map(newProd).join('')}
</section>
`

