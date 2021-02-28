'use strict';
let numberOfFilms = +prompt("How much movie have you watched?","");

    if(numberOfFilms < 10)
     console.log("Просмотрено довольно мало фильмов");
      
    else if(numberOfFilms >= 10 && numberOfFilms < 30)
    console.log("Вы классический зритель");
        
    else if(numberOfFilms > 30) 
    console.log("Вы киноман");
        
    else console.log("Произошла ошибка");
   
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
let lastFilm, rate;
for(let i = 0; i < 2; i ++){
lastFilm = prompt("What was the last movie you watched?", "");
rate = prompt("how do you rate him?", "");
if(lastFilm != '' && rate !='' && lastFilm.length < 50 && lastFilm != null && rate != null){
    personalMovieDB.movies[lastFilm] = rate;
}
else {
    console.log('error');
    i--;
}
}

//console.log(personalMovieDB);