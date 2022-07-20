const news = 
[
    {
        name: "Aspacardin",
        photo: "/meds/aspacardin.jpg" ,
        price: "x ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Aspenter",
        photo: "/meds/aspenter.jpg",
        price: "y ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Aspimax Cardio",
        photo: "meds/aspimax.jpg",
        price: "z ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Protecardin",
        photo: "/meds/protecardin.jpg",
        price: "xs ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Thrombo",
        photo: "/meds/thrombo.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Panagin forte",
        photo: "/meds/panagin.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Clorocalcin",
        photo: "/meds/clorocalcin.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Cal D vita",
        photo: "/meds/cal-d-vita.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Sindolor",
        photo: "/meds/sindolor.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Voltaren",
        photo: "/meds/voltaren.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Prostamol",
        photo: "/meds/prostamol.jpg",
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
<h3 class= "show-title"> Medication OTC(${news.length} results) </h3>
<section class="prod-oct">
${news.map(newProd).join('')}
</section>
`

