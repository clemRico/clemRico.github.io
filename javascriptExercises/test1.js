var movie = [
{
title: "John Wick",
rating: "5 Stars",
hasWatched: true
}
,
{
title: "Avengers Infinity Wars",
rating: "5 Stars",
hasWatched: false
}
,
{
title: "A Quiet Place",
rating: "4 Stars",
hasWatched: true
}
,
{
title: "Jumanji",
rating: "3 Stars",
hasWatched: false
}
];


movie.forEach(function(movies){
    console.log(combineMovieStrings(movies));
});
function combineMovieStrings(movies){
var result = "You have ";
if(movies.hasWatched){
  result += "watched ";
}
else{
  result += "not seen ";
}
result +=  "\"" +movies.title +"\" " +"- " +movies.rating;
return result;
}
