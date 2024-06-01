// const API_SERVER = 'https://api.themoviedb.org/3'
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGNlMTM5YzRjYjJhYTk4NDkyM2YyZTlmYjFhZjk1OSIsInN1YiI6IjY2NTdiMTViNjhkYTU1MzA2ZmJkMTdhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bQ0ZIZSx1J2wahgF5xfY-4hjcL_XjVb2iTX15oiB0yk',
//   },
// }

// document.addEventListener('DOMContentLoaded', () => {
//   cargarPeliculasTendencia()
//   cargarPeliculasAclamadas()
// })

// // const cargarPeliculasAclamadas = async () => {
// //   const response = await fetch(`${API_SERVER}/movie/top_rated`, options)
// //   const data = await response.json()
// //   const movies = data.results
// //   const aclamadasContainer = document.querySelector('#aclamadasContainer')

// //   for (let i = 0; i < movies.length; i += 4) {
// //     const carouselItem = document.createElement('div')
// //     carouselItem.classList.add('carousel-item')
// //     if (i === 0) {
// //       carouselItem.classList.add('active')
// //     }

// //     const movieGroup = movies.slice(i, i + 4)
// //     movieGroup.forEach((movie) => {
// //       const peliculaItem = document.createElement('div')
// //       peliculaItem.classList.add('pelicula')

// //       const img = document.createElement('img')
// //       img.classList.add('imgAclamada')
// //       img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
// //       img.alt = movie.title
// //       img.loading = 'lazy'

// //       peliculaItem.appendChild(img)
// //       carouselItem.appendChild(peliculaItem)
// //     })

// //     aclamadasContainer.appendChild(carouselItem)
// //   }
// // }
// // Función para cargar las películas aclamadas
// const cargarPeliculasAclamadas = async () => {
//   const response = await fetch(`${API_SERVER}/movie/top_rated`, options)
//   const data = await response.json()
//   const movies = data.results
//   const aclamadasContainer = document.querySelector('#aclamadasContainer')

//   for (let i = 0; i < movies.length; i += 4) {
//     const carouselItem = document.createElement('div')
//     carouselItem.classList.add('carousel-item')
//     if (i === 0) {
//       carouselItem.classList.add('active')
//     }

//     const movieGroup = movies.slice(i, i + 4)
//     movieGroup.forEach((movie) => {
//       const peliculaItem = document.createElement('div')
//       peliculaItem.classList.add('pelicula')

//       const img = document.createElement('img')
//       img.classList.add('imgAclamada')
//       img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//       img.alt = movie.title
//       img.loading = 'lazy'

//       peliculaItem.appendChild(img)
//       carouselItem.appendChild(peliculaItem)
//     })

//     aclamadasContainer.appendChild(carouselItem)
//   }
// }

// // Función para limpiar las películas aclamadas
// const limpiarPeliculasAclamadas = () => {
//   const aclamadasContainer = document.querySelector('#aclamadasContainer')
//   aclamadasContainer.innerHTML = ''
// }

// // Evento que se ejecuta cuando se inicia el deslizamiento del carrusel
// document
//   .getElementById('carouselExampleControls')
//   .addEventListener('slide.bs.carousel', (event) => {
//     // Limpiar las películas aclamadas antes de cargar las nuevas
//     limpiarPeliculasAclamadas()
//   })

// // Evento que se ejecuta cuando finaliza el deslizamiento del carrusel
// document
//   .getElementById('carouselExampleControls')
//   .addEventListener('slid.bs.carousel', (event) => {
//     // Cargar las películas aclamadas correspondientes a la vista actual del carrusel
//     cargarPeliculasAclamadas()
//   })

// let currentPage = 1

// const cargarPeliculasTendencia = async (page = 1) => {
//   const response = await fetch(
//     `${API_SERVER}/movie/popular?page=${page}`,
//     options
//   )
//   const data = await response.json()
//   const movies = data.results
//   const tendenciasContainer = document.querySelector('#tendenciasContainer')
//   tendenciasContainer.innerHTML = ''

//   movies.forEach((movie) => {
//     const col = document.createElement('div')
//     col.classList.add('col-md-3')

//     const ancla = document.createElement('a')
//     ancla.href = './pages/detalle.html'

