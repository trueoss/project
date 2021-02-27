let numberOfFilms = +prompt("How much movie have you watched?","");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastFilm = prompt("What was the last movie you watched?", "");
let rate = prompt("how do you rate him?", "");
personalMovieDB.movies[lastFilm] = rate;
lastFilm = prompt("What was the last movie you watched?", "");
rate = prompt("how do you rate him?", "");
personalMovieDB.movies[lastFilm] = rate;