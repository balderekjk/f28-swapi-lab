let button = document.querySelector("button");
let movieButton = document.querySelector("#movie-button");
let residentsContainer = document.querySelector("#residents-container");
let movieContainer = document.querySelector("#movie-container");

function buttonClick() {
  axios
    .get("https://swapi.dev/api/planets/?search=alderaan")
    .then((response) => {
      let alderaan = response.data.results[0];
      for (let i = 0; i < alderaan.residents.length; i++) {
        axios.get(alderaan.residents[i]).then((response) => {
          let residentName = document.createElement("h2");
          residentName.textContent = response.data.name;
          residentsContainer.appendChild(residentName);
        });
      }
    });
}

function movieButtonClick() {
  axios.get("https://swapi.dev/api/films").then((response) => {
    let films = response.data.results;
    for (let i = 0; i < films.length; i++) {
      let movie = document.createElement("li");
      movie.textContent = films[i].title;
      movieContainer.appendChild(movie);
    }
  });
}

button.addEventListener("click", buttonClick);
movieButton.addEventListener("click", movieButtonClick);