//     const pelicula = document.createElement('div')
//     pelicula.classList.add('pelicula')

//     const img = document.createElement('img')
//     img.classList.add('imgTendencia')
//     img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//     img.alt = movie.title
//     img.loading = 'lazy'

//     const tituloPelicula = document.createElement('div')
//     tituloPelicula.classList.add('tituloPelicula')

//     const titulo = document.createElement('h4')
//     titulo.textContent = movie.title

//     ancla.appendChild(pelicula)
//     pelicula.appendChild(img)
//     pelicula.appendChild(tituloPelicula)
//     tituloPelicula.appendChild(titulo)
//     col.appendChild(ancla)
//     tendenciasContainer.appendChild(col)
//   })

//   tendenciasContainer.parentElement.setAttribute('data-page', page)
// }

// document.getElementById('botonAnterior').addEventListener('click', () => {
//   if (currentPage > 1) {
//     currentPage--
//     cargarPeliculasTendencia(currentPage)
//   }
// })

// document.getElementById('botonSiguiente').addEventListener('click', () => {
//   currentPage++
//   cargarPeliculasTendencia(currentPage)
// })

const API_SERVER = 'https://api.themoviedb.org/3'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8',
  },
}

// Función para cargar películas en la cuadrícula de tendencias
const cargarPeliculasTendencia = async (page = 1) => {
  const response = await fetch(
    `${API_SERVER}/movie/popular?page=${page}`,
    options
  )
  const data = await response.json()
  const movies = data.results
  const tendenciasContainer = document.querySelector(
    '.peliculasTendencia .peliculas'
  )
  tendenciasContainer.innerHTML = ''

  movies.forEach((movie) => {
    const ancla = document.createElement('a')
    ancla.href = '../usuario-logueado/detalle.html'
    const pelicula = document.createElement('div')
    pelicula.classList.add('pelicula')
    const img = document.createElement('img')
    img.classList.add('imgTendencia')
    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    img.alt = movie.title
    img.loading = 'lazy'
    ancla.appendChild(pelicula)
    pelicula.appendChild(img)
    tendenciasContainer.appendChild(ancla)
  })

  tendenciasContainer.parentElement.setAttribute('data-page', page)
}

// Función para cargar películas en el carrusel de películas aclamadas
const cargarPeliculasAclamadas = async () => {
  const response = await fetch(`${API_SERVER}/movie/top_rated`, options)
  const data = await response.json()
  const movies = data.results
  const aclamadasContainer = document.querySelector('.carousel-inner')
  aclamadasContainer.innerHTML = ''

  const itemContainer = document.createElement('div')
  itemContainer.classList.add('carousel-item', 'active')
  const row = document.createElement('div')
  row.classList.add('row', 'row-cols-1', 'row-cols-md-4', 'g-4')

  movies.forEach((movie, index) => {
    if (index % 8 === 0 && index !== 0) {
      aclamadasContainer.appendChild(itemContainer.cloneNode(true))
      row.innerHTML = ''
    }
    const peliculaItem = document.createElement('div')
    peliculaItem.classList.add('col')
    const img = document.createElement('img')
    img.classList.add('imgAclamada')
    img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    img.alt = movie.title
    img.loading = 'lazy'
    peliculaItem.appendChild(img)
    row.appendChild(peliculaItem)
  })

  itemContainer.appendChild(row)
  aclamadasContainer.appendChild(itemContainer)
}

const botonAnterior = document.getElementById('botonAnterior')
const botonSiguiente = document.getElementById('botonSiguiente')
const seccionTendencias = document.getElementById('tendencias')

// Event listener para el botón "Anterior"
botonAnterior.addEventListener('click', () => {
  let currentPage = Number(seccionTendencias.getAttribute('data-page'))
  if (currentPage <= 1) return
  cargarPeliculasTendencia(currentPage - 1)
})

// Event listener para el botón "Siguiente"
botonSiguiente.addEventListener('click', () => {
  let currentPage = Number(seccionTendencias.getAttribute('data-page'))
  cargarPeliculasTendencia(currentPage + 1)
})

//funcion para cargar detalle de las peliculas

// Ejecutamos las funciones de carga de películas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  cargarPeliculasTendencia()
  cargarPeliculasAclamadas()
})
