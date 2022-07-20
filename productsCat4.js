const news = 
[
    {
        name: "Almond milk",
        photo: "/meds/isola.jpg" ,
        price: "x ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Rice Cocoa milk ",
        photo: "/meds/cocoa.jpg",
        price: "y ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Almond milk",
        photo: "meds/sanovita.jpg",
        price: "z ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Soy milk",
        photo: "/meds/soia.jpg",
        price: "xs ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Vanilla Soy milk",
        photo: "/meds/vanilla.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Musli cereals",
        photo: "/meds/musli.jpeg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Granola",
        photo: "/meds/granola.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Chia seeds",
        photo: "/meds/chia.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Crackers",
        photo: "/meds/rondele.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Peanut butter",
        photo: "/meds/peanut.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Coconut oil",
        photo: "/meds/cocos.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Classic tea",
        photo: "/meds/yogi-classic.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Ginger lemon tea",
        photo: "/meds/yogi-ginger.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Inner Harmony tea",
        photo: "/meds/yogi-harmony.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Immune Support tea",
        photo: "/meds/yogi-immune.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Relax tea",
        photo: "/meds/yogi-relax.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Women's balance",
        photo: "/meds/yogi-women.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    }
];


function newProd(prodData) {
    return `
    <div class="medication">
    <img class="med-photo" src="${prodData.photo}">
    <h3 class="news-name">${prodData.name} <span class="prices"> (${prodData.price}) </span></h3>
    <button class="seeDetails"> <a href="productPage.html">See more details</a>
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

