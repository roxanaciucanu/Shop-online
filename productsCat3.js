const news = 
[
    {
        name: "Vitamins Centrum",
        photo: "/meds/centrum.jpg" ,
        price: "x ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Supplements Forcapil ",
        photo: "/meds/forcapil.jpg",
        price: "y ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Vitamins Magnesium",
        photo: "meds/magnesium.jpg",
        price: "z ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Vitamins Maximag",
        photo: "/meds/maximag.jpg",
        price: "xs ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Vitamins Solaray",
        photo: "/meds/solaray.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Calcium",
        photo: "/meds/clorocalcin.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Flonidan",
        photo: "/meds/flonidan.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Atoprin",
        photo: "/meds/atoprin.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Sniztop",
        photo: "/meds/sniztop.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Alergin",
        photo: "/meds/alergin.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Alevia",
        photo: "/images/alevia.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Calmax",
        photo: "/images/product3.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Claritine",
        photo: "/images/product1.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Alergy",
        photo: "/meds/alergy.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Flonidan",
        photo: "/meds/flonidan.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Rival",
        photo: "/meds/rival.jpg",
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
<h3 class= "show-title">Vitamins and supplements(${news.length} results) </h3>
<section class="vitamin">
${news.map(newProd).join('')}
</section>
`

