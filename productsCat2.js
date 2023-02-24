const news = 
[
    {
        name: "Dettol",
        photo: "meds/dettol.jpg" ,
        price: "$ 28",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Hygenium",
        photo: "meds/hygienium.jpg",
        price: "$ 32",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Bepanthen",
        photo: "meds/bepanthen.jpg",
        price: "$ 17",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Sudocrem",
        photo: "meds/sudocrem.jpg",
        price: "$ 35",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Exfoliant",
        photo: "meds/exfoliant.jpg",
        price: "$ 42",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Shampoo Klorane",
        photo: "meds/klorane.jpg",
        price: "$ 46",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Hair mask Elseve",
        photo: "meds/elseve.jpg",
        price: "$ 18",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Avene MEN",
        photo: "meds/avene-men.jpg",
        price: "$ 22",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Tarr",
        photo: "meds/tarr.jpg",
        price: "$ 15",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Bioderma",
        photo: "meds/BIODERMA.jpg",
        price: "$ 28",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Lipogel",
        photo: "meds/lipogel.jpg",
        price: "$ 15",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Canephron",
        photo: "meds/voltaren.jpg",
        price: "$ 10",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Otipax",
        photo: "meds/otipax.jpg",
        price: "$ 25",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Ototis",
        photo: "meds/ototis.jpg",
        price: "$ 29",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Flonidan",
        photo: "meds/flonidan.jpg",
        price: "$ 18",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Rival",
        photo: "meds/rival.jpg",
        price: "$ 20",
        availability: "in stock",
        description: "text"
    },
{
    name: "Veet",
        photo: "images/veet.jpg",
        price: "$ 23",
        availability: "in stock",
        description: "text"
},

{
    name: "Deodorant",
        photo: "images/borotalco.jpg",
        price: "$ 12",
        availability: "in stock",
        description: "text"
},


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
<h3 class= "show-title">Personal care(${news.length} results) </h3>
<section class="personal-care">
${news.map(newProd).join('')}
</section>
`

