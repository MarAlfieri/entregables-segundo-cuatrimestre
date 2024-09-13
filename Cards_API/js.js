
fetch('https://fakestoreapi.com/products')
.then(resp => resp.json())
.then(data => {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    let crearCard = (producto) => {
        let card = document.createElement("div");
        card.classList.add("card-producto");

        let title = document.createElement("h2");
        title.innerHTML = `${producto.title}`;
        card.appendChild(title);
        

        let listadoDatos = document.createElement("ul");
        for (let key in producto) {
            if (key !== "title") {
                let listItem = document.createElement("li");
                listItem.innerHTML = `${key}: ${producto[key]}`;
                listadoDatos.appendChild(listItem);
            }
        }
        card.appendChild(listadoDatos);
        cardContainer.appendChild(card);
    };

    // Asegurarse de que el DOM esté completamente cargado antes de agregar los elementos
    window.addEventListener("load", () => {
        for (let i = 0; i < data.length; i++) {
            crearCard(data[i]);
        }
        // Añadir el contenedor al cuerpo del documento
        document.body.appendChild(cardContainer);
    });
    setTimeout(() => {
        document.body.appendChild(cardContainer);
    }, 2000);
})
.catch(err => console.log(err));

/* fetch('https://fakestoreapi.com/products')
.then(resp => resp.json())
.then(data =>{
    let card = [];
    console.log(data);
    let crearCard = (data) => {
        card = document.createElement("div");
        card.classList.add("card-producto");
        let title = document.createElement("h2");
        title.innerHTML =`${data.title}`;
        card.appendChild(title);
    };
    
    let listadoDatos = document.createElement("ul");
    for (key in data) {
        if (key !== "title"){
            let listItem = document.createElement("li");
            listItem.innerHTML = `${key}${data[key]}`;
            listadoDatos.appendChild(listItem);
        }
    }
    card.appendChild(listadoDatos);
    
    window.addEventListener("load", () => {
        for (let i = 0; i< data.length; i++) {
            crearCard(data[i]);
        }
    });
    //data.forEach(producto => {
        //document.innerHTML += `<h3>Producto: ${producto.title} </h3>`
    //})
})
.catch(err => console.log(err))
 */