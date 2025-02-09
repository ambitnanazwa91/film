const API_URL = 'https://swapi.dev/api/people/'
const API_FOOTBALL_URL = 'https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Arsenal_vs_Chelsea'
const token = '57bb4cd7fe2d48f9b2517cb0c7784cd9'
const popleID = 2
let arsenal = ''
const arsenalB = document.querySelector('#arsenal')
const chelsea = ''

// async function fetchData() {
// 	const response = await fetch(URL)
// 	const data = await response.json()
// 	console.log(data)
// }

// const getPeople = () => {
// 	const URL = API_URL + popleID

// 	axios.get(URL).then(res => console.log(res.data))
// }

// getPeople()

// https://api.football-data.org/v4/matches

// Definicja URL API i tokenu
// const getMatches = async () => {
// 	try {
// 		const response = await axios.get(API_FOOTBALL_URL)
// 		console.log(response.data)
// 	} catch (error) {
// 		console.error('Błąd podczas pobierania danych:', error)
// 	}
// }

// getMatches()

// to samo ^ axios / pobieram i wyświetlam badge arsenalu
// const getPeople = () => {
// 	const URL = API_FOOTBALL_URL

// 	axios.get(URL).then(res => {
// 		console.log(res.data)
// 		arsenal = res.data.event[0].strHomeTeamBadge
// 		console.log(arsenal)
// 		arsenalB.src = arsenal
// 	})
// }

// getPeople()

//filmowe
const API_LINK = 'http://www.omdbapi.com/?apikey=3b235daf'
const header = document.querySelector('.title')
const container = document.querySelector('.container')
const search = document.querySelector('.search')
const input = document.querySelector('.film')
const error = document.querySelector('.error')
const send = document.querySelector('.send')
const title = document.querySelector('.name')
const year = document.querySelector('.year')
const category = document.querySelector('.category')
const poster = document.querySelector('#poster')
const write = document.querySelector('.write')
const director = document.querySelector('.director')
const imbd = document.querySelector('.imbd')

const getFilm = () => {
	const film = input.value
	// Budujemy URL z tytułem filmu
	const film_URL = `${API_LINK}&t=${encodeURIComponent(film)}`

	// Wykonaj zapytanie do API
	axios
		.get(film_URL)
		.then(res => {
			if (res.data.Response === 'False') {
				console.error('Błąd podczas pobierania danych:', error)
				error.style.display = 'block'
			} else {
				const loading = document.querySelector('#loading-screen')
				header.style.display = 'none'
				error.style.display = 'none'
				search.style.display = 'none'
				container.style.display = 'none'
				loading.style.display = 'flex'

				setTimeout(() => {
					header.style.display = 'block'
					loading.style.display = 'none'
					search.style.display = 'flex'
					container.style.display = 'flex'
					input.value = '' // Wyświetlenie kontenera
					title.textContent = res.data.Title // Ustawienie tytułu
					year.textContent = res.data.Year // Ustawienie roku
					category.textContent = res.data.Genre // Ustawienie kategorii
					poster.src = res.data.Poster // Ustawienie źródła plakatu
					write.textContent = res.data.Writer
					director.textContent = res.data.Director
					imbd.textContent = res.data.imdbRating

					console.log(title.textContent) // Wypisanie tytułu w konsoli

					console.log(res)
				}, 3000)
			}
		})
		.catch(error => {
			console.error('Błąd podczas pobierania danych:', error)
		})
}

function handleImageError(img) {
	// Nowy obraz, który ma zostać załadowany, jeśli obecny wygasł
	img.src = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Brak_obrazka.svg' // Podaj URL domyślnego obrazka
	img.alt = 'Domyślny plakat' // Opcjonalnie zmień tekst alternatywny
}

send.addEventListener('click', getFilm)
