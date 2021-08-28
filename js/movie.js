// api key => f96ac62d92ada173838748fa0f087eef
// image api => https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg

// api doc => https://developers.themoviedb.org/3/authentication

// movie details => https://api.themoviedb.org/3/movie/724089?api_key=f96ac62d92ada173838748fa0f087eef

// top rated movies => https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef

// get videos => https://api.themoviedb.org/3/movie/724089/videos?api_key=f96ac62d92ada173838748fa0f087eef

// if site is youtube get the key and paste here https://youtube.com/watch?v={key}

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef"
)
  .then((res) => res.json())
  .then((data) => setMovies(data.results));
/* eikane data.result dewar karon hocce amr api ta first e ekta object tar vitre ekta array. */

const setMovies = (movies) => {
  const movieSpinner = document.getElementById("movie-spinner");
  movieSpinner.style.display = "none";
  const movieContainer = document.getElementById("movie-container");
  for (const movie of movies) {
    const movieBox = document.createElement("div");
    movieBox.classList.add("col-md-3");
    const imageUrl = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
    movieBox.innerHTML = `
        <div class="shadow rounded p-3 m-2">
        <img class = "img-fluid" src="${imageUrl}">
            <h3>${movie.title}</h3>
            <p>${movie.overview.slice(0, 200)}</p>
            <button onClick = "loadMovieDetails('${
              movie.id
            }')" class="btn btn-primary">see details</button>
        </div>
          `;
    movieContainer.appendChild(movieBox);
  }
};
const loadMovieDetails = (id) => {
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`
  )
    .then((res) => res.json())
    .then((data) => setMovieDetails(data));
};

const setMovieDetails = (movie) => {
  const movieDetails = document.getElementById("movie-details");
  movieDetails.innerHTML = "";
  const movieBox = document.createElement("div");

  movieBox.innerHTML = `
        <h3>${movie.original_title}</h3>
    `;

  movieDetails.appendChild(movieBox);
};
