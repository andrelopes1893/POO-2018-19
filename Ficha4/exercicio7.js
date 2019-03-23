// array movie
const movies = []

const frmMovie = document.querySelector("form")

//alterar o atributo max da caixa de texto do ano
document.querySelector("#movieYear").max = new Date().getFullYear()

frmMovie.addEventListener("submit", function(event){
    // Obter os valores dos elementos do formulario
    const movieName = document.querySelector("#movieName").value
    const movieYear = document.querySelector("#movieYear").value
    const movieGenre = document.querySelector("#movieGenre").value
    const movieCover = document.querySelector("#movieCover").value
    const movieTrailer = document.querySelector("#movieTrailer").value

    // 1.verificar se o titulo do filme ja existe no array
    if(isTitleAvailable(movieName) == true){
        // 2.se nao existir, 
            // 2.1.Criar um objeto Movie
            const movie = {
                title: movieName,
                year: movieYear,
                genre: movieGenre,
                cover: movieCover,
                trailer: movieTrailer
            }        
            // 2.2.inserir o objeto Movie no array movies
            movies.push(movie)
            renderTable()
            console.table(movies)
    }
    else{
        // 3.Se existir
            // 3.1.Informar o utilizador que o filme já existe
            alert("Titulo já exite!")
    } 

    event.preventDefault()
})

// funçoes auxiliares
function isTitleAvailable(movieName){
    for (const movie of movies) {
        if(movie.title.toLowerCase() === movieName.toLowerCase()){
            return false;
        }
    }
    return true;
}

// preencher a tabela com o array movies
function renderTable(){
    // 1.Obter uma referencia à tabela
    const table = document.querySelector("table")
    table.innerHTML = `<th>Titulo</th>
        <th>Genero</th>
        <th>Opções</th>`
    // 2.Alimentar a tabela
    for (const movie of movies) {
        table.innerHTML += `<tr>
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>
                <button onClick='showCover("${movieCover}")'>Ver Capa</button>
            </td>
            <td>
                <button>Ver Trailer</button>
            </td>
            <td>
                <button>Remover</button>
            </td>
        </tr>`
    }
}

function showCover(movieCover){
    const dialog = document.querySelector("#dlgCover")
    const img = dialog.querySelector("img")
    img.src = movieCover
    dialog.showModal();
}