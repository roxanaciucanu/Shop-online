const news = 
[
    {
        name: "Aspacardin",
        photo: "/meds/aspacardin.jpg" ,
        price: "$15",
        availability: "in stock",
        description: "text"
    },
    {
        name: "Aspenter",
        photo: "/meds/aspenter.jpg",
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
        photo: "/meds/protecardin.jpg",
        price: "$18",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Thrombo",
        photo: "/meds/thrombo.jpg",
        price: "$10",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Panagin forte",
        photo: "/meds/panagin.jpg",
        price: "$9",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Clorocalcin",
        photo: "/meds/clorocalcin.jpg",
        price: "$15",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Cal D vita",
        photo: "/meds/cal-d-vita.jpg",
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
        photo: "/meds/voltaren.jpg",
        price: "$12",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Prostamol",
        photo: "/meds/prostamol.jpg",
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
        photo: "/meds/otipax.jpg",
        price: "$15",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Ototis",
        photo: "/meds/ototis.jpg",
        price: "$11",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Flonidan",
        photo: "/meds/flonidan.jpg",
        price:"$26",
        availability: "in stock",
        description: "text"
    },

    {
        name: "Rival",
        photo: "/meds/rival.jpg",
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


