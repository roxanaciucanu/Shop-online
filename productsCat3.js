const news = 
[
    {
        name: "Vitamins Centrum",
        photo: "meds/centrum.jpg" ,
        price: "$22",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Hair Supplements",
        photo: "meds/forcapil.jpg",
        price: "$18",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Magnesium",
        photo: "meds/magnesium.jpg",
        price: "$20",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Vitamins Maximag",
        photo: "meds/maximag.jpg",
        price: "$17",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Vitamins Solaray",
        photo: "meds/solaray.jpg",
        price: "$12",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Calcium",
        photo: "meds/clorocalcin.jpg",
        price: "$10",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Flonidan",
        photo: "meds/flonidan.jpg",
        price: "$16",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Atoprin",
        photo: "meds/atoprin.jpg",
        price: "$8",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Sniztop",
        photo: "meds/sniztop.jpg",
        price: "$14",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Alergin",
        photo: "meds/alergin.jpg",
        price: "$13",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Alevia",
        photo: "images/alevia.jpg",
        price: "$17",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Calmax",
        photo: "images/product3.jpg",
        price: "$15",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Claritine",
        photo: "images/product1.jpg",
        price: "$10",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Alergy",
        photo: "meds/alergy.jpg",
        price: "$19",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Flonidan",
        photo: "meds/flonidan.jpg",
        price: "$17",
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
    <button class="detailsBtn"> <a href="productPage.html">See more details</a>
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

