// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
  let directorsArr = [];
  moviesArray.forEach((movie) => directorsArr.push(movie.director));
  directorsArr = [...new Set(directorsArr)];

  return directorsArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  let filteredArr = moviesArray.filter( (movie) => movie.director === "Steven Spielberg");
  let dramaMovies = filteredArr.filter((movie) => movie.genre.includes("Drama"));

  return dramaMovies.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if(!moviesArray.length) return 0;

  let scoresArr = moviesArray.map((movie) => (movie.score === '')? 0 : movie.score);
  let avg = scoresArr.reduce( (startScore, finalScore) => startScore + finalScore);
  let result = (avg / scoresArr.length).toFixed(2);
  
  return parseFloat(result);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  let dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  let score = dramaMovies.map(movie => movie.score)
  let avg = score.reduce( (startScore, finalScore) => startScore + finalScore );
  let result = (avg / dramaMovies.length).toFixed(2);
  return parseFloat(result);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  let newArr = [...moviesArray]
 let result = newArr.sort((a, b) => (a.year > b.year) ? 1 : -1)

 return result
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newMovies = [...moviesArray];

  if (!newMovies.length) return null;
  else {
    let titleArr = newMovies.map((movie) => movie.title);
    let result = titleArr.sort()
    if(result.length > 20){
      let numberToDelete = result.length - 20
      result.splice(19,numberToDelete)
    }
    return result;
  }

}

orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newMovies = [...moviesArray];

  newMovies.map((movie) => {
    let hourInMin = movie.duration.match(/^[^h]*/) * 60;
    let minutes = movie.duration.match(/[0-9]*(?=min)/) * 1;
    let durationInMin = hourInMin + minutes;
    return (movie.duration = durationInMin);
  });

  return newMovies;
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

  if(!moviesArray.length) return null;
  let scoresArr = moviesArray.map((movie) => movie.score);
  let i = scoresArr.indexOf(Math.max(...scoresArr))
  return `The best year was ${moviesArray[i].year} with an average score of ${moviesArray[i].score}`

}
