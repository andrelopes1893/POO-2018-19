// array movie
const movies = []

const myForm = document.querySelector("form")

//alterar o atributo max da caixa de texto do ano
document.querySelector("#movieYear").max = new Date().getFullYear()

myForm.addEventListener("submit", function(event){
    // 1.Obter os valores dos elementos do formulario
    const movieName = document.querySelector("#movieName").value
    const movieYear = document.querySelector("#movieYear").value
    const movieGenre = document.querySelector("#movieGenre").value
    const movieCover = document.querySelector("#movieCover").value
    const movieTrailer = document.querySelector("#movieTrailer").value

    // 2.verificar se o titulo do filme ja existe no array
    const result = isMovie(movieName)

    if (result === true) {
        alert("Filme existente.")
    }
    else{
        // 3. criar um objeto com o filme
        const newMovie = {
        title: movieName,
        year: movieYear,
        genre: movieGenre,
        cover: movieCover,
        trailer: movieTrailer
        }

        // 4. inserir o objeto no array 
        movies.push(newMovie);
    }
        //exibir os filmes na tabela
        renderTable();

    event.preventDefault();
    
})
    
//funçao para verificar se o filme ja existir
function isMovie(movieName){
    for (const movie of movies){
        if (movie.newMovie === movieName) {
            return true;
        }
    }
    return false;
}

//funcao para exibir os filmes na tabela
function renderTable(){
    const myTable = document.querySelector("table");

    //adicionar cabeçalho a minha tabela
    myTable.innerHTML = `
        <tr>
            <th>Titulo</th>
            <th>Genero</th>
            <th>Opções</th>
        </tr>
    `
    for (const movie of movies) {
        myTable.innerHTML += `
            <tr>
                <td>${movie.title}</td>
                <td>${movie.genre}</td>
                <td>
                    <button onclick="showCover('${movie.cover}')">Ver Capa</button>
                    <button onclick="showTrailer('${movie.trailer}')">Ver Trailler</button>
                    <button onclick="removeMovie('${movie.title}')">Remove</button>
                </td>
            </tr>
        `
    }
}

//funçao para mostrar a janela da capa do filme
function showCover(cover){
    //injetar o link da capa na imagem
    const imgCover = document.querySelector("#imgCover")
    imgCover.src = cover;

    //exibir a janela no browser
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.showModal();
}

//evento para fechar a janela da capa do filme
const btnCloseCover = document.querySelector("#btnCloseCover")
btnCloseCover.addEventListener("click", function(){
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.close();
})

//funçao para remover um filme
function removeMovie(){
    for (let i = 0; i<movies.length; i++) {
        if (movies[i].title === title){
            //remover filme
            movies.splice(i, 1);
        }
    }

    //atualizar a tabela
    renderTable();
}
    