const news = 
[
    {
        name: "Dettol",
        photo: "/meds/dettol.jpg" ,
        price: "x ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Hygenium",
        photo: "/meds/hygienium.jpg",
        price: "y ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Bepanthen",
        photo: "meds/bepanthen.jpg",
        price: "z ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Sudocrem",
        photo: "/meds/sudocrem.jpg",
        price: "xs ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Exfoliant",
        photo: "/meds/exfoliant.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Shampoo Klorane",
        photo: "/meds/klorane.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Hair mask Elseve",
        photo: "/meds/elseve.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Avene MEN",
        photo: "/meds/avene-men.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Tarr",
        photo: "/meds/tarr.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Bioderma",
        photo: "/meds/bioderma.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

 

    {
        name: "Lipogel",
        photo: "/meds/lipogel.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Canephron",
        photo: "/meds/voltaren.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Otipax",
        photo: "/meds/otipax.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Ototis",
        photo: "/meds/ototis.jpg",
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
    },
{
    name: "Veet",
        photo: "/images/veet.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
},

{
    name: "Deodorant",
        photo: "/images/borotalco.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
},


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
<h3 class= "show-title">Personal care(${news.length} results) </h3>
<section class="personal-care">
${news.map(newProd).join('')}
</section>
`

