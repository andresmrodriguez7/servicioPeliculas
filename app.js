let nombrePeli = document.getElementById("search");
let searchBtn = document.getElementById("buscar");
let keypath = "db9d9875"

let contenedor = document.getElementById("container");
async function buscarPeli() {
    let nombre = nombrePeli.value;
    let path = `http://www.omdbapi.com/?apikey=${keypath}&s=${nombre}`
    let pelicula = await fetch(path);
    let json = await pelicula.json();
    console.log(json);
    contenedor.innerHTML = "";
    for (let index = 0; index < json.Search.length; index++) {
        const element = json.Search[index];
        let src = element.Poster;
        let titulo = element.Title;
        let año = element.Year;
        contenedor.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${src}" alt="">
        <div class="card-body">
            <h5 class="card-title">${titulo}</h5>
            <p class="card-text">${año}.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
    }

}

searchBtn.addEventListener("click", () => {
    buscarPeli();
})