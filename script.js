document.getElementById('searchButton').addEventListener('click', searchMovie)

let api_key = '0e37ab471232ae0d72fdef0716a8f880'
let urlBase = 'https://api.themoviedb.org/3/search/movie'

function searchMovie() {
    dataInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?api_key=${api_key}&query=${dataInput}`)
        .then(response => response.json())
        .then(response => displayMovie(response.results))
}

function displayMovie(movies) {
    let displayContainer = document.getElementById('results')
    displayContainer.innerHTML = ''

    if (movies.length === 0) {
        displayContainer.innerHTML = 'No hay resultados'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let poster = document.createElement('img')
        poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

        let releaseDay = document.createElement('p')
        releaseDay.textContent = `La fecha de lanzamiento fue: ${movie.release_date}`

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        movieDiv.append(title, poster, releaseDay, overview)
        displayContainer.appendChild(movieDiv)
    })
}