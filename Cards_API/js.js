fetch('https://fakestoreapi.com/products')
.then(resp => resp.json())
.then(data => {
    //Creo la cardContenedor para mostrar cada elemento la API con elementos html
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
    for (let i = 0; i < data.length; i++) {
            crearCard(data[i]);
    }
    document.body.appendChild(cardContainer);
})
.catch(err => console.log(err));